import React from 'react';
import { Head } from '@inertiajs/react';

export default function Error403() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Head title="403 - Forbidden" />
            <h1 className="text-5xl font-bold mb-4">403</h1>
            <p className="text-xl mb-6">You do not have permission to access this page</p>
            <a
                href="/"
                className="text-blue-500 hover:underline"
            >
                Go back to Home
            </a>
        </div>
    );
};

