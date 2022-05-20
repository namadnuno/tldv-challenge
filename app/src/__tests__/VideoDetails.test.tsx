import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import nock from 'nock';
import { render } from '../test-utils';
import { singleVideoResponse } from './mockResponses';
import { baseURL } from '../api';
import VideoDetails from '../pages/VideoDetails';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    id: '1',
  }),
  useRouteMatch: () => ({ url: '/company/company-id1/team/team-id1' }),
}));

describe('video details page', () => {
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

    it('should show all the videos details', async () => {
      render(<VideoDetails />);

      await waitFor(() => {
        const titleElement = screen.queryByText(singleVideoResponse.data.attributes.title);
        expect(titleElement).toBeInTheDocument();
        expect(titleElement?.parentElement?.getAttribute('href')).toBe(singleVideoResponse.data.attributes.url);
        expect(screen.queryByTestId('player')).toBeInTheDocument();
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
      render(<VideoDetails />);

      await waitFor(() => {
        expect(screen.queryByText(/There was an error processing your request/)).toBeInTheDocument();
      });
    });
  });
});
