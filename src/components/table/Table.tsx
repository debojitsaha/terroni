// Table.tsx
import "./Table.css";
import React, { useState } from "react";
import { Info, Plus } from "react-feather";

interface TableProps {
    columns: string[];
    rows: any[][];
    defaultSortColumn?: number;
    filterColumn?: number;
}

const Table: React.FC<TableProps> = ({
    columns,
    rows,
    defaultSortColumn = 0,
    filterColumn = -1,
}) => {
    const [sortColumn, setSortColumn] = useState(defaultSortColumn);
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [filterValue, setFilterValue] = useState("");

    const [selectAll, setSelectAll] = useState(false);
    const [selectedRows, setSelectedRows] = useState<number[]>([]);

    const handleCheckboxChange = () => {
        setSelectAll(!selectAll);
        setSelectedRows([]);
    };

    const handleRowCheckboxChange = (rowIndex: number) => {
        const selectedRowsCopy = [...selectedRows];
        const index = selectedRowsCopy.indexOf(rowIndex);

        if (index === -1) {
            selectedRowsCopy.push(rowIndex);
        } else {
            selectedRowsCopy.splice(index, 1);
        }

        setSelectedRows(selectedRowsCopy);
        setSelectAll(selectedRowsCopy.length === rows.length);
    };

    const handleSort = (columnIndex: number) => {
        setSortOrder((prevSortOrder) =>
            prevSortOrder === "asc" ? "desc" : "asc"
        );
        setSortColumn(columnIndex);
    };

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterValue(event.target.value);
    };

    const renderCheckboxHeading = () => (
        <input
            type="checkbox"
            name="select-all"
            checked={selectAll}
            onChange={handleCheckboxChange}
            className="custom-checkbox"
        />
    );

    const renderCheckboxCell = (rowIndex: number) => (
        <input
            type="checkbox"
            name="select"
            checked={selectedRows.includes(rowIndex)}
            onChange={() => handleRowCheckboxChange(rowIndex)}
            className="custom-checkbox"
        />
    );

    const renderPlusButton = (rowIndex: number) => (
        <span
            onClick={() => {
                console.log("Plus button clicked for row:", rowIndex);
            }}
            className="rounded-full px-3 py-1 plus-btn hover:bg-indigo-900 cursor-pointer"
        >
            <Plus className="cursor-pointer text-zinc-100 h-4 hover:text-white" />
        </span>
    );

    const renderTableHeadings = () => (
        <tr>
            <th className="px-4 py-6">{renderCheckboxHeading()}</th>
            {columns.map((heading, index) => (
                <th key={index} className="font-bold px-4 py-6">
                    <div className="flex items-center">
                        <span>{heading}</span>
                        {index === sortColumn && (
                            <span
                                className={`ml-2 cursor-pointer ${
                                    sortOrder === "asc" ? "rotate-180" : ""
                                }`}
                                onClick={() => handleSort(index)}
                            >
                                &#8597;
                            </span>
                        )}
                    </div>
                </th>
            ))}
            <th className="px-4 py-6 w-36"></th>
        </tr>
    );

    const renderTableRows = () => (
        <>
            {rows
                .filter((row) =>
                    filterColumn !== -1
                        ? row[filterColumn]
                              .toLowerCase()
                              .includes(filterValue.toLowerCase())
                        : true
                )
                .sort((a, b) =>
                    sortColumn !== -1
                        ? a[sortColumn].localeCompare(b[sortColumn]) *
                          (sortOrder === "asc" ? 1 : -1)
                        : 0
                )
                .map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        <td className="px-4 py-6 text-center">
                            {renderCheckboxCell(rowIndex)}
                        </td>
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex} className="px-4 py-6">
                                {cellIndex === 0 && (
                                    <div className="flex items-center justify-between">
                                        <span className="ml-2">{cell}</span>
                                        {renderPlusButton(rowIndex)}
                                    </div>
                                )}
                                {cellIndex !== 0 && <span>{cell}</span>}
                            </td>
                        ))}
                        <td className="px-4 py-6 text-center">
                            <Info
                                onClick={() => {
                                    // Implement logic to show modal with row data
                                    console.log("Show modal for row:", row);
                                }}
                                className="cursor-pointer text-zinc-400"
                            />
                        </td>
                    </tr>
                ))}
        </>
    );

    return (
        <div className="flex-1 overflow-y-auto bg-white shadow rounded-lg pb-2">
            <table className="w-full border-separate border-spacing-x-5">
                <thead>{renderTableHeadings()}</thead>
                <tbody>{renderTableRows()}</tbody>
            </table>
        </div>
    );
};

export default Table;
