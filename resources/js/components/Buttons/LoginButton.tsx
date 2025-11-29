import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ModalForm from '@/components/Forms/ModalForm';
import LoginForm from '@/components/Forms/LoginForm';

export default function LoginButton() {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <>
            <Button
                onClick={() => setShowLogin(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
                Autentificare
            </Button>
            {showLogin && (
                <ModalForm onClose={() => setShowLogin(false)} title="Autentificare">
                    <LoginForm />
                </ModalForm>
            )}
        </>
    )
}
