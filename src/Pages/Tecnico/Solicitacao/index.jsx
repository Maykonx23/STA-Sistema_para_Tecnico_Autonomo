import { useContext, useEffect, useState } from "react";
import { Header } from "../../../Components/Header";
import { Main } from "../../../Components/Main";
import { MenuHamburgerContext } from "../../../Providers/MenuHamburger";
import { RoutesContext } from "../../../Providers/Routes";
import { SolicitacaoServicoContext } from "../../../Providers/SolicitacaoServico";

export const TecnicoSolicitacao = () => {
    const [token, setToken] = useState(
        window.localStorage.getItem("@TCC/Token") // eslint-disable-line
    );

    const id = window.localStorage.getItem("@TCC/ID"); // eslint-disable-line

    const { returnIndex } = useContext(RoutesContext);

    if (!token) {
        returnIndex();
    }

    const { openMenuHamb, setOpenMenuHamb } = useContext(MenuHamburgerContext);

    const { funcInfoSolicitacaoServico, solicitacaoServicoInfo } = useContext(
        SolicitacaoServicoContext
    );

    useEffect(() => {
        funcInfoSolicitacaoServico(id, "tecnico");
    }, [funcInfoSolicitacaoServico]);

    return (
        <>
            <Header tecnico />
            <Main solicitacaoServico />
        </>
    );
};
