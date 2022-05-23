import {
  Box, Button, Container, Heading, Link,
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
        <Button as={ReachLink} to="/create">
          New Video
        </Button>
      </Box>
      <Box>
        {children}
      </Box>
      <Box textAlign="center" py={12}>
        © 2022 - review the code
        {' '}
        <Link href="https://github.com/namadnuno/tldv-challenge" target="_blank">here</Link>
      </Box>
    </Container>
  </Box>
);

export default Layout;
