import { useContext } from "react";
import { DropMenuContext } from "../../Providers/DropMenu";
import { MenuHamburgerContext } from "../../Providers/MenuHamburger";
import { Button } from "../Buttons";
import { Card } from "../Cards";
import { Input } from "../Inputs";
import {
    ConteListServico,
    ConteMain,
    ContePerfil,
    DivImg,
    DivInfo,
} from "./styled";
import User from "./user.svg";

export const Main = ({ home, solicitacao, perfil, solicitacaoID }) => {
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

                    <Card listCabecalho />
                    <ConteListServico>
                        <Card listServicos />
                        <Card listServicos />
                        <Card listServicos />
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

            {solicitacaoID && (
                <ConteMain onClick={openMenu}>
                    <ConteListServico>
                        <Button voltar>Voltar</Button>
                    </ConteListServico>
                </ConteMain>
            )}

            {perfil && (
                <ConteMain onClick={openMenu}>
                    <ContePerfil>
                        <DivImg>
                            <div>
                                <img src={User} alt="" />
                            </div>
                        </DivImg>
                        <DivInfo>
                            <Input info>Name</Input>
                            <Input info>Email</Input>
                            <Input info>CPF</Input>
                            <Input info>Telefone</Input>
                            <Input info>CEP</Input>
                            <Input info>UF</Input>
                            <Input info>Cidade</Input>
                            <Input info>Bairro</Input>
                            <Input info>Rua</Input>
                            <Input info>Numero</Input>
                            <Input info>Complemento</Input>
                            <Button edit>Salvar</Button>
                        </DivInfo>
                    </ContePerfil>
                </ConteMain>
            )}
        </>
    );
};
