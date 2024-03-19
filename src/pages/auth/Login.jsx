/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Box, FormControl, FormLabel, FormErrorMessage, Button, Input, Link, Text, Heading, Spinner, Container, useToast } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';

import { validateEmail, validatePassword } from '../../util/validation.helpers'

const Login = () => {
    const toast = useToast();
    const [isLoading, setIsLoading] = useState(false);
    return (
        <Container display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Box
                width="100%"
                mx="auto"
                p={4}
                borderWidth="1px"
                borderRadius="md"
                boxShadow="md"
                maxWidth="400px"
            >
                <Heading as="h2" size="lg" mb={4}>
                    Login
                </Heading>
                <Text mb={4}>
                    Welcome back! Please Log in to continue.
                </Text>
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    onSubmit={async (values, actions) => {
                        setIsLoading(true);
                        try {
                            const response = await axios.post(`${import.meta.env.VITE_BACKEND_AUTH_END_POINT}/login`, values);
                            if (response.status === 200) {
                                toast({
                                    title: 'Login successfull.',
                                    status: 'success',
                                    duration: 2000,
                                    isClosable: true,
                                })
                            }
                        } catch (error) {
                            if (error.response.status === 401) {
                                toast({
                                    title: 'Incorrect Password.',
                                    status: 'error',
                                    duration: 2000,
                                    isClosable: true,
                                })
                            }
                            else if (error.response.status === 403) {
                                toast({
                                    title: 'Email not verified.',
                                    description: "Please verify your email address first",
                                    status: 'warn',
                                    duration: 2000,
                                    isClosable: true,
                                })
                            }
                            else if (error.response.status === 404) {
                                toast({
                                    title: "User doesn't exist please login first",
                                    status: 'error',
                                    duration: 2000,
                                    isClosable: true,
                                })
                            }
                            else {
                                toast({
                                    title: 'Ooops! Something went wrong',
                                    description: "Please try again after sometime",
                                    status: 'error',
                                    duration: 2000,
                                    isClosable: true,
                                })
                            }
                        }
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            actions.setSubmitting(false);
                            setIsLoading(false);
                        }, 1000);
                    }}
                >
                    {() => (
                        <Form>
                            <Field name="email" validate={validateEmail}>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.email && form.touched.email} mb={4}>
                                        <FormLabel>Email</FormLabel>
                                        <Input {...field} type="email" placeholder="Email" />
                                        <FormErrorMessage fontSize="xs">{form.errors.email}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name="password" validate={validatePassword}>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.password && form.touched.password} mb={4}>
                                        <FormLabel>Password</FormLabel>
                                        <Input {...field} type="password" placeholder="Password" />
                                        <FormErrorMessage fontSize="xs">{form.errors.password}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Button mt={4} colorScheme="teal" type="submit" isFullWidth>
                                {isLoading && <Spinner size="sm" mr={4} />}
                                Login
                            </Button>
                        </Form>
                    )}
                </Formik>
                <Text mt={4} textAlign="center" d="flex" flexDirection="column">
                    <div>
                        Don't have an account?{' '}
                        <Link as={RouterLink} to="/signup" color="teal.500" fontSize="sm" mr={2}>
                            Signup here.
                        </Link>
                    </div>
                    <Link as={RouterLink} to="/forgot-password" color="teal.500" fontSize="sm" textDecoration="underline">
                        Forgot your password?
                    </Link>
                </Text>
            </Box>
        </Container>
    );
}

export default Login;
