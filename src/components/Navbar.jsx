import { Box, Flex, Button, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4} py={2} width="100%">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <ChakraLink as={Link} to="/" color="white" fontSize="xl" fontWeight="bold">
          Tech Forum
        </ChakraLink>
        <Flex alignItems="center">
          <Button as={Link} to="/" colorScheme="teal" variant="ghost" mr={4}>
            Home
          </Button>
          <Button as={Link} to="/login" colorScheme="teal" variant="ghost" mr={4}>
            Login
          </Button>
          <Button as={Link} to="/register" colorScheme="teal" variant="ghost">
            Register
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;