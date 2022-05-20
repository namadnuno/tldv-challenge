import { useQuery } from 'react-query';
import { ResourceResponse, Video } from '../api/types';
import { queryVideosById } from '../api/videos';
import { unwrapData } from '../helpers';

const useVideo = (id: string | undefined) => useQuery(['videos', { id }], () => unwrapData<ResourceResponse<Video>>(queryVideosById(id as string)), {
  enabled: !!id,
});

export default useVideo;
