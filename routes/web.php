<?php

use App\Http\Controllers\GameController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\WelcomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [WelcomeController::class, 'index'])->name('home');
Route::get('/game/play', [QuestionController::class, 'index'])->name('game.play');
Route::post('/game', [GameController::class, 'store'])->name('game.store');
