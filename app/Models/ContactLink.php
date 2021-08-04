<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactLink extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'link'
    ];

    public function contact() {
        return $this->belongsTo(Contact::class);
    }
}
