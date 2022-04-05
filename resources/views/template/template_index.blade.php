<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Inicio CSS -->

    <link rel="stylesheet" href="{{URL::asset("assets/css/style.css")}}" />

    <link rel="stylesheet" href="{{URL::asset("assets/css/reset.css")}}" />

    <!-- Final CSS -->

    <title>@yield("title")</title>
  </head>
  <body>
    <header>
      <section id="Logo"><h1>STA - Sistema para Técnicos Autônomo</h1></section>
      <section class="menu-home">
        <a href="www.google.com">Sobre</a>
        <a href="">Equipe</a>
        <span class="btn-logar">Login</span>
        <span class="btn-cad">Cadastre-se</span>
      </section>
    </header>

      <main>@yield("content")</main>
    

    <!-- Script -->
    <script src="{{URL::asset("assets/js/script.js")}}"></script>
  </body>
</html>

<a href="https://www.google.com/"></a>
