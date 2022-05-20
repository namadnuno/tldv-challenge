export type VideoAttributes = {
    slug: string,
    title: string,
    url: string,
    isPublic: boolean,
    createdAt?: string,
    updatedAt?: string,
    publishedAt?: string
}

export type Video = {
    id: string,
    attributes: VideoAttributes
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
