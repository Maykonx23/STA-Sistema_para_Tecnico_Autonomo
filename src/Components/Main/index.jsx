import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { ServicoContext } from "../../Providers/CriarServico";
import { DropMenuContext } from "../../Providers/DropMenu";
import { ListServicosContext } from "../../Providers/ListServicos";
import { LoginContext } from "../../Providers/Login";
import { MenuHamburgerContext } from "../../Providers/MenuHamburger";
import { RoutesContext } from "../../Providers/Routes";
import { SolicitacaoServicoContext } from "../../Providers/SolicitacaoServico";
import { Button } from "../Buttons";
import { Card } from "../Cards";
import { Divisao } from "../Divisao";
import { Input } from "../Inputs";
import { Label } from "../Label";
import {
    ConteFormTec,
    ConteInfoDescricao,
    ConteInfoTec,
    ConteListCriarService,
    ConteListServico,
    ConteMain,
    ConteMainSolicitacaoServico,
    ContePerfil,
    ContePerfilSolicitacaoTec,
    ConteSolicitacaoServico,
    ConteStatus,
    DivImg,
    DivInfo,
    InfoServico,
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
    tecnico,
    solicitacaoServico,
}) => {
    const param = useParams();
    const id = window.localStorage.getItem("@TCC/ID"); // eslint-disable-line
    const { register, handleSubmit } = useForm();
    const { openMenuHamb, setOpenMenuHamb } = useContext(MenuHamburgerContext);
    const { servicosGerais, listServico } = useContext(ListServicosContext);

    const { returnLogin } = useContext(RoutesContext);

    const { userInfo, clienteInfo } = useContext(LoginContext);
    const { servicosCriados } = useContext(ServicoContext);
    const {
        funcInfoSolicitacaoServico,
        solicitacaoServicoInfo,
        servicoInfo,
        tecnicoInfo,
        funcInfoServico,
        idServico,
        funcSolicitacaoTec,
    } = useContext(SolicitacaoServicoContext);

    useEffect(() => {
        listServico();
        funcInfoSolicitacaoServico(id, "tecnico");
        funcInfoServico(param.idSer);
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

    const onSubmitSoliTec = (data) => {
        data.avaliacao = 0;
        funcSolicitacaoTec(data, returnLogin);
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
                    <ContePerfilSolicitacaoTec>
                        <h1>Solicitação Para Virar Tecnico</h1>
                        <p>
                            Preencha o Formulario a baixo para realizar sua
                            Solicitação.
                        </p>

                        <ConteFormTec onSubmit={handleSubmit(onSubmitSoliTec)}>
                            <div>
                                <Label solitacaoTec>Descrição</Label>
                                <textarea
                                    name="descricao"
                                    {...register("descricao")}
                                    rows="12"
                                    cols="100"
                                ></textarea>
                            </div>

                            <Button solicitarTec>Enviar</Button>
                        </ConteFormTec>
                    </ContePerfilSolicitacaoTec>
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

            {solicitacaoID && tecnico && (
                <>
                    {servicoInfo.length != 0 && tecnicoInfo.length != 0 && (
                        <ConteMainSolicitacaoServico
                            onClick={() => {
                                openMenu();
                            }}
                        >
                            <ConteSolicitacaoServico>
                                {servicoInfo.status == "Encerrado" ? (
                                    <ConteStatus color="red">
                                        Encerrado
                                    </ConteStatus>
                                ) : (
                                    <>
                                        {servicoInfo.status == "Processando" ? (
                                            <ConteStatus color="yellow">
                                                Processando
                                            </ConteStatus>
                                        ) : (
                                            <>
                                                {servicoInfo.status ==
                                                    "Concluido" && (
                                                    <ConteStatus color="green">
                                                        Concluido
                                                    </ConteStatus>
                                                )}
                                            </>
                                        )}
                                    </>
                                )}
                                <InfoServico>
                                    <h1>{servicoInfo.servicos.titulo}</h1>
                                </InfoServico>
                                <ConteInfoTec>
                                    <p>
                                        Técnico:
                                        <span>{tecnicoInfo.cliente.name}</span>
                                    </p>
                                </ConteInfoTec>
                                <ConteInfoDescricao>
                                    {servicoInfo.servicos.descricao}
                                </ConteInfoDescricao>
                                <h3>Chat</h3>
                                <Divisao menu />
                                <div>
                                    <div>
                                        <h2>Maykon</h2>
                                        <p>Texto</p>
                                    </div>
                                </div>
                                <Divisao menu />
                                <form>
                                    <textarea
                                        name=""
                                        id=""
                                        cols="100"
                                        rows="10"
                                    ></textarea>
                                    <Button>Enviar</Button>
                                </form>
                            </ConteSolicitacaoServico>
                        </ConteMainSolicitacaoServico>
                    )}
                </>
            )}

            {solicitacaoServico && (
                <ConteMain
                    onClick={() => {
                        openMenu();
                    }}
                >
                    <ConteListServico>
                        <Card listCabecalhoSolicitacao />
                        {solicitacaoServicoInfo.length != 0 && (
                            <>
                                {solicitacaoServicoInfo.map((elemento) => {
                                    return (
                                        <Card
                                            elemento={elemento}
                                            key={elemento.id}
                                            listSolicitacaoServicoTecnico
                                        />
                                    );
                                })}
                            </>
                        )}
                    </ConteListServico>
                </ConteMain>
            )}
        </>
    );
};
