import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import React from 'react';

interface Event {
    title: string,
    date: string,
    location: string,
}

interface DetailCardProps {
    data: Event[],
}

export default function DetailCards({ data }: DetailCardProps) {
    return (
        <>
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle key={data.title}>{data.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="font-semibold">{data.title}</p>
                    <p className="text-sm text-gray-500">{data.date}</p>
                    <p className="text-sm text-gray-500">{data.location}</p>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button variant="outline">
                        Login with Google
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}
