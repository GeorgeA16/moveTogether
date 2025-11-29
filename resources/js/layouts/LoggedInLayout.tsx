import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import React, { useEffect } from 'react';
import { AppSidebar } from '@/components/AppSidebar';
import { toast, Toaster } from 'sonner';
import { usePage } from '@inertiajs/react';
import { User } from '@/types/User';

type PageProps = {
    flash: {
        success?: string;
        error?: string;
    };
    auth: {
        user: User;
    };
};

export function LoggedInLayout({ children }: { children: React.ReactNode }) {
    const { props } = usePage<PageProps>();
    const { auth } = usePage<PageProps>().props;


    useEffect(() => {
        if (props.flash.success) toast.success(props.flash.success);
        if (props.flash.error) toast.error(props.flash.error);
    }, [props.flash.success, props.flash.error]);

    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                } as React.CSSProperties
            }
        >
            <AppSidebar user={auth.user} variant="inset" />
            <SidebarInset>
                {children}
            </SidebarInset>
            <Toaster position="top-right" richColors duration={1500} />
        </SidebarProvider>
    )
}
