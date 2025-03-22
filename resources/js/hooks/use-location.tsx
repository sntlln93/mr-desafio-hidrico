import { useEffect, useState } from 'react';

const useLocation = () => {
    const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!('geolocation' in navigator)) {
            setError('Geolocation is not supported by this browser.');
            setLoading(false);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                });
                setLoading(false);
            },
            (error) => {
                setError(error.message);
                setLoading(false);
            },
            { enableHighAccuracy: true },
        );
    }, []); // Runs only once on mount

    return { location, error, loading };
};

export default useLocation;
