import { createContext, useEffect, useState } from "react";
import apiTcc from "../../APIs/TCC-STA";

export const ServicoContext = createContext();

export const ServicoProvider = ({ children }) => {
    const [criarServico, setCriarServico] = useState(false);
    const [excluirServico, setExcluirServico] = useState(false);
    const [editarServico, setEditarServico] = useState(false);
    const [servicosCriados, setServicosCriados] = useState([]);
    const [infoServico, setInfoServico] = useState([]);
    const [idServico, setIdServico] = useState("");

    const CriarServicoFunc = () => {
        if (criarServico == false) {
            setCriarServico(true);
        } else {
            setCriarServico(false);
        }
    };

    const editarServicoFunc = () => {
        if (editarServico) {
            setEditarServico(false);
        } else {
            setEditarServico(true);
        }
    };

    const excluirServicoFunc = () => {
        if (excluirServico === false) {
            setExcluirServico(true);
        } else {
            setExcluirServico(false);
        }
    };

    const excluirFunc = () => {
        if (idServico != "") {
            apiTcc
                .delete(`/servicos/${idServico}`)
                .then((response) => {
                    setIdServico("");
                    setExcluirServico(false);
                    return response;
                })
                .catch((err) => {
                    return err;
                });
        }
    };

    const editarFunc = (data) => {
        if (idServico != "") {
            console.log(idServico);
            apiTcc
                .put(`/servicos/${idServico}`, data)
                .then((response) => {
                    setIdServico("");
                    setEditarServico(false);
                    return response;
                })
                .catch((err) => {
                    setEditarServico(false);
                    return err;
                });
        }
    };
    const listServico = (id) => {
        apiTcc
            .get(`/tecnicos/${id}`)
            .then((res) => {
                setServicosCriados(res.data.servicos);
            })
            .catch((err) => console.log(err)); // eslint-disable-line
    };

    const cadastrarServco = (data) => {
        apiTcc
            .post("/servicos", data)
            .then((response) => {
                setCriarServico(false);
                return response.data;
            })
            .catch((err) => {
                return err;
            });
    };

    const infoServicoFunc = () => {
        apiTcc
            .get(`/servicos/${idServico}`)
            .then((response) => {
                setInfoServico(response.data);
                return response;
            })
            .catch((err) => {
                return err;
            });
    };
    return (
        <ServicoContext.Provider
            value={{
                setCriarServico,
                setExcluirServico,
                setIdServico,
                setEditarServico,
                criarServico,
                servicosCriados,
                excluirServico,
                idServico,
                editarServico,
                infoServico,
                CriarServicoFunc,
                cadastrarServco,
                listServico,
                excluirServicoFunc,
                excluirFunc,
                editarServicoFunc,
                editarFunc,
                infoServicoFunc,
            }}
        >
            {children}
        </ServicoContext.Provider>
    );
};
