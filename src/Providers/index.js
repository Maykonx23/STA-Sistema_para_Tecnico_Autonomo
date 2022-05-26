import { CadastroProvider } from "./Cadastrar";
import { DropFilterProvider } from "./DropFiltro";
import { DropHomeProvider } from "./DropMenu";
import { LoginProvider } from "./Login";
import { MenuHamburgerProvider } from "./MenuHamburger";
import { RoutesProvider } from "./Routes";

export const Providers = ({ children }) => {
    return (
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
    );
};
