import { api } from ".";
import { PaginatedResourceResponse, Video } from "./types";

const queryVideos = () => api.get<PaginatedResourceResponse<Video>>('/videos');

export { queryVideos }