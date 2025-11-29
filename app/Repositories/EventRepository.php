<?php

namespace App\Repositories;

use App\Enums\EventStatus;
use App\Models\Event;
use Illuminate\Support\Collection;

final readonly class EventRepository
{
    public function get(): Collection
    {
        return Event::query()
            ->with('createdBy')
            ->where('status', '!=', EventStatus::REJECTED)
            ->get()
            ->map(function (Event $event) {
                return [
                    'id'     => $event->id,
                    'name'   => $event->name,
                    'status' => [
                        'value' => $event->status->value,
                        'label' => $event->status->translate(),
                        'badge' => $event->status->badge(),
                    ],
                    'start'         => $event->start?->toDateTimeString(),
                    'end'           => $event->end?->toDateTimeString(),
                    'people_needed' => $event->people_needed,
                    'type' => [
                        'value' => $event->type->value,
                        'label' => $event->type->translate(),
                        'badge' => $event->type->badge(),
                    ],
                    'level' => [
                        'value' => $event->level->value,
                        'label' => $event->level->translate(),
                        'badge' => $event->type->badge(),
                    ],
                    'size' => [
                        'value' => $event->size->value,
                        'label' => $event->size->translate(),
                    ],
                    'location'      => $event->location,
                    'description'   => $event->description,
                    'created_by'    => $event->createdBy->name,
                    'created_by_id' => $event->created_by_id,
                    'created_at'    => $event->created_at,
                    'updated_at'    => $event->updated_at,
                    'deleted_at'    => $event->deleted_at,
                ];
            })
        ;
    }

}
