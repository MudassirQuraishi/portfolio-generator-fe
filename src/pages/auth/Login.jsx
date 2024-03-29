import { Link } from 'react-router-dom'

import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Login = () => {
    return (
        <div className="flex justify-center items-center h-max">
            <div className="flex justify-center items-center">
                <Card className='w-max'>
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl">Login to your account</CardTitle>
                        <CardDescription>
                            Enter your credentials below to login to your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2 text-left">
                            <Label htmlFor="email" className='mb-1'>Email</Label>
                            <Input id="email" type="email" placeholder="m@example.com" />
                        </div>
                        <div className="grid gap-2 text-left">
                            <Label htmlFor="password" className='mb-1'>Password</Label>
                            <Input id="password" type="password" />
                        </div>
                        <Button className="w-full">Login</Button>
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
                            <Button variant="outline" disabled>
                                <FaGithub className="mr-2 h-4 w-4" />
                                Github
                            </Button>
                            <Button variant="outline" disabled>
                                <FaGoogle className="mr-2 h-4 w-4" />
                                Google
                            </Button>
                        </div>
                    </CardContent>
                    <CardFooter className='flex-row gap-0 justify-center'>
                        <span className='text-xs w-max p-0'>Dont have an account?</span>
                        <Link className="ml-1 w-max text-xs underline " to={'/register/signup'}>Create your  account</Link>
                    </CardFooter>
                </Card>
            </div>
        </div >
    )
}

export default Login;


// "use client";

// import { useState } from "react";
// import { cn } from "@/lib/utils";

// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

// const Signup = ({ className, ...props }) => {
//     const [isLoading, setIsLoading] = useState(false);

//     async function onSubmit(event) {
//         event.preventDefault();
//         setIsLoading(true);

//         setTimeout(() => {
//             setIsLoading(false);
//         }, 3000);
//     }

//     return (
//         <div className={cn("grid gap-6", className)} {...props}>
//             <form onSubmit={onSubmit}>
//                 <div className="grid gap-2">
//                     <div className="grid gap-1">
//                         <Label className="sr-only" htmlFor="email">
//                             Email
//                         </Label>
//                         <Input
//                             id="email"
//                             placeholder="name@example.com"
//                             type="email"
//                             autoCapitalize="none"
//                             autoComplete="email"
//                             autoCorrect="off"
//                             disabled={isLoading}
//                         />
//                     </div>
//                     <Button disabled={isLoading}>
//                         {/* {isLoading && (
//                             <SpinnerIcon className="mr-2 h-4 w-4 animate-spin" />
//                         )} */}
//                         Sign In with Email
//                     </Button>
//                 </div>
//             </form>
//             <div className="relative">
//                 <div className="absolute inset-0 flex items-center">
//                     <span className="w-full border-t" />
//                 </div>
//                 <div className="relative flex justify-center text-xs uppercase">
//                     <span className="bg-background px-2 text-muted-foreground">
//                         Or continue with
//                     </span>
//                 </div>
//             </div>
//             <Button variant="outline" type="button" disabled={isLoading}>
//                 {/* {isLoading ? (
//                     // <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
//                 ) : (
//                     // <Icons.gitHub className="mr-2 h-4 w-4" />
//                 )}{" "} */}
//                 GitHub
//             </Button>
//         </div>
//     );
// }

// export default Signup;
