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

export type ResourceResponse<T, M = {}> = {
    data: T,
    meta: M
}

export type PaginatedResourceResponse<T> = ResourceResponse<T, {
    pagination: Pagination
}>
