import { useState } from "react";
import { Container, VStack, Heading, Input, Button, FormControl, FormLabel, FormErrorMessage, Text, Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;
    let validationErrors = {};

    if (!username) validationErrors.username = "Username is required";
    if (!email) validationErrors.email = "Email is required";
    else if (!validateEmail(email)) validationErrors.email = "Invalid email format";
    if (!password) validationErrors.password = "Password is required";
    else if (!validatePassword(password)) validationErrors.password = "Password must be at least 6 characters long";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("User Data:", formData);
      setSuccessMessage("Registration successful!");
    }
  };

  return (
    <Container centerContent maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="xl">Register</Heading>
        <Box as="form" width="100%" onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl isInvalid={errors.username}>
              <FormLabel>Username</FormLabel>
              <Input name="username" value={formData.username} onChange={handleChange} />
              <FormErrorMessage>{errors.username}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.email}>
              <FormLabel>Email</FormLabel>
              <Input name="email" type="email" value={formData.email} onChange={handleChange} />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password}>
              <FormLabel>Password</FormLabel>
              <Input name="password" type="password" value={formData.password} onChange={handleChange} />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>
            <Button type="submit" colorScheme="teal" width="100%">Register</Button>
          </VStack>
        </Box>
        {successMessage && <Text color="green.500">{successMessage}</Text>}
        <Text>
          Already have an account? <Link to="/login" style={{ color: "teal" }}>Login</Link>
        </Text>
      </VStack>
    </Container>
  );
};

export default Register;