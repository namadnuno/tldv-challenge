import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  theme,
} from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

export const App = () => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <Box textAlign="center" fontSize="xl">
        <Text>TODO</Text>
      </Box>
    </QueryClientProvider>
  </ChakraProvider>
)
