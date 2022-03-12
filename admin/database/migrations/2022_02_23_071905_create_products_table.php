<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{

    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('p_name');
            $table->string('p_location');
            $table->string('p_description');
            $table->text('p_image');
            $table->text('p_sup_image1');
            $table->text('p_sup_image2');
            $table->foreignId('category_id')
            ->unsigned()
            ->references('id')
            ->on('categories')
            ->onDelete('cascade');
            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::dropIfExists('products');
    }
}
