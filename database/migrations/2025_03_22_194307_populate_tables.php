<?php

use App\Models\Question;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $questions = [
            [
                'content' => '¿Cuánto tiempo tardás en bañarte?',
                'answers' => [
                    ['content' => 'Entre 5 y 10 minutos', 'liters' => 50],
                    ['content' => 'Más de 10 minutos', 'liters' => 100],
                ],
            ],
            [
                'content' => '¿Dejás el grifo abierto mientars te cepillás los dientes?',
                'answers' => [
                    ['content' => 'No, lo cierro siempre', 'liters' => 0],
                    ['content' => 'A veces lo dejo abierto', 'liters' => 5],
                ],
            ],
            [
                'content' => '¿Cómo regás tus plantas?',
                'answers' => [
                    ['content' => 'Uso un balde', 'liters' => 10],
                    ['content' => 'Uso manguera', 'liters' => 50],
                ],
            ],
            [
                'content' => '¿Cómo lavás los platos?',
                'answers' => [
                    ['content' => 'Enjuago rápido y con poca agua', 'liters' => 10],
                    ['content' => 'Dejo la llave abierta todo el tiempo', 'liters' => 80],
                ],
            ],
            [
                'content' => '¿Con qué limpiás la vereda?',
                'answers' => [
                    ['content' => 'Con manguera', 'liters' => 50],
                    ['content' => 'Con balde', 'liters' => 10],
                ],
            ],
            [
                'content' => '¿Cómo lavás tus alimentos?',
                'answers' => [
                    ['content' => 'Utilizo un recipiente con agua', 'liters' => 5],
                    ['content' => 'Los lavo directo bajo el grifo abierto', 'liters' => 20],
                ],
            ],
            [
                'content' => '¿Cómo lavás tu ropa?',
                'answers' => [
                    ['content' => 'Uso lavadora con carga completa', 'liters' => 60],
                    ['content' => 'Lavo cada prenda de a poco, cada vez que una se ensucia', 'liters' => 200],
                ],
            ],
            [
                'content' => '¿Tenés alguna fuga de agua en tu hogar (goteo de grifo o tubería rota)?',
                'answers' => [
                    ['content' => 'No, reviso y reparo a tiempo', 'liters' => 0],
                    ['content' => 'Sí, tengo', 'liters' => 100],
                ],
            ],
            [
                'content' => '¿Cómo consumís agua diariamente?',
                'answers' => [
                    ['content' => 'Bebo la cantidad necesaria y sino la guardo', 'liters' => 0],
                    ['content' => 'A veces dejo restos sin tomar en el vaso y la tiro', 'liters' => 10],
                ],
            ],
        ];

        foreach ($questions as $question) {
            $_question = Question::create([
                'content' => $question['content'],
            ]);

            foreach ($question['answers'] as $answer) {
                $_question->answers()->create($answer);
            }
        }
    }
};
