<?php

use App\Models\Question;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $questions = Question::with('answers')->get();

    return Inertia::render('welcome', [
        'questions' => $questions,
    ]);
})->name('home');
