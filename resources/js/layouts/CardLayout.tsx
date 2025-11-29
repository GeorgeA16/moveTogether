import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronRight, Pencil } from 'lucide-react';
import { Event } from '@/types/Event';
import { Link } from '@inertiajs/react';
import { edit, show } from '@/routes/events';

interface CardLayoutProps {
    event: Event,
    loggedInUser: number,
}

export default function CardLayout ({ event, loggedInUser }: CardLayoutProps) {
    return (
        <Card key={event.id} className="shadow-none overflow-hidden rounded-md py-0">
            <CardHeader className="p-0">
                <img src="/football.png" alt="football" className="aspect-video bg-muted w-full border-b" />
            </CardHeader>
            <CardContent className="pb-6">
                <div className="flex items-center gap-3">
                    <Badge className={event.status.badge}>
                        {event.status.label}
                    </Badge>
                    <Badge className={event.type.badge}>
                        {event.type.label}
                    </Badge>
                    <Badge className={event.level.badge}>
                        {event.level.label}
                    </Badge>
                </div>

                <h3 className="mt-4 text-[1.35rem] font-semibold tracking-tight">
                    {event.name}
                </h3>
                <p className="mt-2 text-muted-foreground">
                    {event.location}
                </p>
                <p className="mt-2 text-muted-foreground">
                    {event.start} - {event.end}
                </p>
                <div className="flex justify-between">
                    <Link href={show(event.id)}>
                        <Button size="sm" className="bg-blue-600 mt-6 shadow-none">
                            View event <ChevronRight />
                        </Button>
                    </Link>
                    {loggedInUser === event.created_by_id && (
                        <Link href={edit(event.id)}>
                            <Button size="sm" className="bg-green-600 mt-6 shadow-none">
                                Edit <Pencil />
                            </Button>
                        </Link>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};
