import { CadastroProvider } from "./Cadastrar";
import { DropFilterProvider } from "./DropFiltro";
import { DropHomeProvider } from "./DropMenu";
import { ListServicosProvider } from "./ListServicos";
import { LoginProvider } from "./Login";
import { MenuHamburgerProvider } from "./MenuHamburger";
import { RoutesProvider } from "./Routes";

export const Providers = ({ children }) => {
    return (
        <ListServicosProvider>
            <RoutesProvider>
                <DropFilterProvider>
                    <DropHomeProvider>
                        <MenuHamburgerProvider>
                            <LoginProvider>
                                <CadastroProvider>{children}</CadastroProvider>
                            </LoginProvider>
                        </MenuHamburgerProvider>
                    </DropHomeProvider>
                </DropFilterProvider>
            </RoutesProvider>
        </ListServicosProvider>
    );
};
