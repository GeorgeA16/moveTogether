import { Button } from '@/components/ui/button';
import { logout } from '@/routes';
import { Form } from '@inertiajs/react';
import React from 'react';

export default function LogOutButton() {

    return (
        <>
            <Form
                method="POST"
                action={logout()}
                disableWhileProcessing
            >
                <Button variant="link" type="submit">Log out</Button>
            </Form>
        </>
    )
}
