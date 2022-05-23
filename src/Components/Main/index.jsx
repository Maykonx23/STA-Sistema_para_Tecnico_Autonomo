import { useContext } from "react";
import { DropMenuContext } from "../../Providers/DropMenu";
import { MenuHamburgerContext } from "../../Providers/MenuHamburger";
import { Card } from "../Cards";
import { ConteListServico, ConteMain, ContePerfil } from "./styled";
import User from "./user.svg";

export const Main = ({ home, solicitacao, perfil }) => {
    const { openMenuHamb, setOpenMenuHamb } = useContext(MenuHamburgerContext);
    const {
        setOpenDropHome,
        setOpenDropServico,
        setOpenDropConfig,
        setOpenDropPerfil,
    } = useContext(DropMenuContext);

    const openMenu = () => {
        setOpenMenuHamb(false);

        setOpenDropHome(false);
        setOpenDropServico(false);
        setOpenDropConfig(false);
        setOpenDropPerfil(false);
    };
    return (
        <>
            {home && (
                <ConteMain onClick={openMenu}>
                    <h1>
                        Bem vindo <span>Name</span>.
                    </h1>

                    <h2>Serviços Disponiveis</h2>
                    <ConteListServico>
                        <Card listCabecalho />
                        <Card listServicos />
                        <Card listServicos />
                        <Card listServicos />
                    </ConteListServico>
                </ConteMain>
            )}
            {solicitacao && (
                <ConteMain onClick={openMenu}>
                    <ConteListServico>
                        <Card listCabecalhoSolicitacao />
                        <Card listServicosSolicitacao />
                        <Card listServicosSolicitacao />
                        <Card listServicosSolicitacao />
                    </ConteListServico>
                </ConteMain>
            )}

            {perfil && (
                <ConteMain onClick={openMenu}>
                    <ContePerfil>
                        <div>
                            <img src={User} alt="" />
                        </div>
                    </ContePerfil>
                </ConteMain>
            )}
        </>
    );
};
