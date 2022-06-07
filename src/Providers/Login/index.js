import { createContext, useContext, useState } from "react";
import apiTcc from "../../APIs/TCC-STA";
import { RoutesContext } from "../Routes";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [typeInfo, setTypeInfo] = useState();
    const [userInfo, setUserInfo] = useState([]);
    const [clienteInfo, setClienteInfo] = useState([]);
    const { returnCliente, returnTecnico } = useContext(RoutesContext);

    const logar = (data) => {
        apiTcc
            .post("/sessions", data)
            .then((response) => {
                window.localStorage.clear(); // eslint-disable-line
                window.localStorage.setItem("@TCC/Token", response.data.token); // eslint-disable-line

                if (response.data.cliente.nivel === "cliente") {
                    setTypeInfo(response.data.cliente.nivel);
                    setUserInfo(response.data.cliente);
                    window.localStorage.setItem(
                        "@TCC/ID",
                        response.data.cliente.id
                    );
                    returnCliente(response.data.cliente.id);
                }

                if (response.data.cliente.nivel === "tecnico") {
                    setClienteInfo(response.data.cliente);
                    setTypeInfo(response.data.cliente.nivel);
                    apiTcc
                        .get(`/tecnicos/clientes/${response.data.cliente.id}`)
                        .then((res) => {
                            setUserInfo(res.data[0]);
                            window.localStorage.setItem(
                                "@TCC/ID",
                                res.data[0].id
                            );

                            returnTecnico(res.data[0].id);
                        })
                        .catch((err) => console.log(err)); // eslint-disable-line
                }
            })
            .catch((err) => console.log(err)); // eslint-disable-line
    };
    return (
        <LoginContext.Provider
            value={{ logar, typeInfo, userInfo, clienteInfo }}
        >
            {children}
        </LoginContext.Provider>
    );
};
