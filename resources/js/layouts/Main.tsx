import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Discover from '@/components/Discover';
import Explore from '@/components/Explore';
import { Link } from '@inertiajs/react';
import React from 'react';
import LoginButton from '@/components/Buttons/LoginButton';
import RegisterButton from '@/components/Buttons/RegisterButton';

export default function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
            <Navbar>
                <Link href="/events" className="p-2 hover:text-blue-600">Evenimente</Link>
                <Link href="/how-it-works" className="p-2 hover:text-blue-600">Cum funcționează</Link>
                <LoginButton />
                <RegisterButton />
            </Navbar>
            <main className="flex-grow">
                <Discover />
                <Explore />
            </main>
            <Footer />
        </div>
    )
}
