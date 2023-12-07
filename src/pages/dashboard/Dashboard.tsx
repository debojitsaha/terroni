import { useEffect, useState } from "react";
import { Breadcrumb } from "../../components/breadcrumb";
import { Table } from "../../components/table";
import { ContentItem, fetchContentAndFolders } from "../../api/fetchContentApi";
import { useUser } from "../../utils/userContext";

const Dashboard: React.FC = () => {
    const { userId } = useUser();
    const headers = [
        "Name",
        "Tags",
        "Source",
        "Created By",
        "Created Date",
        "Modified By",
        "Modified Date",
        "Size",
    ];

    const breadcrumbItems = ["Root", "Marketing", "2023", "Gated Content"];

    const [tableData, setTableData] = useState<any[][]>([]);
    const [isSortDropdownOpen, setSortDropdownOpen] = useState(false);
    const [selectedSortColumn, setSelectedSortColumn] = useState<number>(0);

    const [folderId, setFolderId] = useState("WRS791262501655");

    // Fetch data from the API when the component mounts
    useEffect(() => {
        const fetchContent = async () => {
            try {
                const data = await fetchContentAndFolders({ viewer_id: userId });
                if (data.success) {                 
                    const transformedData = data.items.map((item: ContentItem) => ([
                        item.name,
                        item.mimetype ?? "--",
                        item.source ?? "--",
                        item.created_by,
                        new Date(item.created_at).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }),
                        item.updated_by,
                        new Date(item.updated_at).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }),
                        "--",
                    ]));

                    setTableData(transformedData);
                } else {
                    // Handle API error
                    console.error("API request failed");
                }
            } catch (error) {
                // Handle fetch error
                console.error("Error fetching data:", error);
            }
        };

        fetchContent();
    }, [userId, folderId]);

    const handleSortChange = (columnIndex: number) => {
        setSelectedSortColumn(columnIndex);
        setSortDropdownOpen(false);
    };

    return (
        <div className="flex-col mt-4 flex-1 flex gap-2">
            <span className="rounded-full border-2 px-8 py-2 cursor-pointer w-max text-sm hover:border-zinc-400 transition duration-300">
                Add
            </span>
            <div className="flex items-center justify-between">
                <Breadcrumb items={breadcrumbItems} />
                <div className="options flex gap-4">
                    <div className="relative group">
                        <span
                            className="flex items-center text-sm rounded-lg border shadow border-zinc-400 px-4 py-1 cursor-pointer hover:shadow-lg transition duration-300"
                            onClick={() =>
                                setSortDropdownOpen(!isSortDropdownOpen)
                            }
                        >
                            <span className="mr-1">Sort</span>
                            <span>&#9662;</span>
                        </span>
                        {/* Dropdown for sorting */}
                        {isSortDropdownOpen && (
                            <div className="absolute bg-white border shadow mt-2 p-2 rounded-lg min-h-36">
                                {headers.map((header, index) => (
                                    <div
                                        key={index}
                                        className="cursor-pointer p-2 hover:bg-zinc-100"
                                        onClick={() => handleSortChange(index)}
                                    >
                                        {header}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <span className="flex items-center text-sm rounded-lg border shadow border-zinc-400 px-4 py-1 cursor-pointer hover:shadow-lg transition duration-300">
                        <span className="mr-1">Filter</span>
                        <span>&#9662;</span>
                    </span>
                </div>
            </div>
            <Table
                key={selectedSortColumn}
                columns={headers}
                rows={tableData}
                defaultSortColumn={selectedSortColumn}
            />
        </div>
    );
};

export default Dashboard;
