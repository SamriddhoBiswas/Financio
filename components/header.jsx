import React from 'react'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { PenBox, LayoutDashboard } from "lucide-react";
import { checkUser } from "@/lib/checkUser";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Header = async () => {
    await checkUser();
    return (
        <header className="fixed top-0 w-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-neutral-800">
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/">
                    <Image
                        src={"/logo.png"}
                        alt="Financio Logo"
                        width={200}
                        height={60}
                        className="h-12 w-auto object-contain rounded-lg"
                    />
                </Link>

                {/* Action Buttons */}
                <div className="flex items-center space-x-4">
                    <ThemeToggle />
                    <SignedIn>
                        <Link
                            href="/dashboard"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2"
                        >
                            <Button variant="outline">
                                <LayoutDashboard size={18} />
                                <span className="hidden md:inline">Dashboard</span>
                            </Button>
                        </Link>
                        <a href="/transaction/create">
                            <Button className="flex items-center gap-2">
                                <PenBox size={18} />
                                <span className="hidden md:inline">Add Transaction</span>
                            </Button>
                        </a>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton forceRedirectUrl="/dashboard">
                            <Button variant="outline">Login</Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "w-20 h-20",
                                },
                            }}
                        />
                    </SignedIn>
                </div>
            </nav>
        </header>
    )
}

export default Header