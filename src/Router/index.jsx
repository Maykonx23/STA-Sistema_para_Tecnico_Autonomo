import { useState } from "react";
import { Switch, Route } from "react-router-dom";
/* Pages */
import { Index } from "../Pages";
import { Login } from "../Pages/Login";
import { Cadastro } from "../Pages/Cadastro";
import { Cliente } from "../Pages/Cliente";
import { ClienteSolicitacao } from "../Pages/Cliente/Solicitacao";
import { ClienteSolicitacaoID } from "../Pages/Cliente/SolicitacaoID";
import { ClientePerfil } from "../Pages/Cliente/perfil";
import { Tecnicoindex } from "../Pages/Tecnico";
import { TecnicoSolicitacao } from "../Pages/Tecnico/Solicitacao";
import { TecnicoPerfil } from "../Pages/Tecnico/Perfil/Perfil";
import { SolicitarTecnico } from "../Pages/Cliente/SolicitarTecnico";
import { CriarServico } from "../Pages/Tecnico/CriarServiços/criarServico";

/* Pages */

export const Rotas = () => {
    const [token, settoken] = useState(
        window.localStorage.getItem("@TCC/Token") // eslint-disable-line
    );

    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Index />
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
                <Route path="/cliente/:id/solicitacao-tecnico">
                    <SolicitarTecnico />
                </Route>
                {/* Fim Clientes */}
                {/* Inicio Tecnicos */}
                <Route exact path="/tecnico/:id">
                    <Tecnicoindex />
                </Route>
                <Route exact path="/tecnico/:id/solicitacao">
                    <TecnicoSolicitacao />
                </Route>
                <Route path="/tecnico/:id/perfil">
                    <TecnicoPerfil />
                </Route>
                <Route path="/tecnico/:id/criar-servico">
                    <CriarServico />
                </Route>

                {/* Fim Tecnicos */}
            </Switch>
        </>
    );
};
