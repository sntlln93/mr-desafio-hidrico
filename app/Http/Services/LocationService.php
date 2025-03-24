<?php

namespace App\Http\Services;

use Illuminate\Support\Facades\Http;

class LocationService
{
    protected string $baseUrl = 'http://ip-api.com/json/';

    /**
     * Get location details for a given IP address.
     *
     * @return ?array{
     * "status": "success"|"fail",
     * "country": string,
     * "regionName": string,
     * "city": string,
     * "district": string,
     * "zip": string,
     * "lat": string,
     * "lon": string,
     * "isp": string
     * }
     */
    public function get(string $ip): ?array
    {
        $response = Http::get($this->baseUrl.$ip, [
            'fields' => 'status,message,country,regionName,city,district,zip,lat,lon,isp',
        ]);

        if ($response->successful()) {
            $data = $response->json();

            return $data['status'] === 'success' ? $data : null;
        }

        return null;
    }
}
