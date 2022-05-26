import { createContext, useState } from "react";

export const DropMenuContext = createContext();

export const DropHomeProvider = ({ children }) => {
    const [openDropHome, setOpenDropHome] = useState();
    const [openDropServico, setOpenDropServico] = useState();
    const [openDropConfig, setOpenDropConfig] = useState();
    const [openDropPerfil, setOpenDropPerfil] = useState();

    const funcDropServico = () => {
        if (openDropServico) {
            setOpenDropServico(false);
            setOpenDropConfig(false);
        } else {
            setOpenDropServico(true);
            setOpenDropPerfil(false);
            setOpenDropConfig(false);
        }
    };
    const funcDropPerfil = () => {
        if (openDropPerfil) {
            setOpenDropPerfil(false);
        } else {
            setOpenDropPerfil(true);
            setOpenDropServico(false);
            setOpenDropConfig(false);
        }
    };

    const funcDropConfig = () => {
        if (openDropConfig) {
            setOpenDropConfig(false);
        } else {
            setOpenDropConfig(true);
            setOpenDropServico(false);
            setOpenDropPerfil(false);
        }
    };

    const FuncCloseAll = () => {
        setOpenDropPerfil(false);
        setOpenDropConfig(false);
        setOpenDropServico(false);
    };

    return (
        <DropMenuContext.Provider
            value={{
                openDropHome,
                openDropServico,
                funcDropServico,
                openDropConfig,
                funcDropConfig,
                openDropPerfil,
                funcDropPerfil,
                setOpenDropHome,
                setOpenDropServico,
                setOpenDropConfig,
                setOpenDropPerfil,
                FuncCloseAll,
            }}
        >
            {children}
        </DropMenuContext.Provider>
    );
};
