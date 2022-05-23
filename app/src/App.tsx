import * as React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import VideosList from './pages/VideosList';
import NotFound from './pages/NotFound';
import VideoEdit from './pages/VideoEdit';
import VideoDetails from './pages/VideoDetails';
import Layout from './components/Layout';
import VideoCreate from './pages/VideoCreate';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<VideosList />} />
              <Route path="/:id" element={<VideoDetails />} />
              <Route path="/:id/edit" element={<VideoEdit />} />
              <Route path="/create" element={<VideoCreate />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Router>
      </QueryClientProvider>
    </ChakraProvider>
  );
}
