<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AboutSkill extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'exp'
    ];

    public function about() {
        return $this->belongsTo(About::class);
    }
}
