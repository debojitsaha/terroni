import api from ".";

type Options = {
    viewer_id: string;
    folder_id?: string;
    sortOption?: string;
    order?: string;
};

type ContentItem = {
    id: string;
    name: string;
    parent_folder: string;
    created_at: Date;
    updated_at: Date;
    created_by: string;
    updated_by: string;
    parent_folder_name: string;
    content?: {
        type: string;
        data: number[];
    };
    thumbnail: string | null;
    source: string;
    folder: string;
    mimetype: string;
    folder_name: string;
}

type ApiResponse = {
    success: boolean;
    items: ContentItem[];
}

const fetchContentAndFolders = async (options: Options) => {
    const response = await api.post(
        "/view-content-and-folders-sorted",
        options
    );
    return response.data as ApiResponse;
};

export { fetchContentAndFolders };
export type { ApiResponse, ContentItem };
