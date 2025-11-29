import React from "react";
import { Form } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import InputError from '@/components/ui/input-error';
import { Spinner } from '@/components/ui/spinner';
import { Button } from '@/components/ui/button';
import { register } from '@/routes';

export default function RegisterForm() {

    return (
       <>
           <Form
               method="POST"
               action={register()}
               disableWhileProcessing
               className="flex flex-col gap-3"
           >
               {({ processing, errors }) => (
                   <>
                       <div>
                           <Input
                               id="name"
                               type="text"
                               required
                               autoFocus
                               tabIndex={1}
                               autoComplete="name"
                               name="name"
                               placeholder="Full name"
                               className="border rounded px-3 py-2 w-full"
                           />
                           <InputError
                               message={errors.name}
                               className="mt-2"
                           />
                       </div>

                       <div>
                           <Input
                               id="email"
                               type="email"
                               required
                               tabIndex={2}
                               autoComplete="email"
                               name="email"
                               placeholder="Email"
                               className="border rounded px-3 py-2 w-full"
                           />
                           <InputError message={errors.email} />
                       </div>

                       <div>
                           <Input
                               id="password"
                               type="password"
                               required
                               tabIndex={3}
                               autoComplete="new-password"
                               name="password"
                               placeholder="Password"
                           />
                       </div>

                       <div>
                           <Input
                               id="password_confirmation"
                               type="password"
                               required
                               tabIndex={4}
                               autoComplete="new-password"
                               name="password_confirmation"
                               placeholder="Confirm password"
                           />
                           <InputError message={errors.password} />
                       </div>

                       <Button
                           type="submit"
                           className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                           tabIndex={5}
                           data-test="register-user-button"
                       >
                           {processing && <Spinner />}
                           Create account
                       </Button>
                   </>
               )}
           </Form>
       </>
    );
}

