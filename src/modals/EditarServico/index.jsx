import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import apiTcc from "../../APIs/TCC-STA";
import { Button } from "../../Components/Buttons";
import { Input } from "../../Components/Inputs";
import {
    ModalEditarServConte,
    ModalEditarServForm,
    ModalEditarServInput,
} from "./styled";

export const EditarService = ({ setEditarService, editarService }) => {
    const { register, handleSubmit } = useForm();
    const [infoService, setInfoService] = useState();

    const FormEditarService = () => {
        setEditarService(false);
    };

    useEffect(() => {
        apiTcc
            .get(`/servicos/${editarService}`)
            .then((response) => {
                setInfoService(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [setInfoService]);

    const onSubmitFunc = (data) => {
        if (data.titulo === "") {
            delete data.titulo;
        }
        if (data.mediaTempo === "") {
            delete data.mediaTempo;
        }
        if (data.price === "") {
            delete data.price;
        }
        if (data.descricao === "") {
            delete data.descricao;
        }

        apiTcc
            .put(`/servicos/${editarService}`, data)
            .then((response) => {
                setEditarService(false);
                console.log(response.data);
                return response.data;
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <>
            {infoService && (
                <ModalEditarServConte>
                    <ModalEditarServForm onSubmit={handleSubmit(onSubmitFunc)}>
                        {/* <Close
                            CloseForm={FormEditarService}
                            classe="close-criar-servico"
                        /> */}
                        <div className="info-criar">
                            <ModalEditarServInput>
                                <label>Titulo</label>
                                <Input
                                    name="titulo"
                                    register={register}
                                    type="text"
                                >
                                    {infoService.titulo}
                                </Input>
                            </ModalEditarServInput>
                            <ModalEditarServInput>
                                <label>Tempo Medio</label>
                                <Input
                                    name="mediaTempo"
                                    register={register}
                                    type="time"
                                    value={infoService.mediaTempo}
                                ></Input>
                            </ModalEditarServInput>
                            <ModalEditarServInput>
                                <label>Preço</label>
                                <Input
                                    name="price"
                                    register={register}
                                    type="number"
                                >
                                    {infoService.price}
                                </Input>
                            </ModalEditarServInput>
                            <ModalEditarServInput>
                                <label>Descrição</label>
                                <Input
                                    name="descricao"
                                    register={register}
                                    type="text"
                                >
                                    {infoService.descricao}
                                </Input>
                            </ModalEditarServInput>
                        </div>
                        <Button type="submit" classe="btn-criar">
                            Editar
                        </Button>
                    </ModalEditarServForm>
                </ModalEditarServConte>
            )}
        </>
    );
};
