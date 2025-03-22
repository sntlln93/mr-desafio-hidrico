<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('answer_game', function (Blueprint $table) {
            $table->id();
            $table->foreignId('answer_id')->constrained();
            $table->foreignId('game_id')->constrained();
            $table->timestamps();
        });
    }
};
