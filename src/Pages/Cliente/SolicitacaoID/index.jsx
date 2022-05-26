import { useContext } from "react";
import { Header } from "../../../Components/Header";
import { Main } from "../../../Components/Main";
import { MenuHamburgerContext } from "../../../Providers/MenuHamburger";

export const ClienteSolicitacaoID = () => {
    const { setOpenMenuHamb } = useContext(MenuHamburgerContext);

    return (
        <>
            <Header cliente />
            <Main solicitacaoID />
        </>
    );
};
