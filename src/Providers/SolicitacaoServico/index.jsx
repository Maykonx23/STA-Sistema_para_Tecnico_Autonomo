import { createContext, useState } from "react";
import apiTcc from "../../APIs/TCC-STA";

export const SolicitacaoServicoContext = createContext();

export const SolicitacaoServicoProvider = ({ children }) => {
    const [solicitacaoServicoTec, setSolicitacaoServicoTec] = useState(false);
    const [solicitacaoServicoInfo, setSolicitacaoServicoInfo] = useState([]);
    const [servicosId, setServicosId] = useState();
    const [servicoInfo, setServicoInfo] = useState([]);

    const [tecnicoInfo, setTecnicoInfo] = useState([]);

    const id = window.localStorage.getItem("@TCC/ID");
    const token = window.localStorage.getItem("@TCC/Token");

    const solicitacaoServicoTecFunc = () => {
        if (solicitacaoServicoTec) {
            setSolicitacaoServicoTec(false);
        } else {
            setSolicitacaoServicoTec(true);
        }
    };

    const funcInfoSolicitacaoServico = (id, type) => {
        if (type == "cliente") {
            apiTcc
                .get(`/solicitacao-servico/cliente/${id}`)
                .then((response) => {
                    setSolicitacaoServicoInfo(response.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        if (type == "tecnico") {
            apiTcc
                .get(`/solicitacao-servico/tecnico/${id}`)
                .then((response) => {
                    setSolicitacaoServicoInfo(response.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const funcAlterarSolicitacaoServico = (idServico, type) => {
        if (type == "rejeitar") {
            apiTcc
                .get(`/solicitacao-servico/${idServico}`)
                .then((response) => {
                    apiTcc
                        .put(`/solicitacao-servico/${idServico}`, {
                            cliente_id: response.data.cliente.id,
                            status: "Encerrado",
                        })
                        .then((response) => {
                            return response.data;
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        if (type == "aceitar") {
            apiTcc
                .get(`/solicitacao-servico/${idServico}`)
                .then((response) => {
                    console.log(response.data.cliente);
                    apiTcc
                        .put(`/solicitacao-servico/${idServico}`, {
                            cliente_id: response.data.cliente.id,
                            status: "Processando",
                        })
                        .then((response) => {
                            return response.data;
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        if (type == "cancelado") {
            apiTcc
                .get(`/solicitacao-servico/${idServico}`)
                .then((response) => {
                    console.log(response.data.cliente);
                    apiTcc
                        .put(`/solicitacao-servico/${idServico}`, {
                            cliente_id: response.data.cliente.id,
                            status: "Cancelado",
                        })
                        .then((response) => {
                            return response.data;
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        if (type == "concluido") {
            apiTcc
                .get(`/solicitacao-servico/${idServico}`)
                .then((response) => {
                    apiTcc
                        .put(`/solicitacao-servico/${idServico}`, {
                            cliente_id: response.data.cliente.id,
                            status: "Concluido",
                        })
                        .then((response) => {
                            return response.data;
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const funcInfoServico = (id) => {
        if (id) {
            apiTcc
                .get(`/solicitacao-servico/${id}`)
                .then((response) => {
                    setServicoInfo(response.data);
                    apiTcc
                        .get(`/tecnicos/${response.data.tecnico.id}`)
                        .then((response) => {
                            setTecnicoInfo(response.data);
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const funcSolicitacaoTec = (data, returnLogin) => {
        if (id) {
            data.cliente_id = id;
            apiTcc
                .put(
                    `/clientes/${id}`,
                    { nivel: "tecnico" },
                    { headers: { Authorization: `Bearer ${token}` } }
                )
                .then((resp) => {
                    console.log(resp.data);
                    apiTcc
                        .post(`/tecnicos/`, data)
                        .then((response) => {
                            returnLogin();
                        })
                        .catch((err) => console.log(err));
                })
                .catch((err) => console.log(err));
        }
    };

    const funcSolicitarServico = (data, closeInfoServico) => {
        apiTcc
            .post("/solicitacao-servico", data)
            .then((response) => {
                console.log(response.data);
                closeInfoServico();
            })
            .catch((err) => console.log(err));
    };

    return (
        <SolicitacaoServicoContext.Provider
            value={{
                solicitacaoServicoTec,
                solicitacaoServicoInfo,
                servicoInfo,
                servicosId,
                tecnicoInfo,
                setServicosId,
                solicitacaoServicoTecFunc,
                funcInfoSolicitacaoServico,
                funcAlterarSolicitacaoServico,
                funcInfoServico,
                funcSolicitacaoTec,
                funcSolicitarServico,
            }}
        >
            {children}
        </SolicitacaoServicoContext.Provider>
    );
};
