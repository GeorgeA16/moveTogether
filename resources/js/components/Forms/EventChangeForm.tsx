import { Form, Link } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { Field, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Enum } from '@/types/Enum';
import { Event } from '@/types/Event';
import { store, list } from '@/routes/events';
import InputError from '@/components/ui/input-error';
import { DatePicker } from '@/components/DatePicker';

interface EventChangeFormTypes {
    event?: Event
    types: Enum[],
    levels: Enum[],
    sizes: Enum[],
}
export default function EventChangeForm({ event, types, levels, sizes }: EventChangeFormTypes) {

    return (
        <>
            <Form action={store()} method="POST" className="mx-10 flex gap-10">
                {({ errors }) => (
                    <>
                        <FieldSet className="w-1/2">
                            <FieldGroup>
                                <Field>
                                    <FieldLabel htmlFor="name">Name</FieldLabel>
                                    <Input id="name" name="name" defaultValue={event?.name ?? ""} autoComplete="off" />
                                    <InputError message={errors.name} />
                                </Field>
                                <Field>
                                    <DatePicker title="Start date" inputName="start" dateValue={event?.start} />
                                    <InputError message={errors.start} />
                                </Field>
                                <Field>
                                    <DatePicker title="End date" inputName="end" dateValue={event?.end}/>
                                    <InputError message={errors.end} />
                                </Field>
                                <Field>
                                    <FieldLabel>Sport Type</FieldLabel>
                                    <Select name="type" defaultValue={event?.type ?? undefined}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Choose event sport" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {types.map(type => (
                                                <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <InputError message={errors.type} />
                                </Field>
                                <Field>
                                    <FieldLabel>Choose game size</FieldLabel>
                                    <Select name="level" defaultValue={event?.level ?? undefined}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Choose game size" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {levels.map(level => (
                                                <SelectItem key={level.value} value={level.value}>{level.label}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <InputError message={errors.level} />
                                </Field>
                                <Field>
                                    <FieldLabel>Choose game level</FieldLabel>
                                    <Select name="size" defaultValue={event?.size ?? undefined}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Choose game level" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {sizes.map(size => (
                                                <SelectItem key={size.value} value={size.value}>{size.label}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <InputError message={errors.size} />
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="people_needed">People needed</FieldLabel>
                                    <Input name="people_needed" id="people_needed" defaultValue={event?.people_needed ?? ""} autoComplete="off" />
                                    <InputError message={errors.people_needed} />
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="name">Location</FieldLabel>
                                    <Input name="location" id="location" defaultValue={event?.location ?? ""} autoComplete="off" />
                                    <InputError message={errors.location} />
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="description">Description</FieldLabel>
                                    <Textarea name="description" id="description" defaultValue={event?.description ?? ""} placeholder="Your feedback helps us improve..." rows={4} />
                                    <InputError message={errors.description} />
                                </Field>
                                <Field orientation="responsive">
                                    <Button className="bg-blue-600" type="submit">Submit</Button>
                                    <Link href={list()}>
                                        <Button type="button" variant="destructive">
                                            Cancel
                                        </Button>
                                    </Link>
                                </Field>
                            </FieldGroup>
                        </FieldSet>
                    </>
                )}
            </Form>
        </>
    );
}

