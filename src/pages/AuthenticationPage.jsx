
// import Image from "next/image";
import { Routes, Route, Link } from 'react-router-dom';
import Login from "./auth/Login";
import Signup from './auth/Signup';



export default function AuthenticationPage() {
    return (
        <>
            <div className="container relative  h-[800px] flex-col items-center justify-center md:grid lg:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <div className="relative hidden h-screen flex-col bg-muted p-10 text-white lg:flex dark:border-r">
                    <div className="absolute inset-0 bg-zinc-900" />
                    <div className="relative z-20 flex items-center text-lg font-medium">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-2 h-6 w-6"
                        >
                            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                        </svg>
                        Portfolio.io
                    </div>
                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-lg">
                                &ldquo;Create your portfolio using profolio.io in minutes and showcase your work to recruiters.&rdquo;
                            </p>
                            <footer className="text-sm">Portfolio.IO</footer>
                        </blockquote>
                    </div>
                </div>
                <div className="lg:p-8">
                    <div className="mx-auto flex w-max flex-col justify-center items-center sm:w-[350px]">
                        <Routes>
                            <Route path='/signup' element={<Signup />} />
                            <Route path='' element={<Login />} />
                        </Routes>
                        <p className="px-8 pt-auto text-center text-sm text-muted-foreground">
                            By clicking continue, you agree to our{" "}
                            <Link
                                href="/terms"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link
                                href="/privacy"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
