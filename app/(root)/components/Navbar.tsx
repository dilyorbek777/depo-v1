"use client";
import { ModeToggle } from '@/components/shared/mode-toggle'
import Link from 'next/link'
import Logo from './Logo'
import { Button } from '@/components/ui/button'
import { cn } from "@/lib/utils";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { Loader } from "@/components/ui/loader";
import { useScrolled } from '@/hooks/hooks/use-scrolled';


export default function Navbar() {
    const { isAuthenticated, isLoading } = useConvexAuth();
    const scrolled = useScrolled();
    return (
        <header className="text-gray-400  body-font fixed w-full bg-white dark:bg-black z-20">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href={'/'}>
                    <Logo />
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    {/* mr-5 hover:text-white */}
                </nav>
                <div className="flex gap-4 items-center justify-center">

                    <ModeToggle />
                    <div className="flex items-center gap-x-2">
                        {isLoading && <Loader />}

                        {!isAuthenticated && !isLoading && (
                            <>
                                <SignInButton mode="modal">
                                    <Button size={"sm"} variant={"ghost"}>
                                        Log In
                                    </Button>
                                </SignInButton>
                                <SignInButton mode="modal">
                                    <Button size={"sm"}>Sign up</Button>
                                </SignInButton>
                            </>
                        )}

                        {isAuthenticated && !isLoading && (
                            <>
                                <Button variant={"ghost"} size={"sm"} asChild>
                                    <Link href={"/profile"}>Profile</Link>
                                </Button>
                                <UserButton afterSignOutUrl="/" />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

