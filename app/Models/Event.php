<?php

namespace App\Models;

use App\Enums\EventLevel;
use App\Enums\EventSize;
use App\Enums\EventStatus;
use App\Enums\EventType;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Event extends Model
{
    protected $table = 'events';

    protected $guarded = [
        'id',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected function casts(): array
    {
        return [
            'start'  => 'datetime',
            'end'    => 'datetime',
            'status' => EventStatus::class,
            'type'   => EventType::class,
            'size'   => EventSize::class,
            'level'  => EventLevel::class,
        ];
    }

    public function createdBy(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
