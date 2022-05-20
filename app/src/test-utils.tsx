import * as React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

function AllProviders({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Router>
          {children}
        </Router>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

// eslint-disable-next-line max-len
const customRender = (ui: React.ReactElement, options?: RenderOptions) => render(ui, { wrapper: AllProviders, ...options });

export { customRender as render };
