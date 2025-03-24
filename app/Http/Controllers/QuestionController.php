<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Inertia\Inertia;

class QuestionController extends Controller
{
    public function index()
    {
        $questions = Question::with('answers')->get();

        return Inertia::render('game', [
            'questions' => $questions,
        ]);
    }
}
