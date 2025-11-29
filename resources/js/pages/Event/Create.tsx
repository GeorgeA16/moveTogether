import { SiteHeader } from '@/components/SiteHeader';
import { LoggedInLayout } from '@/layouts/LoggedInLayout';
import React from 'react';
import EventChangeForm from '@/components/Forms/EventChangeForm';
import { Enum } from '@/types/Enum';

interface CreateProps {
    types: Enum[],
    levels: Enum[],
    sizes: Enum[],
}

export default function Create({ types, levels, sizes }: CreateProps) {
    return (
        <LoggedInLayout>
            <SiteHeader title="Create Event" />
            <div className="flex flex-1 flex-col">
                <div className="@container/main py-4 md:gap-6 md:py-6">
                    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                        <EventChangeForm types={types} levels={levels} sizes={sizes} />
                    </div>
                </div>
            </div>
        </LoggedInLayout>
    )
}
