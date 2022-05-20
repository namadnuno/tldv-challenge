import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import nock from 'nock';
import { render } from '../test-utils';
import VideosList from '../pages/VideosList';
import { singleVideoResponse } from './mockResponses';
import { baseURL } from '../api';
import VideoEdit from '../pages/VideoEdit';

const getInputs = () => ({
  title: (screen.queryByLabelText('Title') as HTMLInputElement),
  slug: (screen.queryByLabelText('Slug') as HTMLInputElement),
  url: (screen.queryByLabelText('Url') as HTMLInputElement),
  isPublic: (screen.queryByLabelText('Public') as HTMLInputElement),
});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    id: '1',
  }),
  useRouteMatch: () => ({ url: '/1' }),
}));

describe('videos editting page', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  afterEach(() => {
    nock.cleanAll();
  });

  describe('successfull response', () => {
    beforeEach(() => {
      nock(baseURL)
        .get('/videos/1')
        .reply(200, singleVideoResponse);
    });

    it('should show the video editting fields', async () => {
      render(<VideoEdit />);

      await waitFor(() => {
        expect(screen.queryByLabelText('Title')).toBeInTheDocument();
        expect(screen.queryByLabelText('Slug')).toBeInTheDocument();
        expect(screen.queryByLabelText('Url')).toBeInTheDocument();
        expect(screen.queryByLabelText('Public')).toBeInTheDocument();
      });
    });

    it('should show fill the video fields with data', async () => {
      render(<VideoEdit />);

      await waitFor(() => {
        expect(getInputs()?.title?.value).toBe(singleVideoResponse.data.attributes.title);
        expect(getInputs()?.slug?.value).toBe(singleVideoResponse.data.attributes.slug);
        expect(getInputs()?.url?.value).toBe(singleVideoResponse.data.attributes.url);
        expect(getInputs()?.isPublic?.checked).toBe(singleVideoResponse.data.attributes.isPublic);
      });
    });
  });

  describe('error response', () => {
    beforeEach(() => {
      nock(baseURL)
        .get('/videos')
        .reply(404);
    });

    it('should show an error message', async () => {
      render(<VideosList />);

      await waitFor(() => {
        expect(screen.queryByText(/There was an error processing your request/)).toBeInTheDocument();
      });
    });
  });
});
