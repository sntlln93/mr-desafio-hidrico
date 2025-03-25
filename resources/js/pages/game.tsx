import { Water } from '@/components/water';
import useLocation from '@/hooks/use-location';
import { AppLayout } from '@/layouts/app-layout';
import { cn } from '@/lib/utils';
import { Question } from '@/types';
import { useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Game({ questions }: { questions: Question[] }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [consumption, setConsumption] = useState(0);
    const [answers, setAnswers] = useState<number[]>([]);

    const { location } = useLocation();
    const { post } = useForm();

    const currentQuestion = questions[currentQuestionIndex];

    function handleAnswer(answer_id: number, liters: number) {
        setConsumption((prev) => prev + liters);
        setAnswers((prev) => [...prev, answer_id]);
        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex((prev) => prev + 1);
            }
        }, 300);
    }

    useEffect(() => {
        if (answers.length === questions.length) {
            post(route('game.store', { answers, location }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [answers.length]); // Only trigger when answers array changes

    return (
        <AppLayout>
            {/* Header */}
            <header className="absolute top-5 left-5 flex items-center rounded-md px-4 py-2 shadow-lg">
                <img src="/logo.webp" alt="Desafío Hídrico" className="mb-[-1rem] w-50 drop-shadow-lg" />
            </header>

            {/* Question Card */}
            <main className="relative flex h-screen flex-col items-center justify-center px-4">
                <div className="relative flex min-h-40 w-full items-center justify-center rounded-lg border-4 border-gray-300 bg-white p-6 shadow-lg">
                    <h2 className="text-lg font-bold text-wrap">{currentQuestion.content}</h2>
                </div>
                <div className="mt-4 w-full max-w-md space-y-3">
                    {currentQuestion.answers.map((answer) => (
                        <button
                            key={answer.liters}
                            className={cn(
                                'w-full rounded-md border-2 border-gray-400 bg-white px-6 py-3 text-lg font-semibold hover:border-blue-600 hover:bg-blue-500 hover:text-white',
                                answers.includes(answer.id) && 'border-blue-600 bg-blue-500 text-white',
                            )}
                            onClick={() => handleAnswer(answer.id, answer.liters)}
                            disabled={answers.includes(answer.id)}
                        >
                            {answer.content}
                        </button>
                    ))}
                </div>
            </main>

            {/* Water Score Display */}
            <footer className="absolute right-5 bottom-10">
                <Water consumption={consumption} />
            </footer>
        </AppLayout>
    );
}
