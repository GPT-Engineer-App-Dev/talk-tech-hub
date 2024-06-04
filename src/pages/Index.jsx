import { Container, VStack, Heading, Text, Box, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Tech Forum</Heading>
        <Text fontSize="lg" textAlign="center">
          Welcome to the Tech Forum! Join the discussion on the latest in technology, programming, and more.
        </Text>
        <Box>
          <Flex direction="column" align="center">
            <Button as={Link} to="/discussions" colorScheme="teal" size="lg" mb={4}>
              View Discussions
            </Button>
            <Button as={Link} to="/create-post" colorScheme="blue" size="lg">
              Create a Post
            </Button>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;