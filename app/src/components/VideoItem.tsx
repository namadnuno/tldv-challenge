import React from 'react';
import {
  Heading, Link, Image, Flex, Box, Badge,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Video } from '../api/types';

dayjs.extend(duration);
dayjs.extend(relativeTime);

type Props = {
    video: Video
}

const formatToHumans = (date: string) => dayjs().to(date);

const VideoItem: React.FC<Props> = ({ video }) => (
  <Flex shadow="base" borderRadius="base" gap={4}>
    <Image
      boxSize="150px"
      objectFit="cover"
      src={`https://img.youtube.com/vi/${video.attributes.slug}/0.jpg`}
      alt={video.attributes.title}
    />
    <Box padding={4}>
      <Link as={ReachLink} to={`/${video.id}`}><Heading fontSize="md">{video.attributes.title}</Heading></Link>
      {
          video.attributes.publishedAt
      && <Badge>{formatToHumans(video.attributes.publishedAt)}</Badge>
      }
    </Box>
  </Flex>
);

export default VideoItem;
