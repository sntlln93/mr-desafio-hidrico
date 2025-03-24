<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Game extends Model
{
    public function answers(): BelongsToMany
    {
        return $this->belongsToMany(Answer::class);
    }
}
