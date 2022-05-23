import { useContext } from "react";
import { Header } from "../../Components/Header";
import { Main } from "../../Components/Main";
import { MenuHamburgerContext } from "../../Providers/MenuHamburger";

export const Cliente = () => {
    const { openMenuHamb, setOpenMenuHamb } = useContext(MenuHamburgerContext);

    const closeMenu = () => {
        setOpenMenuHamb(false);
    };
    return (
        <>
            <Header cliente />
            <Main home />
            {/* 
            <div onClick={closeMenu}></div> */}
        </>
    );
};
