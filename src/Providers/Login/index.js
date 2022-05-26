import { createContext, useContext } from "react";
import apiTcc from "../../APIs/TCC-STA";
import { RoutesContext } from "../Routes";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const { returnCliente } = useContext(RoutesContext);

    const logar = (data) => {
        apiTcc
            .post("/sessions", data)
            .then((response) => {
                window.localStorage.clear(); // eslint-disable-line
                window.localStorage.setItem("@TCC/Token", response.data.token); // eslint-disable-line
                /* 
                setToken(response.data.token); */

                if (response.data.cliente.nivel === "cliente") {
                    window.localStorage.setItem(
                        "@TCC/ID",
                        response.data.cliente.id
                    );
                    returnCliente(response.data.cliente.id);
                }

                if (response.data.cliente.nivel === "tecnico") {
                    apiTcc
                        .get(`/tecnicos/clientes/${response.data.cliente.id}`)
                        .then((res) => {
                            window.localStorage.setItem(
                                "@TCC/ID",
                                res.data[0].id
                            );
                            /* 
                            history.push(`/tecnico/${res.data[0].id}`); */
                        })
                        .catch((err) => console.log(err)); // eslint-disable-line
                }
            })
            .catch((err) => console.log(err)); // eslint-disable-line
    };
    return (
        <LoginContext.Provider value={{ logar }}>
            {children}
        </LoginContext.Provider>
    );
};
