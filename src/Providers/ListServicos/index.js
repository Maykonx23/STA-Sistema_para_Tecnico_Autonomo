import { createContext, useEffect, useState } from "react";
import apiTcc from "../../APIs/TCC-STA";

export const ListServicosContext = createContext();

export const ListServicosProvider = ({ children }) => {
    const [servicosGerais, setServicosGerais] = useState([]);
    const [servico, setServico] = useState([]);
    const [tecnicoServico, setTecnicoServico] = useState([]);

    const listServico = async () => {
        await apiTcc
            .get("/servicos")
            .then((response) => {
                /* 
                console.log(response.data); */
                setServicosGerais(response.data);
            })
            .catch((err) => console.log(err));
    };

    const servicoId = async (e) => {
        await apiTcc
            .get(`/servicos/${e.target.id}`)
            .then((response) => {
                /* 
                console.log(response.data); */
                setServico(response.data);
                apiTcc
                    .get(`/tecnicos/${response.data.tecnico.id}`)
                    .then((response) => {
                        /* 
                        console.log(response.data); */
                        setTecnicoServico(response.data);
                    })
                    .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
    };

    const closeInfoServico = () => {
        setServico([]);
        setTecnicoServico([]);
    };

    return (
        <ListServicosContext.Provider
            value={{
                servicosGerais,
                tecnicoServico,
                servicoId,
                closeInfoServico,
                servico,
                listServico,
            }}
        >
            {children}
        </ListServicosContext.Provider>
    );
};
