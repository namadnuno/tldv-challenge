import React from 'react';
import {
  Alert,
  AlertIcon,
  Badge,
  Button,
  Flex,
  Heading, Link, Skeleton, Stack,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { Link as ReachLink, useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import useVideo from '../queries/useVideo';
import { formatToHumans } from '../helpers';

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
      <Flex justifyContent="space-between" mb={16} alignItems="center">
        <Link href={`${data?.data.attributes.url}`} target="_blank">
          <Heading>{data?.data.attributes.title}</Heading>
          {
          data?.data.attributes.publishedAt
      && <Badge>{formatToHumans(data?.data.attributes.publishedAt)}</Badge>
      }
        </Link>
        <Button colorScheme="blue" as={ReachLink} to={`/${data?.data.id}/edit`}>
          <EditIcon />
        </Button>
      </Flex>
      <Flex data-testid="player" justifyContent="center" py={16} bg="black" borderRadius="lg">
        <YouTube
          videoId={data?.data.attributes.slug}
          opts={{
            playerVars: {
              autoplay: 1,
            },
          }}
        />
      </Flex>
    </Stack>
  );
}

export default VideoDetails;
