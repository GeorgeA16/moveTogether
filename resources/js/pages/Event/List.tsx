import { SiteHeader } from '@/components/SiteHeader';
import React from 'react';
import CreateButton from '@/components/Buttons/CreateButton';
import { LoggedInLayout } from '@/layouts/LoggedInLayout';
import { Event } from '@/types/Event';
import CardLayout from '@/layouts/CardLayout';
import { EmptyPage } from '@/components/EmptyPage';
import { Link } from '@inertiajs/react';
import { create } from '@/routes/events';
import AdminTable from '@/pages/Event/AdminTable';

interface ListProps {
    events: Event[];
    isAdmin: boolean;
    loggedInUser: number,
}

export default function List({ events, isAdmin, loggedInUser }: ListProps) {
    return (
        <LoggedInLayout>
            <SiteHeader title="Events">
                {! isAdmin && (
                    <Link href={create()}>
                        <CreateButton title="Create event" />
                    </Link>
                )}
            </SiteHeader>
            {events.length !== 0 ? (
                isAdmin ? (
                    <AdminTable events={events} />
                ) : (
                    <div className="flex flex-1 flex-col">
                        <div className="@container/main flex flex-1 flex-col gap-2">
                            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                                <div className="max-w-(--breakpoint-3xl) mx-10 xl:px-0">
                                    <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                                        {events.map(event => (
                                            <CardLayout key={event.id} event={event} loggedInUser={loggedInUser} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            ) : (
                <EmptyPage />
            )}
        </LoggedInLayout>
    );
}
