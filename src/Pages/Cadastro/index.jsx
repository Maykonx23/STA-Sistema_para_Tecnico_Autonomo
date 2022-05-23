import { Header } from "../../Components/Header";
import { Input } from "../../Components/Inputs";
import { ConteCad, ConteForm } from "./styled";
import { Button } from "../../Components/Buttons";
import { Divisao } from "../../Components/Divisao";
import { useForm } from "react-hook-form";

export const Cadastro = () => {
    const { register, handleSubmit } = useForm();

    const onSubmitFunc = (data) => {
        console.log(data);
    };
    return (
        <>
            <Header cadastro />
            <ConteCad>
                <div>
                    <h1>Cadastre-se</h1>
                    <ConteForm onSubmit={handleSubmit(onSubmitFunc)}>
                        <Input
                            login
                            register={register}
                            name="name"
                            type="text"
                        >
                            Nome Completo
                        </Input>
                        <Input
                            login
                            register={register}
                            name="email"
                            type={"text"}
                        >
                            Email
                        </Input>
                        <Input
                            login
                            register={register}
                            name="password"
                            type={"text"}
                        >
                            Senha
                        </Input>
                        <Input
                            login
                            register={register}
                            name="confirmPassword"
                            type={"text"}
                        >
                            Confirmar Senha
                        </Input>
                        <Input
                            login
                            register={register}
                            name="cpf"
                            type={"text"}
                        >
                            CPF
                        </Input>
                        <Input
                            login
                            register={register}
                            name="telefone"
                            type={"text"}
                        >
                            Telefone
                        </Input>
                        <Input
                            login
                            register={register}
                            name="data_nasc"
                            type={"date"}
                        >
                            Data Nascimento
                        </Input>
                        <Input
                            login
                            register={register}
                            name="cep"
                            type={"text"}
                        >
                            CEP
                        </Input>

                        <Button login>Entrar</Button>
                    </ConteForm>
                    <Divisao login />
                    <p>
                        Já tem Login? Clique <span>Aqui</span>
                    </p>
                </div>
            </ConteCad>
        </>
    );
};
