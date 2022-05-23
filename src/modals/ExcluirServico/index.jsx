import apiTcc from "../../APIs/TCC-STA";
import { Button } from "../../Components/Buttons";
import {
    ModalCriarServBtn,
    ModalCriarServExcluir,
    ModalExcluirServConte,
} from "./styled";

export const ExcluirServico = ({
    setExcluirService,
    excluirService,
    lists,
    editarServicoId,
}) => {
    const closeExcluir = () => {
        setExcluirService(false);
    };

    const excluirServicoId = () => {
        apiTcc
            .delete(`/servicos/${excluirService}`)
            .then((response) => {
                setExcluirService(false);
                lists;
                return response;
            })
            .catch((err) => {
                return err;
            });
    };

    return (
        <ModalExcluirServConte>
            <ModalCriarServExcluir>
                {/*  <Close
                    CloseForm={closeExcluir}
                    classe="close-excluir-servico"
                /> */}
                <span>Deseja Excluir?</span>
                <ModalCriarServBtn>
                    <Button click={editarServicoId} classe="modalCancelar">
                        Cancelar
                    </Button>
                    <Button
                        type="submit"
                        click={excluirServicoId}
                        classe="modalExcluir"
                    >
                        Excluir
                    </Button>
                </ModalCriarServBtn>
            </ModalCriarServExcluir>
        </ModalExcluirServConte>
    );
};
