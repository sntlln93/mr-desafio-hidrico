import useLocation from '@/hooks/use-location';
import { Question } from '@/types';
import { Head } from '@inertiajs/react';

export default function Welcome({ questions }: { questions: Question[] }) {
    const { location, error, loading } = useLocation();
    return (
        <>
            <Head title="Mejor Riojanas">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8">
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-[335px] flex-col-reverse lg:max-w-4xl lg:flex-row"></main>
                </div>
            </div>
        </>
    );
}
