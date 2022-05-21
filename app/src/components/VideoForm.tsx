/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Alert,
  AlertIcon,
  Button,
  FormControl, FormLabel, Input, Stack, Switch,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { Link as ReachLink } from 'react-router-dom';
import { VideoAttributes } from '../api/types';
import { updateVideoAttributes } from '../api/videos';

type Props = {
    video: VideoAttributes,
    id: string
}

const VideoForm: React.FC<Props> = ({ video, id }) => {
  const {
    register, handleSubmit,
  } = useForm({
    defaultValues: video,
  });

  const queryClient = useQueryClient();
  const mutation = useMutation((formData: VideoAttributes) => updateVideoAttributes(id, formData));

  const onSubmit = (formData: VideoAttributes) => {
    mutation.mutate({
      title: formData.title,
      slug: formData.slug,
      url: formData.url,
      isPublic: formData.isPublic,
    });

    queryClient.invalidateQueries([['videos', { id }]]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        {
              mutation.isSuccess
              && (
              <Alert status="success">
                <AlertIcon />
                Video updated
              </Alert>
              )
          }
        {
              mutation.isError
              && (
              <Alert status="error">
                <AlertIcon />
                There was an error processing your request
              </Alert>
              )
          }
        <FormControl>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input id="title" type="text" {...register('title')} />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="slug">Slug</FormLabel>
          <Input id="slug" type="text" {...register('slug')} />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="url">Url</FormLabel>
          <Input id="url" type="text" {...register('url')} />
        </FormControl>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="isPublic" mb="0">
            Public
          </FormLabel>
          <Switch id="isPublic" {...register('isPublic')} />
        </FormControl>
        <FormControl display="flex" alignItems="center" justifyContent="flex-end" gap={3}>
          <Button as={ReachLink} to={`/${id}`} colorScheme="blackAlpha" size="lg" isLoading={mutation.isLoading}>
            Back
          </Button>
          <Button type="submit" colorScheme="blue" size="lg" isLoading={mutation.isLoading}>
            Submit
          </Button>
        </FormControl>
      </Stack>
    </form>
  );
};

export default VideoForm;
