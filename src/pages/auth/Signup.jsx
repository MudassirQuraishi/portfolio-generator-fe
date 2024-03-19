import { useState } from 'react'
import { Box, FormControl, FormLabel, FormErrorMessage, Button, Input, Link, Heading, Text, Spinner, useToast, Container } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { validateEmail, validateFullName, validatePassword, validatePhoneNumber, validateUsername } from '../../util/validation.helpers'
import axios from 'axios';

const Signup = () => {
    const navigate = useNavigate();
    const toast = useToast();
    const [isLoading, setIsLoading] = useState(false);
    return (
        <Container display={"flex"} justifyContent={"center"} alignItems={"center"} height="100vh" >
            <Box
                width={"100%"}
                mx="auto"
                p={4}
                borderWidth="1px"
                borderRadius="md"
                boxShadow="md"
                maxWidth="400px"
            >
                <Heading as="h2" size="lg" textAlign="center" mb={4}>
                    Sign Up
                </Heading>
                <Text textAlign="center" mb={4}>
                    Create an account to get started
                </Text>
                <Formik
                    initialValues={{
                        username: '',
                        fullName: '',
                        email: '',
                        password: '',
                        phoneNumber: ''
                    }}
                    onSubmit={async (values, actions) => {
                        setIsLoading(true)
                        try {
                            const response = await axios.post(`${import.meta.env.VITE_BACKEND_AUTH_END_POINT}/signup`, values);
                            if (response.status === 201) {
                                toast({
                                    title: 'Signup successfull.',
                                    status: 'success',
                                    duration: 2000,
                                    isClosable: true,
                                })
                                navigate('/login')
                            }
                            setIsLoading(false)
                            actions.setSubmitting(false);
                        } catch (error) {
                            if (error.response.status === 409) {
                                toast({
                                    title: 'Email already in use.',
                                    description: "Please login with your email address",
                                    status: 'info',
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
                            setIsLoading(false)
                        }
                    }}
                >
                    {() => (
                        <Form>
                            <Field name='username' validate={validateUsername}>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.username && form.touched.username} mb={4}>
                                        <FormLabel>Username</FormLabel>
                                        <Input {...field} placeholder='Username' />
                                        <FormErrorMessage fontSize={"xs"}>{form.errors.username}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name='fullName' validate={validateFullName}>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.fullName && form.touched.fullName} mb={4}>
                                        <FormLabel>Full Name</FormLabel>
                                        <Input {...field} placeholder='Full Name' />
                                        <FormErrorMessage fontSize={"xs"}>{form.errors.fullName}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name='email' validate={validateEmail}>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.email && form.touched.email} mb={4}>
                                        <FormLabel>Email</FormLabel>
                                        <Input {...field} placeholder='Email' />
                                        <FormErrorMessage fontSize={"xs"}>{form.errors.email}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name='password' validate={validatePassword}>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.password && form.touched.password} mb={4}>
                                        <FormLabel>Password</FormLabel>
                                        <Input {...field} type='password' placeholder='Password' />
                                        <FormErrorMessage fontSize={"xs"}>{form.errors.password}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name='phoneNumber' validate={validatePhoneNumber}>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.phoneNumber && form.touched.phoneNumber} mb={4}>
                                        <FormLabel>Phone Number</FormLabel>
                                        <Input {...field} placeholder='Phone Number' />
                                        <FormErrorMessage fontSize={"xs"}>{form.errors.phoneNumber}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>

                            <Button
                                mt={4}
                                colorScheme='teal'
                                type='submit'
                                isfullwidth={"true"}
                            >   {isLoading && <Spinner size={"sm"} mr={4} />}
                                Sign Up
                            </Button>

                        </Form>
                    )}
                </Formik>
                <Text mt={4} textAlign="center">
                    Already have an account?{' '}
                    <Link as={RouterLink} to='/login' color="teal.500">
                        Login here.
                    </Link>
                </Text>
            </Box>
        </Container>

    );
}

export default Signup;
