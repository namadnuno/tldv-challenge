import { api } from '.';
import { PaginatedResourceResponse, ResourceResponse, Video } from './types';

const queryVideos = () => api.get<PaginatedResourceResponse<Video[]>>('/videos');

const queryVideosById = (id: string) => api.get<ResourceResponse<Video>>(`/videos/${id}`);

export { queryVideos, queryVideosById };
