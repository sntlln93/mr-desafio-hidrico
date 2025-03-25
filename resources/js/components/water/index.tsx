export function Water({ consumption }: { consumption: number }) {
    return (
        <div
            style={{
                clipPath: 'polygon(0 0, 100% 0, 90% 100%, 10% 100%)',
            }}
            className="relative h-24 w-16 overflow-hidden rounded-t-xs rounded-b-2xl bg-white/20 backdrop-blur-lg"
        >
            {/* Water Fill */}
            <div
                className="absolute bottom-0 left-0 w-full bg-blue-400 transition-all duration-500"
                style={{
                    clipPath: 'polygon(0 0, 100% 0, 90% 100%, 10% 100%)',
                    height: `${(consumption * 100) / 615}%`,
                }}
            />
        </div>
    );
}
