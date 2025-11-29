"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { combineDateTime, parseDateTime } from '@/lib/utils';

interface DatePickerProps {
    title: string,
    inputName: string,
    dateValue?: string,
}

export function DatePicker({ title, inputName, dateValue }: DatePickerProps) {
    const [open, setOpen] = React.useState(false)
    const [date, setDate] = React.useState<Date | undefined>(undefined)
    const [time, setTime] = React.useState<string>('10:30:00')
    const [finalValue, setFinalValue] = React.useState<string>('')

    React.useEffect(() => {
        if (dateValue) {
            setDate(parseDateTime(dateValue).date)
            setTime(parseDateTime(dateValue).time)
        }
    }, [dateValue])

    React.useEffect(() => {
        setFinalValue(combineDateTime(date, time));
    }, [date, time])

    return (
        <div className="flex gap-4">
            <div className="flex flex-col gap-3">
                <Input name={inputName} defaultValue={finalValue} hidden />
                <Label htmlFor="date-picker" className="px-1">
                    {title}
                </Label>
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            id="date-picker"
                            className="w-32 justify-between font-normal"
                        >
                            {date ? date.toLocaleDateString() : "Select date"}
                            <ChevronDownIcon />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                        <Input name={`${inputName}_date`} hidden />
                        <Calendar
                            mode="single"
                            selected={date}
                            captionLayout="dropdown"
                            onSelect={(date) => {
                                setDate(date)
                                setOpen(false)
                            }}
                        />
                    </PopoverContent>
                </Popover>
            </div>
            <div className="flex flex-col gap-3">
                <Label htmlFor="time-picker" className="px-1">
                    Time
                </Label>
                <Input
                    type="time"
                    id="time-picker"
                    step="1"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                />
            </div>
        </div>
    )
}

