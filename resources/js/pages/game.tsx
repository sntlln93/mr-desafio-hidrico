import { Water } from '@/components/water';
import { AppLayout } from '@/layouts/app-layout';
import { cn } from '@/lib/utils';
import { Question } from '@/types';
import { useState } from 'react';

export default function Game({ questions }: { questions: Question[] }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    const currentQuestion = questions[currentQuestionIndex];

    function handleAnswer(liters: number) {
        setSelectedOption(liters);
        setScore((prev) => prev + liters);
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
            setSelectedOption(null);
        } else {
            alert(`¡Juego terminado! Agua utilizada: ${score + liters} litros`);
        }
    }

    return (
        <AppLayout>
            <header className="absolute top-5 left-5">
                <img src="/logo.webp" alt="Desafío Hídrico" className="w-40 drop-shadow-lg" />
            </header>

            {/* Question Card */}
            <main className="flex h-screen flex-col items-center justify-center px-4">
                <div className="w-full max-w-lg rounded-lg bg-white p-6 text-center shadow-lg">
                    <h2 className="text-xl font-bold">{currentQuestion.content}</h2>
                    <div className="mt-4 space-y-2">
                        {currentQuestion.answers.map((answer) => (
                            <button
                                key={answer.liters}
                                className={cn('w-full', selectedOption === answer.liters ? 'bg-blue-500 text-white' : '')}
                                onClick={() => handleAnswer(answer.liters)}
                                disabled={selectedOption !== null}
                            >
                                {answer.content}
                            </button>
                        ))}
                    </div>
                </div>
            </main>

            {/* Score Visualization (Water Bucket) */}
            <footer className="mt-10 flex justify-center">
                <Water score={score} />
            </footer>
        </AppLayout>
    );
}
