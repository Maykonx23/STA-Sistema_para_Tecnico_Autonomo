import { Switch, Route } from "react-router-dom";
import { Index } from "./Pages";
import { Cliente } from "./Pages/Cliente";
import { Tecnicoindex } from "./Pages/Tecnico";
import { useState } from "react";
import { TecnicoCriarServico } from "./Pages/Tecnico/CriarServiços/criarServico";
import { PagePerfil } from "./Pages/Tecnico/Perfil/Perfil";
import { Login } from "./Pages/Login";
import { Cadastro } from "./Pages/Cadastro";
import { ClienteSolicitacao } from "./Pages/Cliente/Solicitacao";
import { ClientePerfil } from "./Pages/Cliente/perfil";
import { ClienteSolicitacaoID } from "./Pages/Cliente/SolicitacaoID";

function App() {
    const [token, setToken] = useState(
        window.localStorage.getItem("authToken") // eslint-disable-line
    );

    return (
        <div className="">
            <Switch>
                <Route exact path="/">
                    <Index setToken={setToken} />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/register">
                    <Cadastro />
                </Route>
                {/* Inicio Clientes */}
                <Route exact path="/cliente/:id">
                    <Cliente />
                </Route>
                <Route exact path="/cliente/:id/solicitacao">
                    <ClienteSolicitacao />
                </Route>
                <Route path="/cliente/:id/solicitacao/:id">
                    <ClienteSolicitacaoID />
                </Route>
                <Route path="/cliente/:id/perfil">
                    <ClientePerfil />
                </Route>
                {/* Fim Clientes */}
                {/* Inicio Tecnicos */}
                <Route exact path="/tecnico/:id">
                    <Tecnicoindex token={token} />
                </Route>
                <Route path="/tecnico/criar/servico">
                    <TecnicoCriarServico />
                </Route>
                <Route path="/tecnico/:id/perfil">
                    <PagePerfil />
                </Route>
                {/* Fim Tecnicos */}
            </Switch>
        </div>
    );
}

export default App;
