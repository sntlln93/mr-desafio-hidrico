<?php

namespace App\Http\Controllers;

use App\Http\Services\LocationService;
use App\Models\Answer;
use App\Models\Game;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GameController extends Controller
{
    public function store(Request $request, LocationService $location)
    {
        $ip_info = $location->get($request->ip());

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

        $consumption = Answer::findMany($request->answers)->sum('liters');

        return Inertia::render('game-finish', [
            'content' => $this->getContent($consumption),
        ]);
    }

    private function getContent($consumption)
    {
        $contents = [
            'win' => [
                'title' => '¡Felicidades! Sos guardián/a del agua.',
                'message' => '¡Excelente! ¡Seguí así!',
            ],
            'avg' => [
                'title' => '¡Podés mejorar!',
                'message' => 'Hay muchas formas sencillas de reducir tu consumo.',
            ],
            'loss' => [
                'title' => '¡Cuidado! ¡Estás desperdiciando agua!',
                'message' => 'Estás a tiempo de actuar para generar un cambio real en tu rutina y cuidar uno de nuestros recursos más valiosos.',
            ],
        ];

        if ($consumption < 150) {
            return $contents['win'];
        }
        if ($consumption < 500) {
            return $contents['loss'];
        }

        return $contents['avg'];
    }
}
