import { useContext } from "react";
import apiTcc from "../../APIs/TCC-STA";
import { Button } from "../../Components/Buttons";
import { ServicoContext } from "../../Providers/CriarServico";
import {
    ConteExcluirServicoBtn,
    ModalCriarServBtn,
    ModalCriarServExcluir,
    ModalExcluirServConte,
} from "./styled";

export const Excluir = ({
    setExcluirService,
    excluirService,
    lists,
    editarServicoId,
    servico,
}) => {
    const { excluirServicoFunc, excluirFunc } = useContext(ServicoContext);

    return (
        <>
            {servico && (
                <ModalExcluirServConte>
                    <ModalCriarServExcluir>
                        <ConteExcluirServicoBtn>
                            <Button click={excluirServicoFunc} close />
                        </ConteExcluirServicoBtn>
                        <span>Deseja Excluir?</span>
                        <ModalCriarServBtn>
                            <Button
                                cancelar
                                click={excluirServicoFunc}
                                classe="modalCancelar"
                            >
                                Cancelar
                            </Button>
                            <Button
                                excluir
                                type="submit"
                                click={excluirFunc}
                                classe="modalExcluir"
                            >
                                Excluir
                            </Button>
                        </ModalCriarServBtn>
                    </ModalCriarServExcluir>
                </ModalExcluirServConte>
            )}
        </>
    );
};
