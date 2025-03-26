import { AppLayout } from '@/layouts/app-layout';
import { Link } from '@inertiajs/react';

export default function GameFinish({ content }: { content: { title: string; message: string } }) {
    return (
        <AppLayout>
            {/* Logo and Title */}
            <header className="absolute top-5 left-5 flex items-center rounded-md px-4 py-2 shadow-lg">
                <img src="/logo.webp" alt="Desafío Hídrico" className="mb-[-1rem] w-50 drop-shadow-lg" />
            </header>

            <main className="max-w-[80%] text-white">
                <h1 className="mb-2 scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl">{content.title}</h1>
                <h2 className="scroll-m-20 text-2xl tracking-tight transition-colors first:mt-0 lg:text-3xl">{content.message}</h2>
            </main>
            {/* Button */}
            <footer className="mt-20">
                <Link
                    href={route('game.play')}
                    className="relative mx-auto rounded-[2rem] bg-[#2E4DA0] px-8 py-6 text-3xl font-bold text-white shadow-lg"
                >
                    Volver a jugar
                </Link>
            </footer>
        </AppLayout>
    );
}
