import { CadastroProvider } from "./Cadastrar";
import { DropFilterProvider } from "./DropFiltro";
import { DropHomeContext, DropHomeProvider } from "./DropMenu";
import { MenuHamburgerProvider } from "./MenuHamburger";

export const Providers = ({ children }) => {
    return (
        <DropFilterProvider>
            <DropHomeProvider>
                <MenuHamburgerProvider>
                    <CadastroProvider>{children}</CadastroProvider>
                </MenuHamburgerProvider>
            </DropHomeProvider>
        </DropFilterProvider>
    );
};
