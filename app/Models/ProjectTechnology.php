<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectTechnology extends Model
{
    use HasFactory;

    protected $fillable = [
        'position'
    ];

    public function projects() {
        return $this->hasOne(Project::class);
    }

    public function technologies() {
        return $this->hasOne(Technology::class);
    }
}
