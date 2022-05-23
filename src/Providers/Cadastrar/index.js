import { createContext } from "react";

export const CadastroContext = createContext();

export const CadastroProvider = ({ children }) => {
    return (
        <CadastroContext.Provider value={{}}>
            {children}
        </CadastroContext.Provider>
    );
};
