import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Index } from "./Pages";
import { ClienteIndex } from "./Pages/Cliente";
import { Tecnicoindex } from "./Pages/Tecnico";
import { TecnicoCriarServico } from "./Pages/Tecnico/criarServico";

function App() {
  return (
    <div className="">
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/cliente/" component={ClienteIndex} />
        <Route exact path="/tecnico/" component={Tecnicoindex} />
        <Route path="/tecnico/criar/servico" component={TecnicoCriarServico} />
      </Switch>
    </div>
  );
}

export default App;
