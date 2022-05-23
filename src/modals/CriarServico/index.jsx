import { useForm } from "react-hook-form";
import { Button } from "../../Components/Buttons";
import { Input } from "../../Components/Inputs";
import apiTcc from "../../APIs/TCC-STA/";
import {
    ModalCriarServConte,
    ModalCriarServForm,
    ModalCriarServInput,
} from "./styled";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const CriarServico = ({ setCriarService, lists }) => {
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const FormCriarService = () => {
        setCriarService(false);
    };

    const onSubmitFunc = (data) => {
        data.tecnico_id = window.localStorage.getItem("idTcc");

        apiTcc
            .post(`/servicos`, data)
            .then((response) => {
                lists;
                return response.data;
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <ModalCriarServConte>
                <ModalCriarServForm onSubmit={handleSubmit(onSubmitFunc)}>
                    {/* <Close
                        CloseForm={FormCriarService}
                        classe="close-criar-servico"
                    /> */}
                    <div className="info-criar">
                        <ModalCriarServInput>
                            <label>Titulo</label>
                            <Input
                                name="titulo"
                                register={register}
                                type="text"
                            >
                                Digite um Titulo
                            </Input>
                        </ModalCriarServInput>
                        <ModalCriarServInput>
                            <label>Tempo Medio</label>
                            <Input
                                name="mediaTempo"
                                register={register}
                                type="time"
                            ></Input>
                        </ModalCriarServInput>
                        <ModalCriarServInput>
                            <label>Preço</label>
                            <Input
                                name="price"
                                register={register}
                                type="number"
                            >
                                Preço
                            </Input>
                        </ModalCriarServInput>
                        <ModalCriarServInput>
                            <label>Descrição</label>
                            <Input
                                name="descricao"
                                register={register}
                                type="text"
                            >
                                Descrição do Serviço
                            </Input>
                        </ModalCriarServInput>
                    </div>
                    <Button type="submit" classe="btn-criar">
                        Criar
                    </Button>
                </ModalCriarServForm>
            </ModalCriarServConte>
        </>
    );
};
