@extends('template.template_index')
@section("title", 'STA - Sistema para Técnicos Autônomo')
@section("content")

      <section class="local-login" id="move-sair">
        <div class="form-logar">
          <div class="close-form">
            <div class="div-esquerda"></div>
            <div class="div-direita"></div>
          </div>
          <h1>Login</h1>
          <input type="text" placeholder="Email / CPF" />
          <input type="password" placeholder="Senha" />
          <button>Entrar</button>
        </div>
      </section>

      <section class="local-cadastro" id="move-sair">
        <div class="form-cadastrar">
          <div class="close-form-cad">
            <div class="div-esquerda"></div>
            <div class="div-direita"></div>
          </div>
          <h1>Cadastrar</h1>
          <form>
            <input type="text" placeholder="Nome Completo" />
            <input type="text" placeholder="Email" />

            <input type="text" placeholder="Senha" />
            <input type="text" placeholder="Confirmar Senha" />

            <input type="text" placeholder="CPF" />

            <input type="text" placeholder="Telefone" />

            <input type="text" placeholder="CEP" />
            <div>
              <label for=""></label>
              <input type="date" placeholder="Data de nas" />
            </div>
          </form>

          <button>Cadastrar</button>
        </div>
      </section>

    @endsection