<?php

namespace App\Http\Controllers;

use App\Http\Services\LocationService;
use App\Models\Game;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class GameController extends Controller
{
    public function store(Request $request, LocationService $location)
    {
        $ip_info = $location->get($request->ip());
        Log::info($request->ips());

        $game = Game::create([
            'ip_address' => $request->ip(),
            'user_agent' => $request->header('user-agent'),
            'latitude' => $request->location ? $request->location['lat'] : null,
            'longitude' => $request->location ? $request->location['lon'] : null,
            'country' => $ip_info ? $ip_info['country'] : null,
            'regionName' => $ip_info ? $ip_info['regionName'] : null,
            'city' => $ip_info ? $ip_info['city'] : null,
            'district' => $ip_info ? $ip_info['district'] : null,
            'zip' => $ip_info ? $ip_info['zip'] : null,
            'isp' => $ip_info ? $ip_info['isp'] : null,
            'ip_latitude' => $ip_info ? $ip_info['lat'] : null,
            'ip_longitude' => $ip_info ? $ip_info['lon'] : null,
        ]);

        $game->answers()->attach($request->answers);

        return redirect()->route('home');
    }
}
