import React from 'react';
import {
  Alert,
  AlertIcon,
  Skeleton,
  Stack,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import useVideo from '../queries/useVideo';
import VideoForm from '../components/VideoForm';

const VideoEdit = () => {
  const { id } = useParams();
  const { data, error, isFetching } = useVideo(id);

  if (isFetching) {
    return (
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    );
  }

  if (error || !data) {
    return (
      <Alert status="error">
        <AlertIcon />
        There was an error processing your request
      </Alert>
    );
  }

  return (
    <VideoForm id={data.data.id} video={data.data.attributes} />
  );
};

export default VideoEdit;
