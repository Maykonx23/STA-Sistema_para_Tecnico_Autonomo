<?php

namespace Tests\Feature;
use App\Models\Cliente;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UnitarioTexte extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testUsuarioContem()
    {
        $user = new Cliente(['Maykon', 'teste', '123']);
        $this->assertTrue($user->contem('Maykon'));
        $this->assertFalse($user->contem('12345'));
    }
}
