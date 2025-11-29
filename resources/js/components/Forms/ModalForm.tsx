import React from "react";

interface ModalProps {
    title?: string;
    children: React.ReactNode;
    onClose: () => void;
}

export default function ModalForm({ title, children, onClose }: ModalProps) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white rounded-lg p-6 shadow-lg relative w-full max-w-md">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                >
                    ✕
                </button>
                {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
                {children}
            </div>
        </div>
    );
}
