import { useContext } from "react";
import { Button } from "../../Components/Buttons";
import { ListServicosContext } from "../../Providers/ListServicos";
import { SolicitacaoServicoContext } from "../../Providers/SolicitacaoServico";
import {
    BtnServico,
    ConteBtn,
    ConteDescricao,
    ConteInfoS,
    ConteInfoServico,
    InfoServico,
    InfoTec,
} from "./style";

export const AbrirIndoServico = () => {
    const id = window.localStorage.getItem("@TCC/ID");
    const { closeInfoServico, servico, tecnicoServico, servicoId } =
        useContext(ListServicosContext);

    const { funcSolicitarServico } = useContext(SolicitacaoServicoContext);

    const funcSolicitar = () => {
        funcSolicitarServico(
            {
                servico_id: servico.id,
                tecnico_id: servico.tecnico.id,
                cliente_id: id,
                validacao: 0,
                status: "Aguardando",
            },
            closeInfoServico
        );
    };
    return (
        <>
            {servico.length != 0 && tecnicoServico.length != 0 && (
                <ConteInfoServico>
                    <ConteInfoS>
                        <ConteBtn>
                            <Button click={closeInfoServico} close />
                        </ConteBtn>
                        <h1>{servico.titulo.toUpperCase()}</h1>
                        <InfoTec>
                            Tecnico:
                            <span>
                                {tecnicoServico.cliente.name[0].toUpperCase()}
                                {tecnicoServico.cliente.name.substr(1)}
                            </span>
                        </InfoTec>
                        <ConteDescricao>Descrição</ConteDescricao>
                        <InfoServico>
                            <h3>Tempo: {servico.mediaTempo}</h3>
                            <h3>Preço: {servico.price}</h3>
                        </InfoServico>
                        <BtnServico>
                            <Button
                                id={servico.id}
                                click={() => funcSolicitar()}
                                solicitarServico
                            >
                                Solicitar Serviço
                            </Button>
                            <Button click={closeInfoServico} voltarServico>
                                Voltar
                            </Button>
                        </BtnServico>
                    </ConteInfoS>
                </ConteInfoServico>
            )}
        </>
    );
};
