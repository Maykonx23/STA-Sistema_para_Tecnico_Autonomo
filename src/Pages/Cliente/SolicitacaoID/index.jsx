import { useEffect } from "react";
import { useContext } from "react";
import { Header } from "../../../Components/Header";
import { Main } from "../../../Components/Main";
import { ListServicosContext } from "../../../Providers/ListServicos";
import { MenuHamburgerContext } from "../../../Providers/MenuHamburger";

export const ClienteSolicitacaoID = () => {
    return (
        <>
            <Header cliente />
            <Main solicitacaoIDCliente />
        </>
    );
};
