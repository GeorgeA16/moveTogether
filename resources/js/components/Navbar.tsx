import { Link } from '@inertiajs/react'
import React from 'react';

interface NavbarProps {
    children: React.ReactNode;
}

export default function Navbar({ children }: NavbarProps) {

    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
            <Link href="/" className="text-xl font-bold text-blue-600">moveTogether</Link>
            <div className="flex space-x-4">
                {children}
            </div>
        </nav>
    )
}
