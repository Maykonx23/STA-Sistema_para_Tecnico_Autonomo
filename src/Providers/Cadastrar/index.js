import { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { apiEnd } from "../../APIs/Endereco";
import apiTcc from "../../APIs/TCC-STA";

export const CadastroContext = createContext();

export const CadastroProvider = ({ children }) => {
    const history = useHistory();
    const [cepError, setCepError] = useState(false);
    const [apiError, setApiError] = useState("");

    const funcCepError = () => {
        if (cepError) {
            setCepError(false);
        } else {
            setCepError(true);
        }
    };
    const funcApiError = () => {
        if (apiError != "") {
            setApiError("");
        }
    };

    const cadastrarUser = (data) => {
        apiEnd.get(`${data.cep}/json/`).then((response) => {
            if (response.data.erro) {
                setCepError(true);
            } else {
                apiTcc
                    .post("/enderecos", {
                        cep: response.data.cep,
                        rua: response.data.logradouro,
                        bairro: response.data.bairro,
                        cidade: response.data.localidade,
                        uf: response.data.uf,
                    })
                    .then((response) => {
                        data.endereco_id = response.data.id;
                        delete data.cep;

                        apiTcc
                            .post("/clientes", data)
                            .then((response) => {
                                history.push("/");
                                return response.data;
                            })
                            .catch((error) => {
                                apiTcc.delete(`/enderecos/${response.data.id}`);
                                setApiError(error.response.data.message);
                                return error;
                            });
                    })
                    .catch((error) => {
                        return error;
                    });
            }
        });
    };

    return (
        <CadastroContext.Provider
            value={{
                cadastrarUser,
                cepError,
                apiError,
                setCepError,
                funcCepError,
                funcApiError,
            }}
        >
            {children}
        </CadastroContext.Provider>
    );
};
