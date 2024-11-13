'use client';

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <a className="text-xl font-bold text-black">Portfolio</a>
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <Link href="/about">
                            <a className="text-gray-800 hover:text-green-800 transition duration-300">About</a>
                        </Link>
                        <Link href="/projects">
                            <a className="text-gray-800 hover:text-green-800 transition duration-300">Projects</a>
                        </Link>
                        <Link href="/contact">
                            <a className="text-gray-800 hover:text-green-800 transition duration-300">Contact</a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
