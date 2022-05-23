import React from 'react';
import VideoForm from '../components/VideoForm';

const defaultVideo = {
  title: '',
  slug: '',
  url: '',
  isPublic: false,
};

const VideoCreate = () => (
  <VideoForm video={defaultVideo} />
);

export default VideoCreate;
