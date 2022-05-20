import React from 'react';
import {
  waitFor, fireEvent, screen,
} from '@testing-library/react';
import nock from 'nock';
import { act } from 'react-dom/test-utils';
import { render } from '../../test-utils';

import { baseURL } from '../../api';
import { singleVideoResponse } from '../../__tests__/mockResponses';
import VideoForm from '../VideoForm';

describe('form submittion', () => {
  describe('successfull update', () => {
    beforeEach(() => {
      nock(baseURL)
        .put('/videos/1')
        .reply(200, singleVideoResponse);
    });

    it('should show success message', async () => {
      render(<VideoForm id="1" video={singleVideoResponse.data.attributes} />);

      const submitButtom = screen.getByText(/Submit/);
      act(() => {
        fireEvent.click(submitButtom);
      });

      await waitFor(() => {
        expect(screen.queryByText(/Video updated/)).toBeInTheDocument();
      });
    });
  });

  describe('failed update', () => {
    beforeEach(() => {
      nock(baseURL)
        .put('/videos/1')
        .reply(442);
    });

    it('should show error message', async () => {
      render(<VideoForm id="1" video={singleVideoResponse.data.attributes} />);

      const submitButtom = screen.getByText(/Submit/);

      act(() => {
        fireEvent.click(submitButtom);
      });

      await waitFor(() => {
        expect(screen.queryByText(/There was an error processing your request/)).toBeInTheDocument();
      });
    });
  });
});
