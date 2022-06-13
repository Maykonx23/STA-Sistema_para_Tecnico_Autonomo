import { createContext, useContext, useState } from "react";

export const MenuHamburgerContext = createContext();

export const MenuHamburgerProvider = ({ children }) => {
    const [openMenuHamb, setOpenMenuHamb] = useState(false);
    const openMenuFunc = () => {
        if (openMenuHamb) {
            setOpenMenuHamb(false);
        } else {
            setOpenMenuHamb(true);
        }
    };

    return (
        <MenuHamburgerContext.Provider
            value={{ openMenuHamb, setOpenMenuHamb, openMenuFunc }}
        >
            {children}
        </MenuHamburgerContext.Provider>
    );
};
