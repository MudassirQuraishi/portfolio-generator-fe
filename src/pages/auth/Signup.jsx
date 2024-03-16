import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import axios from 'axios';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SpinnerIcon } from '@/components/ui/icons';

const Signup = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data) => {
        setIsLoading(true);
        console.log(data)
        const response = await axios.post('http://localhost:3000/auth/v1/signup', data)
        console.log(response)
        setTimeout(() => {
            setIsLoading(false);
            reset(); // Reset form after submission
        }, 3000);
    };

    return (
        <div className="flex justify-center items-center h-full">
            <div className="flex justify-center items-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Card className='w-max'>
                        <CardHeader className="space-y-1">
                            <CardTitle className="text-2xl">Create an account</CardTitle>
                            <CardDescription>
                                Enter your email below to create your new account
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="grid gap-2 text-left">
                                <Label htmlFor="email" className='mb-1'>Email</Label>
                                <Input id="email" type="email" placeholder="johndoe@example.com" {...register("email", {
                                    required: true, pattern: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/
                                })} />
                                {errors.email && <span className="text-red-500">Email is required</span>}
                            </div>
                            <div className="grid gap-2 text-left">
                                <Label htmlFor="user-name" className='mb-1'>User name</Label>
                                <Input id="user-name" type="text" placeholder="john_doe" {...register("username", { required: true })} />
                                {errors.username && <span className="text-red-500">Username is required</span>}
                            </div>
                            <div className="grid gap-2 text-left">
                                <Label htmlFor="full-name" className='mb-1'>Full name</Label>
                                <Input id="full-name" type="text" placeholder="John Doe" {...register("fullName", { required: true })} />
                                {errors.fullName && <span className="text-red-500">Full name is required</span>}
                            </div>
                            <div className="grid gap-2 text-left">
                                <Label htmlFor="number" className='mb-1'>Phone Number</Label>
                                <Input id="number" type="tel" placeholder="+91-9876543210" {...register("phoneNumber", {
                                    required: true, pattern: /^\+\d{1,3}(?: ?\d){6,14}$/

                                })} />
                                {errors.phoneNumber && <span className="text-red-500">Phone number is required</span>}
                            </div>
                            <div className="grid gap-2 text-left">
                                <Label htmlFor="password" className='mb-1'>Password</Label>
                                <Input id="password" type="password" {...register("password", {
                                    required: true, pattern: /^.{8,}$/
                                })} />
                                {errors.password && <span className="text-red-500">Password is required</span>}
                            </div>
                            <Button className="w-full" type='submit' disabled={isLoading}>
                                {isLoading && (<SpinnerIcon className="mr-2 h-4 w-4 animate-spin" />)}
                                Signup
                            </Button>
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t" />
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-background px-2 text-muted-foreground">
                                        Or continue with
                                    </span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <Button variant="outline" disabled={isLoading}>
                                    {isLoading ? <SpinnerIcon className="mr-2 h-4 w-4 animate-spin" /> : <FaGithub className="mr-2 h-4 w-4" />}
                                    Github
                                </Button>
                                <Button variant="outline" disabled={isLoading}>
                                    {isLoading ? <SpinnerIcon className="mr-2 h-4 w-4 animate-spin" /> : <FaGoogle className="mr-2 h-4 w-4" />}
                                    Google
                                </Button>
                            </div>
                        </CardContent>
                        <CardFooter className='flex-row justify-center gap-0 '>
                            <span className='text-xs w-max '>Already have an account?</span>
                            <Link className="ml-1 w-max text-xs underline " to={'/register'}>Login to your account</Link>
                        </CardFooter>
                    </Card>
                </form>

            </div>
        </div>
    )
}

export default Signup;
