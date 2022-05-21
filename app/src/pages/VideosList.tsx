import React from 'react';
import {
  Alert, AlertIcon, Box, Grid, Skeleton, Stack,
} from '@chakra-ui/react';
import VideoItem from '../components/VideoItem';
import useVideos from '../queries/useVideos';

function VideosList() {
  const { data, error, isFetching } = useVideos();

  if (isFetching) {
    return (
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    );
  }
  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        There was an error processing your request
      </Alert>
    );
  }

  return (
    <Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {
                    data?.data.map((video) => (<VideoItem key={video.id} video={video} />))
                }
      </Grid>
    </Box>
  );
}

export default VideosList;
