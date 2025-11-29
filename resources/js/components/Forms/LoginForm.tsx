import React from 'react';
import { Form } from '@inertiajs/react';
import { login } from '@/routes';
import { Input } from '@/components/ui/input';
import InputError from '@/components/ui/input-error';
import { Spinner } from '@/components/ui/spinner';
import { Button } from '@/components/ui/button';

export default function LoginForm() {

    return (
        <>
            <Form
                method="POST"
                action={login()}
                disableWhileProcessing
                className="flex flex-col gap-3"
            >
                {({ processing, errors }) => (
                    <>
                        <div>
                            <Input
                                id="email"
                                type="email"
                                required
                                tabIndex={1}
                                autoComplete="email"
                                name="email"
                                placeholder="Email"
                                className="border rounded px-3 py-2"
                            />
                            <InputError message={errors.email} />
                        </div>

                        <div>
                            <Input
                                id="password"
                                type="password"
                                required
                                tabIndex={2}
                                autoComplete="new-password"
                                name="password"
                                placeholder="Password"
                                className="border rounded px-3 py-2"
                            />
                            <InputError message={errors.password} />
                        </div>

                        <div>
                            <InputError message={errors.credentials} />
                        </div>

                        <Button
                            type="submit"
                            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                            tabIndex={3}
                        >
                            {processing && <Spinner />}
                            Log in
                        </Button>
                    </>
                )}
            </Form>
        </>
    );
}
