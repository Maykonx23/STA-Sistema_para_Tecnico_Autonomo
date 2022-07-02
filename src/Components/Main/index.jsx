import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { ChatContext } from "../../Providers/Chat";
import { ServicoContext } from "../../Providers/CriarServico";
import { DropMenuContext } from "../../Providers/DropMenu";
import { EditarUserContext } from "../../Providers/Editar User";
import { ListServicosContext } from "../../Providers/ListServicos";
import { LoginContext } from "../../Providers/Login";
import { MenuHamburgerContext } from "../../Providers/MenuHamburger";
import { RoutesContext } from "../../Providers/Routes";
import { SolicitacaoServicoContext } from "../../Providers/SolicitacaoServico";
import { UsuarioContext } from "../../Providers/Usuario";
import { Button } from "../Buttons";
import { Card } from "../Cards";
import { Divisao } from "../Divisao";
import { Input } from "../Inputs";
import { Label } from "../Label";
import {
    ChatStatus,
    ConteBtnSolicitacao,
    ConteBtnSolicitacaoVoltar,
    ConteChat,
    ConteFormChat,
    ConteFormTec,
    ConteInfoDescricao,
    ConteInfoPrecoHora,
    ConteInfoTec,
    ConteListCriarService,
    ConteListServico,
    ConteMain,
    ConteMainSolicitacaoServico,
    ConteMensage,
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
    homeTecnico,
    solicitacaoIDCliente,
    solicitacaoServicoTec,
}) => {
    const param = useParams();
    const id = window.localStorage.getItem("@TCC/ID"); // eslint-disable-line
    const typeInfo = window.localStorage.getItem("@TCC/Type"); // eslint-disable-line

    const { register, handleSubmit } = useForm();
    const { openMenuHamb, setOpenMenuHamb } = useContext(MenuHamburgerContext);
    const { servicosGerais, listServico } = useContext(ListServicosContext);
    const [text, setText] = useState("");

    const {
        funcInfoUser,
        usuarioInfo,
        chatInfo,
        funcListChat,
        funcChatEnviar,
    } = useContext(ChatContext);

    const { returnSolicitacao } = useContext(RoutesContext);

    const { returnLogin } = useContext(RoutesContext);

    const { funcAtualizaçãoPerfil } = useContext(EditarUserContext);

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
        funcAlterarSolicitacaoServico,
    } = useContext(SolicitacaoServicoContext);

    const { funcUserInfo, usersInfo, clientesInfo, enderecoInfo } =
        useContext(UsuarioContext);

    if (typeInfo == "tecnico") {
        useEffect(() => {
            funcInfoServico(param.idSer);
            funcInfoUser(id, "tecnico");
            funcUserInfo(id, "tecnico");
        }, []);
        useEffect(() => {
            funcListChat(param.idSer);
        }, [funcListChat]);
        useEffect(() => {
            funcInfoSolicitacaoServico(id, "tecnico");
        }, [funcInfoSolicitacaoServico]);
        useEffect(() => {
            listServico();
        }, [listServico]);
    }

    if (typeInfo == "cliente") {
        useEffect(() => {
            funcInfoServico(param.idSer);
            funcInfoUser(id, "cliente");
            funcUserInfo(id, "cliente");
        }, []);
        useEffect(() => {
            funcListChat(param.idSer);
        }, [funcListChat]);
        useEffect(() => {
            funcInfoSolicitacaoServico(id, "cliente");
        }, [funcInfoSolicitacaoServico]);
        useEffect(() => {
            listServico();
        }, [listServico]);
    }

    const {
        setOpenDropHome,
        setOpenDropServico,
        setOpenDropConfig,
        setOpenDropPerfil,
    } = useContext(DropMenuContext);

    const { returnPerfil } = useContext(RoutesContext);

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

    const onSubmitMensagem = (data) => {
        data.solicitacaoServico_id = param.idSer;
        data.type = typeInfo;
        funcChatEnviar(data, typeInfo);
        setText("");
    };

    const funcText = (e) => {
        setText(e.target.value);
    };

    const onFuncAtua = (data) => {
        const dataInfo = [{ cpf: "", email: "", name: "", telefone: "" }];
        const dataEnd = [
            {
                cep: "",
                bairro: "",
                cidade: "",
                complemento: "",
                numero: "",
                rua: "",
                uf: "",
            },
        ];

        dataEnd[0].cep = data.cep;
        dataEnd[0].bairro = data.bairro;
        dataEnd[0].cidade = data.cidade;
        dataEnd[0].complemento = data.complemento;
        dataEnd[0].numero = data.numero;
        dataEnd[0].rua = data.rua;
        dataEnd[0].uf = data.uf;

        dataInfo[0].cpf = data.cpf;
        dataInfo[0].email = data.email;
        dataInfo[0].name = data.name;
        dataInfo[0].telefone = data.telefone;

        if (dataInfo[0].name == "") {
            delete dataInfo[0].name;
        }
        if (dataInfo[0].cpf == "") {
            delete dataInfo[0].cpf;
        }
        if (dataInfo[0].email == "") {
            delete dataInfo[0].email;
        }
        if (dataInfo[0].telefone == "") {
            delete dataInfo[0].telefone;
        }

        if (dataEnd[0].bairro == "") {
            delete dataEnd[0].bairro;
        }
        if (dataEnd[0].cep == "") {
            delete dataEnd[0].cep;
        }
        if (dataEnd[0].cidade == "") {
            delete dataEnd[0].cidade;
        }
        if (dataEnd[0].complemento == "") {
            delete dataEnd[0].complemento;
        }
        if (dataEnd[0].numero == "") {
            delete dataEnd[0].numero;
        }
        if (dataEnd[0].rua == "") {
            delete dataEnd[0].rua;
        }
        if (dataEnd[0].uf == "") {
            delete dataEnd[0].uf;
        }

        funcAtualizaçãoPerfil(
            dataInfo,
            dataEnd,
            enderecoInfo.id,
            clientesInfo.id
        );
    };

    const eventoConcluir = (e) => {
        funcAlterarSolicitacaoServico(e.target.id, "concluido");
        returnSolicitacao(id, typeInfo);
    };

    const eventoCancelado = (e) => {
        funcAlterarSolicitacaoServico(e.target.id, "cancelado");
        returnSolicitacao(id, typeInfo);
    };

    const eventoAceitar = (e) => {
        funcAlterarSolicitacaoServico(e.target.id, "aceitar");
        returnSolicitacao(id, typeInfo);
    };

    return (
        <>
            {home && usersInfo.length != 0 && (
                <ConteMain>
                    <h1>
                        Bem vindo <span>{usersInfo.name}</span>.
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
                            <div>LISTA VAZIA</div>
                        )}
                    </ConteListServico>
                </ConteMain>
            )}

            {homeTecnico && usersInfo.length != 0 && (
                <ConteMain onClick={() => openMenu()}>
                    <h1>
                        Bem vindo <span>{usersInfo.cliente.name}</span>.
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
                            <div>LISTA VAZIA</div>
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

            {solicitacaoIDCliente && (
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
                                <ConteInfoPrecoHora>
                                    <h3>
                                        <p>Preço: </p>
                                        {servicoInfo.servicos.price}
                                    </h3>
                                    <h3>
                                        <p>Tempo de Serviço: </p>
                                        {servicoInfo.servicos.mediaTempo}
                                    </h3>
                                </ConteInfoPrecoHora>
                                <h3>Chat</h3>
                                <Divisao menu />
                                <ConteChat>
                                    {chatInfo.length != 0 ? (
                                        <>
                                            {chatInfo.map((elemento, index) => {
                                                return (
                                                    <>
                                                        {elemento.type ==
                                                        "cliente" ? (
                                                            <ConteMensage
                                                                color="branco"
                                                                key={
                                                                    elemento.id
                                                                }
                                                            >
                                                                <h2>
                                                                    {
                                                                        elemento.name
                                                                    }{" "}
                                                                    -{" "}
                                                                    {elemento.type
                                                                        .toUpperCase()
                                                                        .substr(
                                                                            0,
                                                                            1
                                                                        )}
                                                                    {elemento.type.substr(
                                                                        1
                                                                    )}
                                                                </h2>
                                                                <p>
                                                                    {
                                                                        elemento.descricao
                                                                    }
                                                                </p>
                                                            </ConteMensage>
                                                        ) : (
                                                            <ConteMensage
                                                                color="verde"
                                                                key={
                                                                    elemento.id
                                                                }
                                                            >
                                                                <h2>
                                                                    {
                                                                        elemento.name
                                                                    }{" "}
                                                                    -{" "}
                                                                    {elemento.type
                                                                        .toUpperCase()
                                                                        .substr(
                                                                            0,
                                                                            1
                                                                        )}
                                                                    {elemento.type.substr(
                                                                        1
                                                                    )}
                                                                </h2>
                                                                <p>
                                                                    {
                                                                        elemento.descricao
                                                                    }
                                                                </p>
                                                            </ConteMensage>
                                                        )}
                                                    </>
                                                );
                                            })}
                                        </>
                                    ) : (
                                        <ChatStatus>SEM MENSAGENS</ChatStatus>
                                    )}
                                </ConteChat>
                                <Divisao menu />
                                {servicoInfo.status != "Concluido" ? (
                                    <>
                                        {servicoInfo.status != "Cancelado" ? (
                                            <>
                                                <ConteFormChat
                                                    onSubmit={handleSubmit(
                                                        onSubmitMensagem
                                                    )}
                                                >
                                                    <textarea
                                                        onChangeCapture={
                                                            funcText
                                                        }
                                                        value={text}
                                                        name="descricao"
                                                        id=""
                                                        {...register(
                                                            "descricao"
                                                        )}
                                                        cols="100"
                                                        rows="10"
                                                    ></textarea>
                                                    <Button
                                                        type="submit"
                                                        enviarMensagem
                                                    >
                                                        Enviar
                                                    </Button>
                                                </ConteFormChat>
                                                {servicoInfo.status ==
                                                    "Aguardando" && (
                                                    <>
                                                        <ConteBtnSolicitacao>
                                                            <h2>
                                                                Aceitar
                                                                Orçamento?
                                                            </h2>
                                                            <div>
                                                                <Button
                                                                    click={
                                                                        eventoCancelado
                                                                    }
                                                                    id={
                                                                        servicoInfo.id
                                                                    }
                                                                    cancelar
                                                                >
                                                                    Cancelar
                                                                </Button>
                                                                <Button
                                                                    click={
                                                                        eventoAceitar
                                                                    }
                                                                    id={
                                                                        servicoInfo.id
                                                                    }
                                                                    concluir
                                                                >
                                                                    Aceitar
                                                                </Button>
                                                            </div>
                                                        </ConteBtnSolicitacao>
                                                        <ConteBtnSolicitacaoVoltar>
                                                            <Button
                                                                click={() => {
                                                                    returnSolicitacao(
                                                                        id,
                                                                        typeInfo
                                                                    );
                                                                }}
                                                                enviarMensagem
                                                            >
                                                                Voltar
                                                            </Button>
                                                        </ConteBtnSolicitacaoVoltar>
                                                    </>
                                                )}
                                            </>
                                        ) : (
                                            <ConteBtnSolicitacao>
                                                <Button
                                                    click={() => {
                                                        returnSolicitacao(
                                                            id,
                                                            typeInfo
                                                        );
                                                    }}
                                                    enviarMensagem
                                                >
                                                    Voltar
                                                </Button>
                                            </ConteBtnSolicitacao>
                                        )}
                                    </>
                                ) : (
                                    <ConteBtnSolicitacao>
                                        <Button
                                            click={() => {
                                                returnSolicitacao(id, typeInfo);
                                            }}
                                            enviarMensagem
                                        >
                                            Voltar
                                        </Button>
                                    </ConteBtnSolicitacao>
                                )}
                            </ConteSolicitacaoServico>
                        </ConteMainSolicitacaoServico>
                    )}
                </>
            )}

            {perfil && usersInfo.length != 0 && (
                <ConteMain onClick={openMenu}>
                    <ContePerfil>
                        <DivImg>
                            <div>
                                <img src={User} alt="" />
                            </div>
                        </DivImg>
                        <DivInfo onSubmit={handleSubmit(onFuncAtua)}>
                            <Label perfil>Nome</Label>
                            <Input register={register} name="name" info>
                                {usersInfo.name}
                            </Input>
                            <Label perfil>Email</Label>
                            <Input register={register} name="email" info>
                                {usersInfo.email}
                            </Input>
                            <Label perfil>CPF</Label>
                            <Input register={register} name="cpf" info>
                                {usersInfo.cpf}
                            </Input>
                            <Label perfil>Telefone</Label>
                            <Input register={register} name="telefone" info>
                                {usersInfo.telefone}
                            </Input>
                            <Label perfil>CEP</Label>
                            <Input register={register} name="cep" info>
                                {enderecoInfo.cep}
                            </Input>
                            <Label perfil>UF</Label>
                            <Input register={register} name="uf" info>
                                {enderecoInfo.uf}
                            </Input>
                            <Label perfil>Cidade</Label>
                            <Input register={register} name="cidade" info>
                                {enderecoInfo.cidade}
                            </Input>
                            <Label perfil>Bairro</Label>
                            <Input register={register} name="bairro" info>
                                {enderecoInfo.bairro}
                            </Input>
                            <Label perfil>Rua</Label>
                            <Input register={register} name="rua" info>
                                {enderecoInfo.rua}
                            </Input>
                            <Label perfil>Numero</Label>
                            <Input register={register} name="numero" info>
                                {enderecoInfo.numero}
                            </Input>
                            <Label perfil>Complemento</Label>
                            <Input register={register} name="complemento" info>
                                {enderecoInfo.complemento}
                            </Input>
                            <Button type="submit" edit>
                                Salvar
                            </Button>
                        </DivInfo>
                    </ContePerfil>
                </ConteMain>
            )}

            {perfilTec && usersInfo.length != 0 && (
                <ConteMain onClick={openMenu}>
                    <ContePerfil>
                        <DivImg>
                            <div>
                                <img src={User} alt="" />
                            </div>
                        </DivImg>
                        <DivInfo onSubmit={handleSubmit(onFuncAtua)}>
                            <Label perfil>Nome</Label>
                            <Input register={register} name="name" info>
                                {usersInfo.cliente.name}
                            </Input>
                            <Label perfil>Email</Label>
                            <Input register={register} name="email" info>
                                {usersInfo.cliente.email}
                            </Input>
                            <Label perfil>CPF</Label>
                            <Input register={register} name="cpf" info>
                                {usersInfo.cliente.cpf}
                            </Input>
                            <Label perfil>Telefone</Label>
                            <Input register={register} name="telefone" info>
                                {usersInfo.cliente.telefone}
                            </Input>
                            <Label perfil>CEP</Label>
                            <Input register={register} name="cep" info>
                                {enderecoInfo.cep}
                            </Input>
                            <Label perfil>UF</Label>
                            <Input register={register} name="uf" info>
                                {enderecoInfo.uf}
                            </Input>
                            <Label perfil>Cidade</Label>
                            <Input register={register} name="cidade" info>
                                {enderecoInfo.cidade}
                            </Input>
                            <Label perfil>Bairro</Label>
                            <Input register={register} name="bairro" info>
                                {enderecoInfo.bairro}
                            </Input>
                            <Label perfil>Rua</Label>
                            <Input register={register} name="rua" info>
                                {enderecoInfo.rua}
                            </Input>
                            <Label perfil>Numero</Label>
                            <Input register={register} name="numero" info>
                                {enderecoInfo.numero}
                            </Input>
                            <Label perfil>Complemento</Label>
                            <Input register={register} name="complemento" info>
                                {enderecoInfo.complemento}
                            </Input>
                            <Button type="submit" edit>
                                Salvar
                            </Button>
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
                        {servicosCriados.length != 0 ? (
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
                        ) : (
                            <div>LISTA VAZIA</div>
                        )}
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
                                                "Concluido" ? (
                                                    <ConteStatus color="green">
                                                        Concluido
                                                    </ConteStatus>
                                                ) : (
                                                    <>
                                                        {servicoInfo.status ==
                                                            "Cancelado" && (
                                                            <ConteStatus color="red">
                                                                Cancelado
                                                            </ConteStatus>
                                                        )}
                                                    </>
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

                                <ConteInfoPrecoHora>
                                    <h3>
                                        <p>Preço: </p>
                                        {servicoInfo.servicos.price}
                                    </h3>
                                    <h3>
                                        <p>Tempo do Serviço: </p>
                                        {servicoInfo.servicos.mediaTempo}
                                    </h3>
                                </ConteInfoPrecoHora>
                                <h3>Chat</h3>
                                <Divisao menu />
                                <ConteChat>
                                    {chatInfo.length != 0 ? (
                                        <>
                                            {chatInfo.map((elemento) => {
                                                return (
                                                    <>
                                                        {elemento.type ==
                                                        "cliente" ? (
                                                            <ConteMensage
                                                                color="branco"
                                                                key={
                                                                    elemento.id
                                                                }
                                                            >
                                                                <h2>
                                                                    {
                                                                        elemento.name
                                                                    }{" "}
                                                                    -{" "}
                                                                    {elemento.type
                                                                        .toUpperCase()
                                                                        .substr(
                                                                            0,
                                                                            1
                                                                        )}
                                                                    {elemento.type.substr(
                                                                        1
                                                                    )}
                                                                </h2>
                                                                <p>
                                                                    {
                                                                        elemento.descricao
                                                                    }
                                                                </p>
                                                            </ConteMensage>
                                                        ) : (
                                                            <ConteMensage
                                                                color="verde"
                                                                key={
                                                                    elemento.id
                                                                }
                                                            >
                                                                <h2>
                                                                    {
                                                                        elemento.name
                                                                    }{" "}
                                                                    -{" "}
                                                                    {elemento.type
                                                                        .toUpperCase()
                                                                        .substr(
                                                                            0,
                                                                            1
                                                                        )}
                                                                    {elemento.type.substr(
                                                                        1
                                                                    )}
                                                                </h2>
                                                                <p>
                                                                    {
                                                                        elemento.descricao
                                                                    }
                                                                </p>
                                                            </ConteMensage>
                                                        )}
                                                    </>
                                                );
                                            })}
                                        </>
                                    ) : (
                                        <ChatStatus>SEM MENSAGENS</ChatStatus>
                                    )}
                                </ConteChat>
                                <Divisao menu />
                                {servicoInfo.status != "Concluido" ? (
                                    <>
                                        {servicoInfo.status != "Cancelado" ? (
                                            <>
                                                <form
                                                    onSubmit={handleSubmit(
                                                        onSubmitMensagem
                                                    )}
                                                >
                                                    <textarea
                                                        onChangeCapture={
                                                            funcText
                                                        }
                                                        value={text}
                                                        name="descricao"
                                                        id=""
                                                        {...register(
                                                            "descricao"
                                                        )}
                                                        cols="100"
                                                        rows="10"
                                                    ></textarea>
                                                    <Button
                                                        type="submit"
                                                        enviarMensagem
                                                    >
                                                        Enviar
                                                    </Button>
                                                </form>

                                                {servicoInfo.status !=
                                                "Aguardando" ? (
                                                    <>
                                                        <ConteBtnSolicitacao>
                                                            <Button
                                                                click={
                                                                    eventoCancelado
                                                                }
                                                                id={
                                                                    servicoInfo.id
                                                                }
                                                                cancelar
                                                            >
                                                                Cancelar
                                                            </Button>
                                                            <Button
                                                                click={
                                                                    eventoConcluir
                                                                }
                                                                id={
                                                                    servicoInfo.id
                                                                }
                                                                concluir
                                                            >
                                                                Concluir
                                                            </Button>
                                                        </ConteBtnSolicitacao>
                                                    </>
                                                ) : (
                                                    <>
                                                        <ConteBtnSolicitacao>
                                                            <h2>
                                                                Cancelar
                                                                Orçamento?
                                                            </h2>
                                                            <Button
                                                                click={
                                                                    eventoCancelado
                                                                }
                                                                id={
                                                                    servicoInfo.id
                                                                }
                                                                cancelar
                                                            >
                                                                Cancelar
                                                            </Button>
                                                        </ConteBtnSolicitacao>
                                                        <ConteBtnSolicitacaoVoltar>
                                                            <Button
                                                                click={() => {
                                                                    returnSolicitacao(
                                                                        id,
                                                                        typeInfo
                                                                    );
                                                                }}
                                                                enviarMensagem
                                                            >
                                                                Voltar
                                                            </Button>
                                                        </ConteBtnSolicitacaoVoltar>
                                                    </>
                                                )}
                                            </>
                                        ) : (
                                            <ConteBtnSolicitacaoVoltar>
                                                <Button
                                                    click={() => {
                                                        returnSolicitacao(
                                                            id,
                                                            typeInfo
                                                        );
                                                    }}
                                                    enviarMensagem
                                                >
                                                    Voltar
                                                </Button>
                                            </ConteBtnSolicitacaoVoltar>
                                        )}
                                    </>
                                ) : (
                                    <ConteBtnSolicitacao>
                                        <Button
                                            click={() => {
                                                returnSolicitacao(id, typeInfo);
                                            }}
                                            enviarMensagem
                                        >
                                            Voltar
                                        </Button>
                                    </ConteBtnSolicitacao>
                                )}
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
                        {solicitacaoServicoInfo.length != 0 ? (
                            <>
                                {solicitacaoServicoInfo.map((elemento) => {
                                    return (
                                        <Card
                                            elemento={elemento}
                                            key={elemento.id}
                                            listSolicitacaoServicoCliente
                                        />
                                    );
                                })}
                            </>
                        ) : (
                            <div>SEM SOLICITAÇÔES</div>
                        )}
                    </ConteListServico>
                </ConteMain>
            )}

            {solicitacaoServicoTec && (
                <ConteMain
                    onClick={() => {
                        openMenu();
                    }}
                >
                    <ConteListServico>
                        <Card listCabecalhoSolicitacao />
                        {solicitacaoServicoInfo.length != 0 ? (
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
                        ) : (
                            <div>SEM SOLICITAÇÔES</div>
                        )}
                    </ConteListServico>
                </ConteMain>
            )}
        </>
    );
};
