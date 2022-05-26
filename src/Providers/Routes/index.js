import { createContext } from "react";
import { useHistory } from "react-router-dom";

export const RoutesContext = createContext();

export const RoutesProvider = ({ children }) => {
    const history = useHistory();

    const returnLogin = () => {
        history.push("/login");
    };
    const returnCadastro = () => {
        history.push("/register");
    };
    const returnIndex = () => {
        history.push("/");
    };
    const returnCliente = (id) => {
        history.push(`/cliente/${id}`);
    };
    return (
        <RoutesContext.Provider
            value={{ returnLogin, returnCadastro, returnIndex, returnCliente }}
        >
            {children}
        </RoutesContext.Provider>
    );
};
