import {
    ConteCard,
    ConteCardServico,
    ConteCardServicoSolicitacao,
    ConteCardSolicitacao,
    DivAcao,
    DivAcaoSolicitacao,
    DivDescription,
    DivPreco,
    DivServico,
    DivServicoSolicitacao,
    DivStatusSolicitacao,
    DivTecnicoSolicitacao,
} from "./styled";
import DropDown from "./arrow_drop_down.svg";
import DropUp from "./arrow_drop_up.svg";
import { useContext } from "react";
import { DropFilterContext } from "../../Providers/DropFiltro";

export const Card = ({
    listCabecalho,
    listServicos,
    listCabecalhoSolicitacao,
    listServicosSolicitacao,
}) => {
    const {
        openDropServico,
        openDropDescription,
        openDropPreco,
        dropServico,
        dropDescription,
        dropPreco,
    } = useContext(DropFilterContext);

    return (
        <>
            {listCabecalho && (
                <ConteCard>
                    <DivServico>
                        <p>SERVIÇO</p>
                        {openDropServico ? (
                            <img onClick={dropServico} src={DropUp} alt="" />
                        ) : (
                            <img onClick={dropServico} src={DropDown} alt="" />
                        )}
                    </DivServico>
                    <DivDescription>
                        <p>DESCRIÇÃO</p>
                        {openDropDescription ? (
                            <img
                                onClick={dropDescription}
                                src={DropUp}
                                alt=""
                            />
                        ) : (
                            <img
                                onClick={dropDescription}
                                src={DropDown}
                                alt=""
                            />
                        )}
                    </DivDescription>
                    <DivPreco>
                        <p>PREÇO</p>
                        {openDropPreco ? (
                            <img onClick={dropPreco} src={DropUp} alt="" />
                        ) : (
                            <img onClick={dropPreco} src={DropDown} alt="" />
                        )}
                    </DivPreco>
                    <DivAcao>
                        <p>AÇÃO</p>
                    </DivAcao>
                </ConteCard>
            )}

            {listCabecalhoSolicitacao && (
                <ConteCardSolicitacao>
                    <DivServicoSolicitacao>
                        <p>SERVIÇO</p>
                        {openDropServico ? (
                            <img onClick={dropServico} src={DropUp} alt="" />
                        ) : (
                            <img onClick={dropServico} src={DropDown} alt="" />
                        )}
                    </DivServicoSolicitacao>
                    <DivTecnicoSolicitacao>
                        <p>TÉCNICO</p>
                        {openDropDescription ? (
                            <img
                                onClick={dropDescription}
                                src={DropUp}
                                alt=""
                            />
                        ) : (
                            <img
                                onClick={dropDescription}
                                src={DropDown}
                                alt=""
                            />
                        )}
                    </DivTecnicoSolicitacao>
                    <DivStatusSolicitacao>
                        <p>STATUS</p>
                        {openDropPreco ? (
                            <img onClick={dropPreco} src={DropUp} alt="" />
                        ) : (
                            <img onClick={dropPreco} src={DropDown} alt="" />
                        )}
                    </DivStatusSolicitacao>
                    <DivAcaoSolicitacao>
                        <p>AÇÃO</p>
                    </DivAcaoSolicitacao>
                </ConteCardSolicitacao>
            )}

            {listServicos && (
                <ConteCardServico>
                    <DivServico>
                        <p>Manutenção de Impressora</p>
                    </DivServico>
                    <DivDescription>
                        <p>Realizo limpeza de Impressora</p>
                    </DivDescription>
                    <DivPreco>
                        <p>R$ 80,00</p>
                    </DivPreco>
                    <DivAcao>
                        <p>Visualizar</p>
                    </DivAcao>
                </ConteCardServico>
            )}

            {listServicosSolicitacao && (
                <ConteCardServicoSolicitacao>
                    <DivServicoSolicitacao>
                        <p>Manutenção de Impressora</p>
                    </DivServicoSolicitacao>
                    <DivTecnicoSolicitacao>
                        <p>Maykon Dias Guedes</p>
                    </DivTecnicoSolicitacao>
                    <DivStatusSolicitacao>
                        <p>Solicitado</p>
                    </DivStatusSolicitacao>
                    <DivAcaoSolicitacao>
                        <p>Detalhes</p>
                    </DivAcaoSolicitacao>
                </ConteCardServicoSolicitacao>
            )}
        </>
    );
};
