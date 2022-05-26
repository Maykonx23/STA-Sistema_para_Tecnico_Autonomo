import { useContext } from "react";
import { MenuHamburgerContext } from "../../Providers/MenuHamburger";
import { Button } from "../Buttons";
import { Logo } from "../Logo";
import { Menu } from "../Menus";
import { ConteHeader, ConteHeaderCliente, ConteHeaderLC } from "./styled";

export const Header = ({ index, login, cadastro, cliente, tecnico }) => {
    const { openMenuHamb, openMenuFunc } = useContext(MenuHamburgerContext);

    return (
        <>
            {index && (
                <ConteHeader>
                    <Logo index />
                    <Menu index />
                </ConteHeader>
            )}

            {(login || cadastro) && (
                <ConteHeaderLC>
                    <Logo login />
                </ConteHeaderLC>
            )}
            {cliente && (
                <>
                    {openMenuHamb && <Menu cliente />}
                    <ConteHeaderCliente>
                        {!openMenuHamb && (
                            <Button click={openMenuFunc} menuHamburger />
                        )}
                        <Logo cliente />
                    </ConteHeaderCliente>
                </>
            )}
            {tecnico && (
                <>
                    {openMenuHamb && <Menu tecnico />}
                    <ConteHeaderCliente>
                        {!openMenuHamb && (
                            <Button click={openMenuFunc} menuHamburger />
                        )}
                        <Logo cliente />
                    </ConteHeaderCliente>
                </>
            )}
        </>
    );
};
