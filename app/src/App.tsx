import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from "react-query"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import VideosList from "./pages/VideosList";
import NotFound from "./pages/NotFound";
import VideoEdit from "./pages/VideoEdit";
import VideoDetails from "./pages/VideoDetails";
const queryClient = new QueryClient()

export const App = () => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<VideosList />} />
          <Route path="/:id" element={<VideoDetails />} />
          <Route path="/:id/edit" element={<VideoEdit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  </ChakraProvider>
)
