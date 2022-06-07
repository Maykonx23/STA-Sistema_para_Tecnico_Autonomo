import { Button } from "../../Components/Buttons";
import { Input } from "../../Components/Inputs";
import {
    ConteServicoBtn,
    ModalCriarServConte,
    ModalCriarServForm,
    ModalCriarServInput,
} from "./styled";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useForm } from "react-hook-form";
import { Label } from "../../Components/Label";
import { useContext } from "react";
import { ServicoContext } from "../../Providers/CriarServico";

export const CriarNewServico = () => {
    const { register, handleSubmit } = useForm();

    const { cadastrarServco, CriarServicoFunc } = useContext(ServicoContext);

    const onSubmitFunc = (data) => {
        const id = window.localStorage.getItem("@TCC/ID"); // eslint-disable-line
        data.tecnico_id = id;
        cadastrarServco(data);
    };

    return (
        <>
            <ModalCriarServConte>
                <div>
                    <ConteServicoBtn>
                        <Button click={CriarServicoFunc} close />
                    </ConteServicoBtn>
                    <ModalCriarServForm onSubmit={handleSubmit(onSubmitFunc)}>
                        <div className="info-criar">
                            <ModalCriarServInput>
                                <Label criarServico>Titulo</Label>
                                <Input
                                    name="titulo"
                                    register={register}
                                    type="text"
                                    criarServico
                                >
                                    Digite um Titulo
                                </Input>
                            </ModalCriarServInput>
                            <ModalCriarServInput>
                                <Label criarServico>Tempo Medio</Label>
                                <Input
                                    name="mediaTempo"
                                    register={register}
                                    type="time"
                                    criarServico
                                ></Input>
                            </ModalCriarServInput>
                            <ModalCriarServInput>
                                <Label criarServico>Preço</Label>
                                <Input
                                    name="price"
                                    register={register}
                                    type="text"
                                    criarServico
                                >
                                    Preço
                                </Input>
                            </ModalCriarServInput>
                            <ModalCriarServInput>
                                <Label criarServico>Descrição</Label>
                                <Input
                                    name="descricao"
                                    register={register}
                                    type="text"
                                    criarServico
                                >
                                    Descrição do Serviço
                                </Input>
                            </ModalCriarServInput>
                        </div>
                        <Button criarServico type="submit">
                            Criar
                        </Button>
                    </ModalCriarServForm>
                </div>
            </ModalCriarServConte>
        </>
    );
};
