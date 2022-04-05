<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use App\Models\Endereco;
use Illuminate\Http\Request;

class ClienteController extends Controller
{
    public function create(Request $request){
        $endereco = new Endereco();

        $endereco->id;
        $endereco->cep = $request->cep;
        $endereco->uf = $request->uf;
        $endereco->cidade = $request->cidade;
        $endereco->bairro = $request->bairro;
        $endereco->rua = $request->rua;
        $endereco->numero = $request->numero;
        $endereco->complemento = $request->complemento;

        $endereco->save();

        $cliente = new Cliente();

        $cliente->id;
        $cliente->nome = $request->nome;
        $cliente->email = $request->email;
        $cliente->senha = $request->senha;
        $cliente->cpf = $request->cpf;
        $cliente->data_nasc = $request->data_nasc;
        $cliente->telefone = $request->telefone;
        $cliente->endereco_id = $endereco->id;
        $cliente->solicitacao_servico_id = $endereco->solicitacao_servico_id;
        $cliente->avaliacao = $request->avaliacao;
        $cliente->nivel = $request->nivel;

        $cliente->save();

    }
}
