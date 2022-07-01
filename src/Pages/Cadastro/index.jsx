import { Header } from "../../Components/Header";
import { Input } from "../../Components/Inputs";
import { ConteCad, ConteForm } from "./styled";
import { Button } from "../../Components/Buttons";
import { Divisao } from "../../Components/Divisao";
import { useForm } from "react-hook-form";
import { RoutesContext } from "../../Providers/Routes";
import { useContext } from "react";
import { CadastroContext } from "../../Providers/Cadastrar";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorContext } from "../../Providers/Errors";
import { ErrosGeral } from "../../modals/Errors";

export const Cadastro = () => {
    const {
        cadastrarUser,
        cepError,
        setCepError,
        funcCepError,
        apiError,
        funcApiError,
    } = useContext(CadastroContext);
    const { returnLogin, returnCadastro } = useContext(RoutesContext);
    const { errorInfo, setErrorInfo, funcOnErrorInfo } =
        useContext(ErrorContext);

    const formSchema = yup.object().shape({
        name: yup.string().required("Campo Nome Obrigatório*"),
        email: yup.string().required("Campo Email Obrigatório*").email(),
        password: yup.string().required("Campo Senha Obrigatório*"),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password"), null], "As Senhas não são iguais.")
            .required("Campo Confirmar Senha Obrigatório*"),
        cpf: yup.string().required("Campo CPF Obrigatório*"),
        telefone: yup.string().required("Campo Telefone Obrigatório*"),
        data_nasc: yup.string().required("Campo Data Nascimento Obrigatório*"),
        cep: yup.string().required("Campo CEP  Obrigatório*"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(formSchema) });

    const onSubmitFunc = (data) => {
        delete data.confirmPassword;
        data.nivel = "cliente";
        data.avaliacao = 0;
        cadastrarUser(data);
    };

    const funcTime = () => {
        setTimeout(() => setErrorInfo(false), 5000);
        setTimeout(() => funcCepError(), 5000);
        setTimeout(() => funcApiError(), 5000);
    };

    const funcErrorCad = () => {
        setErrorInfo(true);
        funcTime();
    };

    return (
        <>
            <Header cadastro />
            {cepError && (
                <>
                    <ErrosGeral cadastroCep>CEP não Existe</ErrosGeral>
                    {funcTime()}
                </>
            )}
            {apiError != "" && (
                <>
                    <ErrosGeral apiErrorCad>{apiError}</ErrosGeral>
                    {funcTime()}
                </>
            )}
            {errorInfo && (
                <>
                    <ErrosGeral
                        cadastro
                        erroCad={{
                            name: errors.name,
                            email: errors.email,
                            password: errors.password,
                            confirmPassword: errors.confirmPassword,
                            cpf: errors.cpf,
                            telefone: errors.telefone,
                            data_nasc: errors.data_nasc,
                            cep: errors.cep,
                            erroCep: cepError,
                        }}
                    ></ErrosGeral>
                </>
            )}
            <ConteCad>
                <div>
                    <h1>Cadastre-se</h1>
                    <ConteForm onSubmit={handleSubmit(onSubmitFunc)}>
                        <div>
                            <label>Nome</label>
                            <Input
                                login
                                register={register}
                                name="name"
                                type="text"
                            >
                                Nome Completo
                            </Input>
                            {errors.name && funcErrorCad()}
                        </div>
                        <div>
                            <label>Email</label>
                            <Input
                                login
                                register={register}
                                name="email"
                                type={"text"}
                            >
                                Email
                            </Input>
                            {errors.email && funcErrorCad()}
                        </div>
                        <div>
                            <label>Senha</label>
                            <Input
                                login
                                register={register}
                                name="password"
                                type={"text"}
                            >
                                Senha
                            </Input>
                            {errors.password && funcErrorCad()}
                        </div>
                        <div>
                            <label>Confirmar Senha</label>
                            <Input
                                login
                                register={register}
                                name="confirmPassword"
                                type={"text"}
                            >
                                Confirmar Senha
                            </Input>
                            {errors.confirmPassword && funcErrorCad()}
                        </div>
                        <div>
                            <label>CPF</label>
                            <Input
                                login
                                register={register}
                                name="cpf"
                                type={"text"}
                            >
                                CPF
                            </Input>
                            {errors.cpf && funcErrorCad()}
                        </div>
                        <div>
                            <label>Telefone</label>
                            <Input
                                login
                                register={register}
                                name="telefone"
                                type={"text"}
                            >
                                Telefone
                            </Input>
                            {errors.telefone && funcErrorCad()}
                        </div>
                        <div>
                            <label>Data Nascimento</label>
                            <Input
                                login
                                register={register}
                                name="data_nasc"
                                type={"date"}
                            >
                                Data Nascimento
                            </Input>
                            {errors.data_nasc && funcErrorCad()}
                        </div>
                        <div>
                            <label>CEP</label>
                            <Input
                                login
                                register={register}
                                name="cep"
                                type={"text"}
                            >
                                CEP
                            </Input>
                            {errors.cep && funcErrorCad()}
                        </div>

                        <Button login>Entrar</Button>
                    </ConteForm>
                    <Divisao login />
                    <p>
                        Já tem Login? Clique{" "}
                        <span onClick={returnLogin}>Aqui</span>
                    </p>
                </div>
            </ConteCad>
        </>
    );
};
