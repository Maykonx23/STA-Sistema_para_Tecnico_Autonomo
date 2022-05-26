import { useContext, useState } from "react";
import { Header } from "../../../Components/Header";
import { Main } from "../../../Components/Main";
import { MenuHamburgerContext } from "../../../Providers/MenuHamburger";
import { RoutesContext } from "../../../Providers/Routes";

export const TecnicoSolicitacao = () => {
    const [token, setToken] = useState(
        window.localStorage.getItem("@TCC/Token") // eslint-disable-line
    );

    const { returnIndex } = useContext(RoutesContext);

    if (!token) {
        returnIndex();
    }

    const { openMenuHamb, setOpenMenuHamb } = useContext(MenuHamburgerContext);

    return (
        <>
            <Header tecnico />
            <Main solicitacao />
        </>
    );
};
