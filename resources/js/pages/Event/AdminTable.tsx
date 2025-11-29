import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { edit } from '@/routes/events';
import { Event } from '@/types/Event';
import { EmptyPage } from '@/components/EmptyPage';
import React from 'react';
import { Link } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AdminTable({ events }: { events: Event[]}) {
    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Created By</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {events.length !== 0 ? (
                        events.map(event => (
                            <TableRow>
                                <TableCell className="font-medium text-blue-600">
                                    <Link href={edit(event.id)}>
                                        {event.name}
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Badge className={event.status.badge}>
                                        {event.status.label}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <Badge className={event.type.badge}>
                                        {event.type.label}
                                    </Badge>
                                </TableCell>
                                <TableCell>{event.created_by}</TableCell>
                                <TableCell>
                                    <Button variant="destructive">
                                        <Trash2 />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <EmptyPage />
                    )}
                </TableBody>
            </Table>
        </>
    )
}
