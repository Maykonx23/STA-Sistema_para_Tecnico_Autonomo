import { Header } from "../../Components/Header";
import { Input } from "../../Components/Inputs";
import { ConteForm, ConteLogin, ContePass } from "./styled";
import visibilityOn from "../../Imgs/visibilityOn.svg";
import visibilityOff from "../../Imgs/visibilityOFF.svg";
import { useContext, useState } from "react";
import { Button } from "../../Components/Buttons";
import { Divisao } from "../../Components/Divisao";
import { RoutesContext } from "../../Providers/Routes";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LoginContext } from "../../Providers/Login";
import { ErrorContext } from "src/Providers/Errors";
import { ErrosGeral } from "src/modals/Errors";

export const Login = () => {
    const { returnCadastro } = useContext(RoutesContext);
    const { logar, errorLogin, setErrorLogin } = useContext(LoginContext);
    const { errorInfo, setErrorInfo, funcOnErrorInfo } =
        useContext(ErrorContext);

    const formSchema = yup.object().shape({
        email: yup.string().email().required("Campo Email Obrigatório*"),
        password: yup.string().required("Campo Senha  Obrigatório*"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(formSchema) });

    const [visibilityPass, setVisibilityPass] = useState("password");

    const visibiliPass = () => {
        if (visibilityPass === "password") {
            setVisibilityPass("text");
        } else {
            setVisibilityPass("password");
        }
    };

    const onSubmitFunction = (data) => {
        // eslint-disable-line
        logar(data);
    };
    const funcTime = () => {
        setTimeout(() => setErrorInfo(false), 3000);
    };

    const funcAddErro = () => {
        setErrorInfo(true);
        funcTime();
    };
    return (
        <>
            <Header login />
            {errorLogin.length != 0 && (
                <>
                    <ErrosGeral
                        login
                        loginSenha={errors.password}
                        loginEmail={errors.email}
                        loginApi={errorLogin}
                    ></ErrosGeral>
                    {() => {
                        funcTime();
                    }}
                </>
            )}
            {errorInfo && (
                <ErrosGeral
                    login
                    loginSenha={errors.password}
                    loginEmail={errors.email}
                ></ErrosGeral>
            )}
            <ConteLogin>
                <div>
                    <h1>Login</h1>
                    <ConteForm onSubmit={handleSubmit(onSubmitFunction)}>
                        <Input
                            login
                            register={register}
                            name={"email"}
                            type={"email"}
                        >
                            Email
                        </Input>
                        {errors.email && funcAddErro()}

                        <ContePass>
                            <Input
                                login
                                register={register}
                                name={"password"}
                                type={visibilityPass}
                            >
                                Senha
                            </Input>
                            {visibilityPass === "password" ? (
                                <img
                                    onClick={visibiliPass}
                                    src={visibilityOff}
                                    alt="Olhar Senha"
                                />
                            ) : (
                                <img
                                    onClick={visibiliPass}
                                    src={visibilityOn}
                                    alt="Esconder Senha"
                                />
                            )}
                            {errors.password && funcAddErro()}
                        </ContePass>
                        <Button type={"submit"} login>
                            Entrar
                        </Button>
                    </ConteForm>
                    <Divisao login />
                    <p>
                        Não tem Login? Cadastre-se{" "}
                        <span onClick={returnCadastro}>Aqui</span>
                    </p>
                </div>
            </ConteLogin>
        </>
    );
};
