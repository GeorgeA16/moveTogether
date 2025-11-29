import { CirclePlus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CreateButton({ title }: {title: string}) {
    return (
        <Button size="sm" className="bg-blue-600 hidden sm:flex">
            <CirclePlus /> {title}
        </Button>
    )
}
