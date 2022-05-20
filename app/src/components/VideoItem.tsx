import React from "react"
import { Heading, Link  } from '@chakra-ui/react'
import { Video } from '../api/types';
import { Link as ReachLink } from "react-router-dom"

type Props = {
    video: Video
}

const VideoItem: React.FC<Props> = ({video}) => {
    console.log({video})
    return <Link as={ReachLink} to={`/${video.id}`}><Heading>{video.attributes.title}</Heading></Link>
}

export default VideoItem;