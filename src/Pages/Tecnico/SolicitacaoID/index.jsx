import { useContext, useEffect } from "react";
import { Header } from "../../../Components/Header";
import { Main } from "../../../Components/Main";
import { MenuHamburgerContext } from "../../../Providers/MenuHamburger";
import { SolicitacaoServicoContext } from "../../../Providers/SolicitacaoServico";

export const TecnicoSolicitacaoServicoID = () => {
    const { funcInfoServico, servicoInfo } = useContext(
        SolicitacaoServicoContext
    );
    useEffect(() => {
        funcInfoServico;
    }, []);
    return (
        <>
            <Header tecnico />
            <Main tecnico solicitacaoID />
        </>
    );
};
