import axios from "axios";
import { useForm } from "react-hook-form";
import apiTcc from "../../../APIs/TCC-STA";
import { Button } from "../../Buttons";
import { Input } from "../../Inputs";
import { Span } from "../../Span";
import "./style.css";

export const Cadastro = ({
    CloseForm,
    classe,
    setStatusCad,
    setStatusLogin,
}) => {
    const { register, handleSubmit } = useForm();

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
    };

    return (
        <div className={classe}>
            <div className="form-cadastrar">
                {" "}
                {/* 
                <Close CloseForm={CloseForm}  classe="close-form" />*/}
                <h1>Cadastro</h1>
                <form
                    onSubmit={handleSubmit(onSubmitFunc)}
                    className="cadastro-form"
                >
                    <div className="cadastro-inputs">
                        <div className="container-input-span">
                            <Input
                                classe="form-input"
                                register={register}
                                name="name"
                                type="text"
                            >
                                Nome Completo
                            </Input>
                            <Span classe="erro-span"></Span>
                        </div>
                        <div className="container-input-span">
                            <Input
                                classe="form-input"
                                register={register}
                                name="email"
                                type="text"
                            >
                                Email
                            </Input>
                            <Span classe="erro-span"></Span>
                        </div>
                        <div className="container-input-span">
                            <Input
                                classe="form-input"
                                register={register}
                                name="password"
                                type="text"
                            >
                                Senha
                            </Input>
                            <Span classe="erro-span"></Span>
                        </div>
                        <div className="container-input-span">
                            <Input
                                classe="form-input"
                                register={register}
                                name="confirmPassword"
                                type="text"
                            >
                                Confirmar Senha
                            </Input>
                            <Span classe="erro-span"></Span>
                        </div>
                        <div className="container-input-span">
                            <Input
                                classe="form-input"
                                register={register}
                                name="cpf"
                                type="text"
                            >
                                CPF
                            </Input>
                            <Span classe="erro-span"></Span>
                        </div>
                        <div className="container-input-span">
                            <Input
                                classe="form-input"
                                register={register}
                                name="telefone"
                                type="text"
                            >
                                Telefone
                            </Input>
                            <Span classe="erro-span"></Span>
                        </div>
                        <div className="container-input-span">
                            <Input
                                classe="form-input"
                                register={register}
                                name="data_nasc"
                                type="date"
                            >
                                Data Nascimento
                            </Input>
                            <Span classe="erro-span"></Span>
                        </div>
                        <div className="container-input-span">
                            <Input
                                classe="form-input"
                                register={register}
                                name="cep"
                                type="text"
                            >
                                CEP
                            </Input>
                            <Span classe="erro-span"></Span>
                        </div>
                    </div>
                    <Button type="submit" classe="form-btn">
                        Cadastrar
                    </Button>
                </form>
            </div>
        </div>
    );
};
