import { CadastroProvider } from "./Cadastrar";
import { ChatProvider } from "./Chat";
import { ServicoProvider } from "./CriarServico";
import { DropFilterProvider } from "./DropFiltro";
import { DropHomeProvider } from "./DropMenu";
import { EditarUserProvider } from "./Editar User";
import { ListServicosProvider } from "./ListServicos";
import { LoginProvider } from "./Login";
import { MenuHamburgerProvider } from "./MenuHamburger";
import { RoutesProvider } from "./Routes";
import { SolicitacaoServicoProvider } from "./SolicitacaoServico";
import { UsuarioProvider } from "./Usuario";

export const Providers = ({ children }) => {
    return (
        <EditarUserProvider>
            <UsuarioProvider>
                <ChatProvider>
                    <SolicitacaoServicoProvider>
                        <ServicoProvider>
                            <ListServicosProvider>
                                <RoutesProvider>
                                    <DropFilterProvider>
                                        <DropHomeProvider>
                                            <MenuHamburgerProvider>
                                                <LoginProvider>
                                                    <CadastroProvider>
                                                        {children}
                                                    </CadastroProvider>
                                                </LoginProvider>
                                            </MenuHamburgerProvider>
                                        </DropHomeProvider>
                                    </DropFilterProvider>
                                </RoutesProvider>
                            </ListServicosProvider>
                        </ServicoProvider>
                    </SolicitacaoServicoProvider>
                </ChatProvider>
            </UsuarioProvider>
        </EditarUserProvider>
    );
};
