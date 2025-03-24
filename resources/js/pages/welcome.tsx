import useLocation from '@/hooks/use-location';
import { AppLayout } from '@/layouts/app-layout';
import { Link } from '@inertiajs/react';

export default function Welcome() {
    useLocation();

    return (
        <AppLayout>
            {/* Logo and Title */}
            <header className="mb-8 flex flex-col items-center">
                <img src="/logo.webp" alt="Desafío Hídrico" className="mb-[-1rem] w-100 drop-shadow-lg" />
                <p className="mt-3 max-w-[22rem] text-3xl/7 font-black text-white drop-shadow-2xl">¡Descubrí si ahorrás o derrochás agua!</p>
            </header>

            {/* Button */}
            <footer className="mt-10">
                <Link
                    href={route('game.play')}
                    className="relative rounded-[2rem] bg-[#2E4DA0] px-8 py-6 text-4xl font-bold text-white shadow-lg before:absolute before:inset-0 before:top-[-4px] before:right-[4px] before:bottom-[4px] before:left-[-4px] before:z-[-1] before:rounded-[2rem] before:bg-[#3b5ebb] after:absolute after:inset-0 after:top-[4px] after:right-[-4px] after:bottom-[-4px] after:left-[4px] after:z-[-1] after:rounded-[2rem] after:bg-[#1b3a73] hover:cursor-pointer hover:bg-[#07153F]"
                >
                    COMENZAR
                </Link>
            </footer>
        </AppLayout>
    );
}
