import { useContext, useState } from "react";
import { Header } from "../../Components/Header";
import { Main } from "../../Components/Main";
import { MenuHamburgerContext } from "../../Providers/MenuHamburger";
import { AbrirIndoServico } from "../../modals/AbrirInfoServico";
import { ListServicosContext } from "../../Providers/ListServicos";
import { RoutesContext } from "../../Providers/Routes";
import { ErrosGeral } from "src/modals/Errors";
import { SolicitacaoServicoContext } from "src/Providers/SolicitacaoServico";

export const Cliente = () => {
    const [token, settoken] = useState(
        window.localStorage.getItem("@TCC/Token") // eslint-disable-line
    );

    const { returnIndex } = useContext(RoutesContext);
    const { solicitacaoServicoOn } = useContext(SolicitacaoServicoContext);

    if (!token) {
        returnIndex();
    }

    const { servico } = useContext(ListServicosContext);

    return (
        <>
            {solicitacaoServicoOn && (
                <ErrosGeral solicitacaoFeita>Solicitação Realizada</ErrosGeral>
            )}
            {servico.length != 0 && <AbrirIndoServico />}
            <Header cliente />
            <Main home />
        </>
    );
};
