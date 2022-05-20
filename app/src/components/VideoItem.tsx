import React from 'react';
import { Heading, Link } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { Video } from '../api/types';

type Props = {
    video: Video
}

const VideoItem: React.FC<Props> = ({ video }) => <Link as={ReachLink} to={`/${video.id}`}><Heading>{video.attributes.title}</Heading></Link>;

export default VideoItem;
