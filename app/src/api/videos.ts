import { api } from '.';
import {
  PaginatedResourceResponse, ResourceResponse, Video, VideoAttributes,
} from './types';

const queryVideos = () => api.get<PaginatedResourceResponse<Video[]>>('/videos');

const queryVideosById = (id: string) => api.get<ResourceResponse<Video>>(`/videos/${id}`);

const updateVideoAttributes = (id: string, formData: VideoAttributes) => api.put<ResourceResponse<Video>>(`/videos/${id}`, { data: formData });

export { queryVideos, queryVideosById, updateVideoAttributes };
