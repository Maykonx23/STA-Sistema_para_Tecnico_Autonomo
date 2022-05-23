import { Header } from "../../Components/Header";
import { Input } from "../../Components/Inputs";
import { ConteForm, ConteLogin, ContePass } from "./styled";
import visibilityOn from "../../Imgs/visibilityOn.svg";
import visibilityOff from "../../Imgs/visibilityOFF.svg";
import { useState } from "react";
import { Button } from "../../Components/Buttons";
import { Divisao } from "../../Components/Divisao";

export const Login = () => {
    const [visibilityPass, setVisibilityPass] = useState("password");

    const visibiliPass = () => {
        if (visibilityPass === "password") {
            setVisibilityPass("text");
        } else {
            setVisibilityPass("password");
        }
    };
    return (
        <>
            <Header login />
            <ConteLogin>
                <div>
                    <h1>Login</h1>
                    <ConteForm>
                        <Input login>Email</Input>
                        <ContePass>
                            <Input login type={visibilityPass}>
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
                        </ContePass>
                        <Button type={"submit"} login>
                            Entrar
                        </Button>
                    </ConteForm>
                    <Divisao login />
                    <p>
                        Não tem Login? Cadastre-se <span>Aqui</span>
                    </p>
                </div>
            </ConteLogin>
        </>
    );
};
