import { Enum } from '@/types/Enum';

export interface Event {
    id: number,
    name: string,
    status: Enum,
    start?: string;
    end?: string;
    people_needed: number;
    type: Enum;
    level: Enum;
    size: Enum;
    location: string;
    description?: string;
    created_by: string;
    created_by_id: number;
    created_at: string;
    updated_at: string;
    deleted_at: string;
}
