<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'link',
        'image_url'
    ];

    public function technologies() {
        return $this->belongsToMany(Technology::class, 'project_technologies')->withPivot('position');
    }
}
