import { useContext } from "react";
import { DropMenuContext } from "../../Providers/DropMenu";
import { LoginContext } from "../../Providers/Login";
import { MenuHamburgerContext } from "../../Providers/MenuHamburger";
import { RoutesContext } from "../../Providers/Routes";
import { Button } from "../Buttons";
import { Divisao } from "../Divisao";
import {
    ConteClose,
    ConteMenu,
    ConteMenuCliente,
    DivClose,
    DropMenu,
    InfoUser,
} from "./styled";
import UserImg from "./user.svg";

export const Menu = ({ index, cliente, tecnico }) => {
    const id = window.localStorage.getItem("@TCC/ID");

    const { openMenuHamb, openMenuFunc } = useContext(MenuHamburgerContext);
    const {
        openDropServico,
        funcDropServico,
        openDropPerfil,
        funcDropPerfil,
        openDropConfig,
        funcDropConfig,
        FuncCloseAll,
    } = useContext(DropMenuContext);

    const { userInfo } = useContext(LoginContext);

    const {
        returnLogin,
        returnCadastro,
        returnHome,
        returnSolicitacao,
        returnPerfil,
        returnLogout,
    } = useContext(RoutesContext);

    return (
        <>
            {index && (
                <ConteMenu>
                    <Button click={returnLogin} menu>
                        Login
                    </Button>
                    <Button click={returnCadastro} menu>
                        Cadastre-se
                    </Button>
                </ConteMenu>
            )}
            {cliente && userInfo.name && (
                <ConteMenuCliente>
                    <ConteClose>
                        <Button click={openMenuFunc} close></Button>
                        <InfoUser>
                            <div>
                                <img src={UserImg} alt="Name user" />
                            </div>
                            <h1>Name User</h1>
                        </InfoUser>

                        <Divisao menu />
                        <DivClose>
                            <section>
                                <Button
                                    click={() => {
                                        returnHome(id, "cliente");
                                        FuncCloseAll();
                                        openMenuFunc();
                                    }}
                                    menuH
                                >
                                    Home
                                </Button>
                            </section>
                            <section>
                                <Button click={funcDropServico} menuH>
                                    Serviço
                                </Button>
                                {openDropServico && (
                                    <DropMenu>
                                        <Button
                                            click={() => {
                                                returnSolicitacao(
                                                    id,
                                                    "cliente"
                                                );
                                                FuncCloseAll();
                                                openMenuFunc();
                                            }}
                                            dropMenu
                                        >
                                            Solicitaçôes
                                        </Button>
                                    </DropMenu>
                                )}
                            </section>
                            <section>
                                <Button click={funcDropConfig} menuH>
                                    Configuração
                                </Button>
                                {openDropConfig && (
                                    <DropMenu>
                                        <Button dropMenu>Virar Técnico</Button>
                                        <Button dropMenu>Editar Dados</Button>
                                    </DropMenu>
                                )}
                            </section>
                            <section>
                                <Button click={funcDropPerfil} menuH>
                                    Perfil
                                </Button>
                                {openDropPerfil && (
                                    <DropMenu>
                                        <Button
                                            click={() => {
                                                returnPerfil(id, "cliente");
                                                FuncCloseAll();
                                                openMenuFunc();
                                            }}
                                            dropMenu
                                        >
                                            Alterar
                                        </Button>
                                    </DropMenu>
                                )}
                            </section>
                        </DivClose>
                    </ConteClose>
                    <div>
                        <Button
                            click={() => {
                                returnLogout();
                                FuncCloseAll();
                                openMenuFunc();
                            }}
                            menuH
                        >
                            Logout
                        </Button>
                    </div>
                </ConteMenuCliente>
            )}

            {tecnico && userInfo.cliente && (
                <ConteMenuCliente>
                    <ConteClose>
                        <Button click={openMenuFunc} close></Button>
                        <InfoUser>
                            <div>
                                <img src={UserImg} alt="Name user" />
                            </div>
                            <h1>{userInfo.cliente.name}</h1>
                        </InfoUser>

                        <Divisao menu />
                        <DivClose>
                            <section>
                                <Button
                                    click={() => {
                                        returnHome(id, "tecnico");
                                        FuncCloseAll();
                                        openMenuFunc();
                                    }}
                                    menuH
                                >
                                    Home
                                </Button>
                            </section>
                            <section>
                                <Button click={funcDropServico} menuH>
                                    Serviço
                                </Button>
                                {openDropServico && (
                                    <DropMenu>
                                        <Button
                                            click={() => {
                                                /* 
                                                returnSolicitacao(
                                                    id,
                                                    "tecnico"
                                                ); */
                                                FuncCloseAll();
                                                openMenuFunc();
                                            }}
                                            dropMenu
                                        >
                                            Criar
                                        </Button>
                                        <Button
                                            click={() => {
                                                returnSolicitacao(
                                                    id,
                                                    "tecnico"
                                                );
                                                FuncCloseAll();
                                                openMenuFunc();
                                            }}
                                            dropMenu
                                        >
                                            Solicitaçôes
                                        </Button>
                                    </DropMenu>
                                )}
                            </section>
                            <section>
                                <Button click={funcDropConfig} menuH>
                                    Configuração
                                </Button>
                                {openDropConfig && (
                                    <DropMenu>
                                        <Button dropMenu>Virar Técnico</Button>
                                        <Button dropMenu>Editar Dados</Button>
                                    </DropMenu>
                                )}
                            </section>
                            <section>
                                <Button click={funcDropPerfil} menuH>
                                    Perfil
                                </Button>
                                {openDropPerfil && (
                                    <DropMenu>
                                        <Button
                                            click={() => {
                                                returnPerfil(id, "tecnico");
                                                FuncCloseAll();
                                                openMenuFunc();
                                            }}
                                            dropMenu
                                        >
                                            Alterar
                                        </Button>
                                    </DropMenu>
                                )}
                            </section>
                        </DivClose>
                    </ConteClose>
                    <div>
                        <Button
                            click={() => {
                                returnLogout();
                                FuncCloseAll();
                                openMenuFunc();
                            }}
                            menuH
                        >
                            Logout
                        </Button>
                    </div>
                </ConteMenuCliente>
            )}
        </>
    );
};
