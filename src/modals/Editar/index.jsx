import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import apiTcc from "../../APIs/TCC-STA";
import { Button } from "../../Components/Buttons";
import { Input } from "../../Components/Inputs";
import { Label } from "../../Components/Label";
import { ServicoContext } from "../../Providers/CriarServico";
import {
    ConteServicoEditarBtn,
    ModalEditarServConte,
    ModalEditarServForm,
    ModalEditarServInput,
} from "./styled";

export const Editar = ({ servico }) => {
    const { editarServicoFunc, editarFunc, infoServico, infoServicoFunc } =
        useContext(ServicoContext);

    if (infoServico) {
        useEffect(() => {
            infoServicoFunc();
        }, []);
    }

    const { register, handleSubmit } = useForm();

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

        editarFunc(data);
    };
    return (
        <>
            {servico && (
                <>
                    {infoServico && (
                        <ModalEditarServConte>
                            <div>
                                <ConteServicoEditarBtn>
                                    <Button click={editarServicoFunc} close />
                                </ConteServicoEditarBtn>
                                <ModalEditarServForm
                                    onSubmit={handleSubmit(onSubmitFunc)}
                                >
                                    <div className="info-criar">
                                        <ModalEditarServInput>
                                            <Label editar>Titulo</Label>
                                            <Input
                                                editarServico
                                                name="titulo"
                                                register={register}
                                                type="text"
                                            >
                                                {infoServico.titulo}
                                            </Input>
                                        </ModalEditarServInput>
                                        <ModalEditarServInput>
                                            <Label editar>Tempo Medio</Label>
                                            <Input
                                                editarServico
                                                name="mediaTempo"
                                                register={register}
                                                type="time"
                                            />
                                        </ModalEditarServInput>
                                        <ModalEditarServInput>
                                            <Label editar>Preço</Label>
                                            <Input
                                                editarServico
                                                name="price"
                                                register={register}
                                                type="text"
                                            >
                                                {infoServico.price}
                                            </Input>
                                        </ModalEditarServInput>
                                        <ModalEditarServInput>
                                            <Label editar>Descrição</Label>
                                            <Input
                                                editarServico
                                                name="descricao"
                                                register={register}
                                                type="text"
                                            >
                                                {infoServico.descricao}
                                            </Input>
                                        </ModalEditarServInput>
                                    </div>
                                    <Button editarServico type="submit">
                                        Editar
                                    </Button>
                                </ModalEditarServForm>
                            </div>
                        </ModalEditarServConte>
                    )}
                </>
            )}
        </>
    );
};
