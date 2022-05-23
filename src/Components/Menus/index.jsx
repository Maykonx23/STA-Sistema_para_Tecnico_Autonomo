import { useContext } from "react";
import { DropMenuContext } from "../../Providers/DropMenu";
import { MenuHamburgerContext } from "../../Providers/MenuHamburger";
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

export const Menu = ({ index, cliente }) => {
    const { openMenuHamb, openMenuFunc } = useContext(MenuHamburgerContext);
    const {
        openDropServico,
        funcDropServico,
        openDropPerfil,
        funcDropPerfil,
        openDropConfig,
        funcDropConfig,
    } = useContext(DropMenuContext);

    return (
        <>
            {index && (
                <ConteMenu>
                    <Button menu>Login</Button>
                    <Button menu>Cadastre-se</Button>
                </ConteMenu>
            )}
            {cliente && (
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
                                <Button menuH>Home</Button>
                            </section>
                            <section>
                                <Button click={funcDropServico} menuH>
                                    Serviço
                                </Button>
                                {openDropServico && (
                                    <DropMenu>
                                        <Button dropMenu>Solicitaçôes</Button>
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
                                        <Button dropMenu>Alterar</Button>
                                    </DropMenu>
                                )}
                            </section>
                        </DivClose>
                    </ConteClose>
                    <div>
                        <Button menuH>Logout</Button>
                    </div>
                </ConteMenuCliente>
            )}
        </>
    );
};
