import {
  Box, Container, Heading, Link,
} from '@chakra-ui/react';
import React from 'react';
import { Link as ReachLink } from 'react-router-dom';

type Props = {
    children: React.ReactNode
};

const Layout: React.FC<Props> = ({ children }) => (
  <Box>
    <Container maxW="container.xl">
      <Box mt={12} mb={16}>
        <Link as={ReachLink} to="/">
          <Heading textAlign="center">tl;dv challenge 📼</Heading>
        </Link>
      </Box>
      <Box>
        {children}
      </Box>
    </Container>
  </Box>
);

export default Layout;
