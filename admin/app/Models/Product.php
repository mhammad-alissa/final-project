<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'p_name',
        'p_location',
        'p_description',
        'p_image',
        'p_sup_image1',
        'p_sup_image2',
        'category_id',

    ];
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
