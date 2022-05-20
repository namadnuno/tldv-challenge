import { useQuery } from 'react-query';
import { PaginatedResourceResponse, Video } from '../api/types';
import { queryVideos } from '../api/videos';
import { unwrapData } from '../helpers';

const useVideos = () => useQuery('videos', () => unwrapData<PaginatedResourceResponse<Video>>(queryVideos()));

export default useVideos;
