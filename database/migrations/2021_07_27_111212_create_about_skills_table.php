<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAboutSkillsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('about_skills', function (Blueprint $table) {
            $table->id();
            $table->integer('about_id')->default(1);
            $table->foreign('about_id')->references('id')->on('about');
            $table->string('name');
            $table->integer('exp');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('about_skills');
    }
}
