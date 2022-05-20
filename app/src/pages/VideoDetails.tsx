import React from 'react';
import {
  Alert,
  AlertIcon,
  Box,
  Flex,
  Heading, Link, Skeleton, Stack,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { Link as ReachLink, useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import useVideo from '../queries/useVideo';

function VideoDetails() {
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
  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        There was an error processing your request
      </Alert>
    );
  }

  return (
    <Stack>
      <Flex justifyContent="space-between">
        <Link href={`${data?.data.attributes.url}`} target="_blank">
          <Heading>{data?.data.attributes.title}</Heading>
        </Link>
        <Link as={ReachLink} to={`/${data?.data.id}/edit`}>
          <EditIcon />
        </Link>
      </Flex>
      <Box data-testid="player">
        <YouTube
          videoId={data?.data.attributes.slug}
          opts={{
            playerVars: {
              autoplay: 1,
            },
          }}
        />
      </Box>
    </Stack>
  );
}

export default VideoDetails;
