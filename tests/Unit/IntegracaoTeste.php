<?php

namespace Tests\Unit;

use ClienteController;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use PHPUnit\Framework\TestCase;

class IntegracaoTeste extends TestCase{
    /**
     * A basic test example.
     *
     * @return void
     */
use DatabaseTransactions;

    function test_create_user(){
        \App\Http\Controllers\ClienteController::create();
        $this->seeInDatabase('clientes',['nome', ['nome' => 'Maykon Dias Guedes']]);
    }

}
