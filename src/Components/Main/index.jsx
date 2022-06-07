import { useContext, useEffect, useState } from "react";
import { ServicoContext } from "../../Providers/CriarServico";
import { DropMenuContext } from "../../Providers/DropMenu";
import { ListServicosContext } from "../../Providers/ListServicos";
import { LoginContext } from "../../Providers/Login";
import { MenuHamburgerContext } from "../../Providers/MenuHamburger";
import { RoutesContext } from "../../Providers/Routes";
import { Button } from "../Buttons";
import { CardCriar } from "../CardCriarServico";
import { Card } from "../Cards";
import { Input } from "../Inputs";
import { Label } from "../Label";
import {
    ConteCriarServico,
    ConteFormTec,
    ConteListCriarService,
    ConteListServico,
    ConteMain,
    ContePerfil,
    DivImg,
    DivInfo,
    MainCriarServico,
} from "./styled";
import User from "./user.svg";

export const Main = ({
    home,
    solicitacao,
    perfil,
    solicitacaoID,
    perfilTec,
    solicitacaoTecnico,
    CriarServico,
}) => {
    const { openMenuHamb, setOpenMenuHamb } = useContext(MenuHamburgerContext);
    const { servicosGerais, listServico } = useContext(ListServicosContext);

    const { userInfo, clienteInfo } = useContext(LoginContext);
    const { servicosCriados } = useContext(ServicoContext);

    useEffect(() => {
        listServico();
    }, []);

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
            {home && userInfo.length != 0 && (
                <ConteMain onClick={openMenu}>
                    <h1>
                        Bem vindo <span>{userInfo.name}</span>.
                    </h1>

                    <Card listCabecalho />
                    <ConteListServico>
                        {servicosGerais.length != 0 ? (
                            <>
                                {servicosGerais.map((elemento) => {
                                    return (
                                        <Card
                                            key={elemento.id}
                                            listServicos
                                            elemento={elemento}
                                        />
                                    );
                                })}
                            </>
                        ) : (
                            <div>oi</div>
                        )}
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

            {perfil && userInfo.length != 0 && (
                <ConteMain onClick={openMenu}>
                    <ContePerfil>
                        <DivImg>
                            <div>
                                <img src={User} alt="" />
                            </div>
                        </DivImg>
                        <DivInfo>
                            <Input info>{userInfo.name}</Input>
                            <Input info>{userInfo.email}</Input>
                            <Input info>{userInfo.cpf}</Input>
                            <Input info>{userInfo.telefone}</Input>
                            <Input info>{userInfo.endereco.cep}</Input>
                            <Input info>{userInfo.endereco.uf}</Input>
                            <Input info>{userInfo.endereco.cidade}</Input>
                            <Input info>{userInfo.endereco.bairro}</Input>
                            <Input info>{userInfo.endereco.rua}</Input>
                            <Input info>{userInfo.endereco.numero}</Input>
                            <Input info>{userInfo.endereco.complemento}</Input>
                            <Button edit>Salvar</Button>
                        </DivInfo>
                    </ContePerfil>
                </ConteMain>
            )}

            {perfilTec && userInfo.length != 0 && (
                <ConteMain onClick={openMenu}>
                    <ContePerfil>
                        <DivImg>
                            <div>
                                <img src={User} alt="" />
                            </div>
                        </DivImg>
                        <DivInfo>
                            <Input info>{userInfo.cliente.name}</Input>
                            <Input info>{userInfo.cliente.email}</Input>
                            <Input info>{userInfo.cliente.cpf}</Input>
                            <Input info>{userInfo.cliente.telefone}</Input>
                            <Input info>{clienteInfo.endereco.cep}</Input>
                            <Input info>{clienteInfo.endereco.uf}</Input>
                            <Input info>{clienteInfo.endereco.cidade}</Input>
                            <Input info>{clienteInfo.endereco.bairro}</Input>
                            <Input info>{clienteInfo.endereco.rua}</Input>
                            <Input info>{clienteInfo.endereco.numero}</Input>
                            <Input info>
                                {clienteInfo.endereco.complemento}
                            </Input>
                            <Button edit>Salvar</Button>
                        </DivInfo>
                    </ContePerfil>
                </ConteMain>
            )}

            {solicitacaoTecnico && (
                <ConteMain onClick={openMenu}>
                    <ContePerfil>
                        <h1>Solicitação Para Virar Tecnico</h1>
                        <p>
                            Preencha o Formulario a baixo para realizar sua
                            Solicitação.
                        </p>

                        <ConteFormTec>
                            <div>
                                <Label solitacaoTec>Descrição</Label>
                                <textarea></textarea>
                            </div>

                            <Button solicitar>Enviar</Button>
                        </ConteFormTec>
                    </ContePerfil>
                </ConteMain>
            )}

            {CriarServico && (
                <ConteMain onClick={openMenu}>
                    <MainCriarServico>
                        <Card criarServico />
                    </MainCriarServico>
                    <ConteListCriarService>
                        {servicosCriados.length != 0 && (
                            <>
                                {servicosCriados.map((elemento) => {
                                    return (
                                        <Card
                                            cardServico
                                            elemento={elemento}
                                            key={elemento.id}
                                        />
                                    );
                                })}
                            </>
                        )}
                        {/* 
                        <Card cardServico />
                        <Card cardServico />
                        <Card cardServico />
                        <Card cardServico />
                        <Card cardServico /> */}
                    </ConteListCriarService>
                </ConteMain>
            )}
        </>
    );
};
