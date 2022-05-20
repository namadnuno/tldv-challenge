export type Video = {
    id: string,
    attributes: {
        slug: string,
        title: string,
        url: string,
        isPublic: true,
        createdAt: string,
        updatedAt: string,
        publishedAt: string
    }
}

export type Pagination = {
    page: number,
    pageSize: 25
    pageCount: 1,
    total: 1
}

export type PaginatedResourceResponse<T> = {
    data: T[],
    meta: {
        pagination: Pagination
    }
}
