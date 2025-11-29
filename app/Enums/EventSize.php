<?php

namespace App\Enums;

enum EventSize: string
{
    case ONE    = '1vs1';
    case TWO    = '2vs2';
    case THREE  = '3vs3';
    case FOUR   = '4vs4';
    case FIVE   = '5vs5';
    case SIX    = '6vs6';
    case SEVEN  = '7vs7';
    case EIGHT  = '8vs8';
    case NINE   = '9vs9';
    case TEN    = '10vs10';
    case ELEVEN = '11vs11';


    public function translate(): string
    {
        return __("events.sizes.{$this->value}");
    }

    public static function options(): array
    {
        return collect(self::cases())
            ->map(fn (self $size) => [
                'value' => $size->value,
                'label' => $size->translate(),
            ])
            ->toArray()
        ;
    }
}
