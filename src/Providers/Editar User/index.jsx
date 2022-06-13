import { createContext } from "react";
import apiTcc from "../../APIs/TCC-STA";

export const EditarUserContext = createContext();

export const EditarUserProvider = ({ children }) => {
    const token = window.localStorage.getItem("@TCC/Token");
    const funcAtualizaçãoPerfil = (
        dataInfo,
        dataEnd,
        idEndereco,
        idCliente
    ) => {
        if (dataInfo[0].length != 0) {
            apiTcc
                .put(`/clientes/${idCliente}`, dataInfo[0], {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((response) => console.log(response.data))
                .catch((err) => console.log(err));
        }

        if (dataEnd[0].length != 0) {
            apiTcc
                .put(`/enderecos/${idEndereco}`, dataEnd[0])
                .then((response) => {
                    return response.data;
                })
                .catch((err) => console.log(err));
        }
    };

    return (
        <EditarUserContext.Provider value={{ funcAtualizaçãoPerfil }}>
            {children}
        </EditarUserContext.Provider>
    );
};
