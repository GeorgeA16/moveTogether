<?php

namespace App\Http\Controllers;

use App\Enums\EventLevel;
use App\Enums\EventSize;
use App\Enums\EventType;
use App\Http\Requests\EventChangeFormRequest;
use App\Models\Event;
use App\Repositories\EventRepository;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;
use Throwable;

final readonly class EventController
{
    public function __construct(
        private EventRepository $eventRepository
    ) {}

    public function list(): Response
    {
        return Inertia::render('Event/List', [
            'isAdmin'      => auth()->user()->is_admin,
            'loggedInUser' => auth()->user()->id,
            'events'       => $this->eventRepository->get(),
        ]);
    }

    public function show(Event $event): Response
    {
        return Inertia::render('Event/Show', [
            'event'  => $event,
        ]);
    }


    public function create(): Response
    {
        return Inertia::render('Event/Create', [
            'types'  => EventType::options(),
            'levels' => EventLevel::options(),
            'sizes'  => EventSize::options(),
        ]);
    }

    public function edit(Event $event): Response
    {
        return Inertia::render('Event/Edit', [
            'event'  => $event,
            'types'  => EventType::options(),
            'levels' => EventLevel::options(),
            'sizes'  => EventSize::options(),
        ]);
    }

    public function store(EventChangeFormRequest $request): RedirectResponse
    {
        $data = $request->validated();

        try {
            Event::query()->create(array_merge($data, [
                'created_by_id' => Auth::user()->id,
            ]));

            return redirect()->route('events.list')->with('success', 'Event created');
        } catch (Throwable $e) {
            Log::error($e->getMessage());

            return back()->with('error', 'Failed to create event');
        }
    }
}
