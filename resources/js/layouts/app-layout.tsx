import { Head } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export function AppLayout({ children }: PropsWithChildren) {
    return (
        <div
            className="flex h-screen w-screen flex-col items-center justify-center text-center font-sans font-extrabold"
            style={{
                backgroundImage: 'url(/background.webp)',
                backgroundSize: '120%',
                backgroundPosition: 'center',
            }}
        >
            <Head title="Mejor Riojanas">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            {children}
        </div>
    );
}
