<?php

namespace App\Enums;

enum EventStatus: string
{
    case ACTIVE    = 'active';
    case REJECTED  = 'rejected';
    case PENDING   = 'pending';
    case COMPLETED = 'completed';
    case CANCELLED = 'cancelled';

    public function translate(): string
    {
        return __("events.statuses.{$this->value}");
    }

    public function badge(): string
    {
        return match ($this) {
            self::ACTIVE    => 'bg-blue-500',
            self::COMPLETED => 'bg-green-500',
            self::CANCELLED => 'bg-dark-500',
            self::REJECTED  => 'bg-red-500',
            self::PENDING   => 'bg-yellow-500',
        };
    }

    public static function options(): array
    {
        return collect(self::cases())
            ->map(fn (self $status) => [
                'value' => $status->value,
                'label' => $status->translate(),
            ])
            ->toArray()
        ;
    }
}
