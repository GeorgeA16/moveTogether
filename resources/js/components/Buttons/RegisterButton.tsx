import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ModalForm from '@/components/Forms/ModalForm';
import RegisterForm from '@/components/Forms/RegisterForm';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
    className?: string
}

export default function RegisterButton({ className }: ButtonProps) {
    const [showRegister, setShowRegister] = useState(false);
    const baseClasses = "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"

    return (
        <>
            <Button
                onClick={() => setShowRegister(true)}
                className={twMerge(clsx(baseClasses, className))}
            >
                Creează cont
            </Button>
            {showRegister && (
                <ModalForm onClose={() => setShowRegister(false)} title="Creeaza cont">
                    <RegisterForm />
                </ModalForm>
            )}
        </>
    )
}
