import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function combineDateTime(date: Date | undefined, time: string): string {
    if (! date || ! time) {
        return '';
    }

    const d = new Date(date);

    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');

    const timeParts = time.split(':');
    const hours = String(timeParts[0] || '00').padStart(2, '0');
    const minutes = String(timeParts[1] || '00').padStart(2, '0');
    const seconds = String(timeParts[2] || '00').padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export function parseDateTime(dateTimeString: string): { date: Date | undefined, time: string } {
    if (!dateTimeString) {
        return { date: undefined, time: '10:30:00' };
    }

    const [datePart, timePart] = dateTimeString.split(' ');

    console.log(dateTimeString.split(' '))

    const date = datePart ? new Date(datePart) : undefined;

    const time = timePart || '';

    return { date, time };
}

