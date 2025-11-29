import { SiteHeader } from '@/components/SiteHeader';
import React from 'react';
import { LoggedInLayout } from '@/layouts/LoggedInLayout';

export default function Dashboard() {
    return (
        <LoggedInLayout>
            <SiteHeader title="Dashboard" />
        </LoggedInLayout>
    );
}


