import { useContext } from "react";
import { MenuHamburgerContext } from "../../Providers/MenuHamburger";
import { Button } from "../Buttons";
import { Logo } from "../Logo";
import { Menu } from "../Menus";
import { ConteHeader, ConteHeaderCliente, ConteHeaderLC } from "./styled";

export const Header = ({ index, login, cadastro, cliente, tecnico, home }) => {
    const { openMenuHamb, openMenuFunc } = useContext(MenuHamburgerContext);

    const limparInfo = () => {
        window.localStorage.clear(); // eslint-disable-line
    };

    return (
        <>
            {index && (
                <ConteHeader
                    onClick={() => {
                        limparInfo();
                    }}
                >
                    <Logo index />
                    <Menu index />
                </ConteHeader>
            )}

            {(login || cadastro) && (
                <ConteHeaderLC
                    onClick={() => {
                        limparInfo();
                    }}
                >
                    <Logo login />
                </ConteHeaderLC>
            )}
            {cliente && (
                <>
                    {openMenuHamb && <Menu cliente />}
                    <ConteHeaderCliente>
                        {!openMenuHamb && (
                            <Button
                                click={() => {
                                    openMenuFunc();
                                }}
                                menuHamburger
                            />
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
                            <Button
                                click={() => {
                                    openMenuFunc();
                                }}
                                menuHamburger
                            />
                        )}
                        <Logo tecnico />
                    </ConteHeaderCliente>
                </>
            )}
        </>
    );
};
