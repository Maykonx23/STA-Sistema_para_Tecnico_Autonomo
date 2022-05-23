import { createContext, useState } from "react";

export const DropFilterContext = createContext();

export const DropFilterProvider = ({ children }) => {
    const [openDropServico, setOpenDropServico] = useState(false);
    const [openDropDescription, setOpenDropDescription] = useState(false);
    const [openDropPreco, setOpenDropPreco] = useState(false);

    const dropServico = () => {
        if (openDropServico) {
            setOpenDropServico(false);
        } else {
            setOpenDropServico(true);
            setOpenDropDescription(false);
            setOpenDropPreco(false);
        }
    };

    const dropDescription = () => {
        if (openDropDescription) {
            setOpenDropDescription(false);
        } else {
            setOpenDropDescription(true);
            setOpenDropServico(false);
            setOpenDropPreco(false);
        }
    };

    const dropPreco = () => {
        if (openDropPreco) {
            setOpenDropPreco(false);
        } else {
            setOpenDropPreco(true);
            setOpenDropServico(false);
            setOpenDropDescription(false);
        }
    };

    return (
        <DropFilterContext.Provider
            value={{
                openDropServico,
                openDropDescription,
                openDropPreco,
                dropServico,
                dropDescription,
                dropPreco,
            }}
        >
            {children}
        </DropFilterContext.Provider>
    );
};
