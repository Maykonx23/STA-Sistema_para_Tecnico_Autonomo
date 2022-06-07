import { CadastroProvider } from "./Cadastrar";
import { ServicoProvider } from "./CriarServico";
import { DropFilterProvider } from "./DropFiltro";
import { DropHomeProvider } from "./DropMenu";
import { ListServicosProvider } from "./ListServicos";
import { LoginProvider } from "./Login";
import { MenuHamburgerProvider } from "./MenuHamburger";
import { RoutesProvider } from "./Routes";

export const Providers = ({ children }) => {
    return (
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
    );
};
