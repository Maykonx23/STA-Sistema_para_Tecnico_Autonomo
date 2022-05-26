import { createContext } from "react";
import { apiEnd } from "../../APIs/Endereco";
import apiTcc from "../../APIs/TCC-STA";

export const CadastroContext = createContext();

export const CadastroProvider = ({ children }) => {
    const cadastrarUser = (data) => {
        apiEnd.get(`${data.cep}/json/`).then((response) => {
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
                            return response.data;
                        })
                        .catch((error) => {
                            apiTcc.delete(`/enderecos/${response.data.id}`);
                            return error;
                        })
                        .catch((err) => {
                            return err;
                        });
                })
                .catch((error) => {
                    return error;
                });
        });
    };

    /*const { register, handleSubmit } = useForm();

     const onSubmitFunc = async (data) => {
        delete data.confirmPassword;
        data.nivel = "cliente";
        data.avaliacao = 0;

        axios
            .get(`https://viacep.com.br/ws/${data.cep}/json/`)
            .then((response) => {
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
                                setStatusCad(false);
                                setStatusLogin(true);
                                return response.data;
                            })
                            .catch((error) => {
                                apiTcc.delete(`/enderecos/${response.data.id}`);
                                return error;
                            });
                    })
                    .catch((err) => {
                        return err;
                    });
            })
            .catch((error) => {
                return error;
            });
    }; */

    return (
        <CadastroContext.Provider value={{ cadastrarUser }}>
            {children}
        </CadastroContext.Provider>
    );
};
