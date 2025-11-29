<?php

namespace App\Http\Requests;

use App\Enums\EventLevel;
use App\Enums\EventSize;
use App\Enums\EventType;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;

class EventChangeFormRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name'          => ['required', 'max:55'],
            'start'         => ['required', 'date_format:Y-m-d H:i:s', 'after:now'],
            'end'           => ['required', 'date_format:Y-m-d H:i:s', 'after:start'],
            'people_needed' => ['required', 'integer', 'min:1', 'max:30'],
            'type'          => ['required', new Enum(EventType::class)],
            'level'         => ['required', new Enum(EventLevel::class)],
            'size'          => ['required', new Enum(EventSize::class)],
            'description'   => ['string', 'max:255'],
            'location'      => ['required', 'string', 'max:255'],
        ];
    }
}
