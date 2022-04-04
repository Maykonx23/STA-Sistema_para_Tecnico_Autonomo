<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterTablesEstrangeira extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('clientes', function (Blueprint $table) {
            $table->unsignedBigInteger("endereco_id");
            $table->unsignedBigInteger("solicitacao_servico_id");

            $table->foreign("endereco_id")->references("id")->on("enderecos");
            $table->unique("endereco_id");

            $table->foreign("solicitacao_servico_id")->references("id")->on("solicitacao_servicos");
            $table->unique("solicitacao_servico_id");
        });

        Schema::table('tecnicos', function (Blueprint $table) {
            $table->unsignedBigInteger("servico_id");
            $table->unsignedBigInteger("cliente_id");

            $table->foreign("servico_id")->references("id")->on("servicos");

            $table->foreign("cliente_id")->references("id")->on("clientes");
            $table->unique("cliente_id");
        });

        Schema::table('servicos', function (Blueprint $table) {
            $table->unsignedBigInteger("tecnico_id");

            $table->foreign("tecnico_id")->references("id")->on("servicos");
            $table->unique("tecnico_id");
        });

        Schema::table('solicitacao_servicos', function (Blueprint $table) {
            $table->unsignedBigInteger("chat_id");
            $table->unsignedBigInteger("tecnico_id");
            $table->unsignedBigInteger("cliente_id");
            $table->unsignedBigInteger("servico_id");

            $table->foreign("chat_id")->references("id")->on("chats");

            $table->foreign("tecnico_id")->references("id")->on("tecnicos");
            $table->unique("tecnico_id");

            $table->foreign("cliente_id")->references("id")->on("clientes");
            $table->unique("cliente_id");

            $table->foreign("servico_id")->references("id")->on("servicos");
            $table->unique("servico_id");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
