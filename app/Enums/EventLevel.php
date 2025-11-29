<?php

namespace App\Enums;

enum EventLevel: string
{
    case AMATEUR      = 'amateur';
    case BEGINNER     = 'beginner';
    case INTERMEDIATE = 'intermediate';
    case ADVANCED     = 'advanced';

    public function translate(): string
    {
        return __("events.levels.{$this->value}");
    }

    public function badge(): string
    {
        return match ($this) {
            self::AMATEUR      => 'bg-blue-500',
            self::BEGINNER     => 'bg-green-500',
            self::INTERMEDIATE => 'bg-yellow-500',
            self::ADVANCED     => 'bg-red-500',
        };
    }

    public static function options(): array
    {
        return collect(self::cases())
            ->map(fn (self $level) => [
                'value' => $level->value,
                'label' => $level->translate(),
            ])
            ->toArray()
        ;
    }
}
