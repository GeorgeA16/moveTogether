<?php

namespace App\Enums;

enum EventType: string
{
    case FOOTBALL   = 'football';
    case TENNIS     = 'tennis';
    case HANDBALL   = 'handball';
    case BASKETBALL = 'basketball';
    case PADEL      = 'padel';

    public function translate(): string
    {
        return __("events.types.{$this->value}");
    }

    public function badge(): string
    {
        return match ($this) {
            self::FOOTBALL   => 'bg-blue-500',
            self::TENNIS     => 'bg-green-500',
            self::HANDBALL   => 'bg-orange-500',
            self::BASKETBALL => 'bg-red-500',
            self::PADEL      => 'bg-yellow-500',
        };
    }

    public static function options(): array
    {
        return collect(self::cases())
            ->map(fn (self $type) => [
                'value' => $type->value,
                'label' => $type->translate(),
            ])
            ->toArray()
        ;
    }
}
