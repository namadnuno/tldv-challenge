import React from "react"
import { screen, waitFor } from "@testing-library/react"
import { render } from "../test-utils"
import VideosList from "../pages/VideosList"
import { videosResponse } from "./mockResponses"
import nock from 'nock';
import { baseURL } from "../api"

describe('videos listing page', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    afterEach(() => {
        nock.cleanAll();
    })

    describe('successfull response', () => {
        beforeEach(() => {
            nock(baseURL)
            .get('/videos')
            .reply(200, videosResponse);
        })
        
        it('should show all the videos returned by the API', async () => {
            render(<VideosList />)
            
            await waitFor(() => {    
                videosResponse.data.map(({attributes}) => {
                    expect(screen.queryByText(attributes.title)).toBeInTheDocument();
                })
            })
        });
    });

    describe('error response', () => {
        beforeEach(() => {
            nock(baseURL)
            .get('/videos')
            .reply(404)
        })
        
        it('should show all the videos returned by the API', async () => {
            render(<VideosList />)
            
            await waitFor(() => {    
                expect(screen.queryByText(/There was an error processing your request/)).toBeInTheDocument();
            })
        });
    });
})