import { useContext } from "react";
import { Button } from "../../Components/Buttons";
import { ListServicosContext } from "../../Providers/ListServicos";
import {
    BtnServico,
    ConteBtn,
    ConteInfoS,
    ConteInfoServico,
    InfoServico,
    InfoTec,
} from "./style";

export const AbrirIndoServico = () => {
    const { closeInfoServico, servico, tecnicoServico } =
        useContext(ListServicosContext);
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
                        <p>Descrição</p>
                        <InfoServico>
                            <h3>Tempo: {servico.mediaTempo}</h3>
                            <h3>Preço: {servico.price}</h3>
                        </InfoServico>
                        <BtnServico>
                            <Button solicitarServico>Solicitar Serviço</Button>
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
