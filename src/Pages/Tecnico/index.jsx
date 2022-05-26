import { useContext, useState } from "react";
import { Header } from "../../Components/Header";
import { Main } from "../../Components/Main";
import { AbrirIndoServico } from "../../modals/AbrirInfoServico";
import { ListServicosContext } from "../../Providers/ListServicos";
import { MenuHamburgerContext } from "../../Providers/MenuHamburger";
import { RoutesContext } from "../../Providers/Routes";

export const Tecnicoindex = () => {
    const [token, settoken] = useState(
        window.localStorage.getItem("@TCC/Token") // eslint-disable-line
    );

    const { returnIndex } = useContext(RoutesContext);

    if (!token) {
        returnIndex();
    }
    const { openMenuHamb, setOpenMenuHamb } = useContext(MenuHamburgerContext);

    const { servico } = useContext(ListServicosContext);

    return (
        <>
            {servico.length != 0 && <AbrirIndoServico />}
            <Header tecnico />
            <Main home />
        </>
    );
};
