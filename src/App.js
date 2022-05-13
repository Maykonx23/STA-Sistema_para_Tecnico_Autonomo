import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Index } from './Pages';
import { ClienteIndex } from './Pages/Cliente';
import { Tecnicoindex } from './Pages/Tecnico';
import { useState } from 'react';
import { TecnicoCriarServico } from './Pages/Tecnico/CriarServiços/criarServico';
import { PagePerfil } from './Pages/Tecnico/Perfil/Perfil';

function App() {
    const [token, setToken] = useState(
        window.localStorage.getItem('authToken'),
    );

    return (
        <div className="">
            <Switch>
                <Route exact path="/">
                    <Index setToken={setToken} />
                </Route>
                <Route exact path="/cliente/:id">
                    <ClienteIndex />
                </Route>
                <Route exact path="/tecnico/:id">
                    <Tecnicoindex token={token} />
                </Route>
                <Route path="/tecnico/criar/servico">
                    <TecnicoCriarServico />
                </Route>
                <Route path="/tecnico/:id/perfil">
                    <PagePerfil />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
