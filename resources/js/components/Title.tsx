import React from 'react';

interface TitleProps {
    title: string,
    description?: string,
}
export default function Title({title, description}: TitleProps) {
    return (
        <>
            <h2 className="text-4xl font-bold">{title}</h2>
            { description && (
                <p className="text-gray-600 mt-2 text-lg">{description}</p>
            )}
        </>
    )
}
