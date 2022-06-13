import { useState } from "react";
import { createContext } from "react";
import apiTcc from "../../APIs/TCC-STA";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
    const [usersInfo, setUsersInfo] = useState([]);
    const [clientesInfo, setClientesInfo] = useState([]);

    const [enderecoInfo, setEnderecoInfo] = useState([]);

    const funcUserInfo = (id, type) => {
        if (id) {
            if (type == "cliente") {
                apiTcc
                    .get(`/clientes/${id}`)
                    .then((response) => {
                        setUsersInfo(response.data);
                        setClientesInfo(response.data);
                        setEnderecoInfo(response.data.endereco);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
            if (type == "tecnico") {
                apiTcc
                    .get(`/tecnicos/${id}`)
                    .then((response) => {
                        setUsersInfo(response.data);
                        setClientesInfo(response.data.cliente);
                        apiTcc
                            .get(`/clientes/${response.data.cliente.id}`)
                            .then((response) => {
                                setEnderecoInfo(response.data.endereco);
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        }
    };

    return (
        <UsuarioContext.Provider
            value={{ usersInfo, clientesInfo, enderecoInfo, funcUserInfo }}
        >
            {children}
        </UsuarioContext.Provider>
    );
};
