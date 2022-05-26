import {
    ConteCard,
    ConteCardImg,
    ConteCardServico,
    ConteCardServicoSolicitacao,
    ConteCardSolicitacao,
    ConteInfoServico,
    ConteStrela,
    DivAcao,
    DivAcaoSolicitacao,
    DivDescription,
    DivPreco,
    DivServico,
    DivServicoSolicitacao,
    DivStatusSolicitacao,
    DivTecnicoSolicitacao,
    FiltroBtn,
    FiltroPesq,
} from "./styled";
import DropDown from "./arrow_drop_down.svg";
import DropUp from "./arrow_drop_up.svg";
import { useContext, useEffect } from "react";
import { DropFilterContext } from "../../Providers/DropFiltro";
import { Input } from "../Inputs";
import Perquisa from "./search.svg";
import { Button } from "../Buttons";
import Computador from "../../Imgs/computer.svg";
import StarVazio from "../../Imgs/star_vazia.svg";
import { ListServicosContext } from "../../Providers/ListServicos";

export const Card = ({
    listCabecalho,
    listServicos,
    listCabecalhoSolicitacao,
    listServicosSolicitacao,
    elemento,
}) => {
    const {
        openDropServico,
        openDropDescription,
        openDropPreco,
        openDropAvaliacao,
        dropServico,
        dropDescription,
        dropPreco,
        dropAvaliacao,
    } = useContext(DropFilterContext);

    const { tecnicoServico, infotecnicoService, servicoId } =
        useContext(ListServicosContext);

    return (
        <>
            {listCabecalho && (
                <ConteCard>
                    <FiltroPesq>
                        <Input pesquisaServico>Pesquisar</Input>
                        <img src={Perquisa} alt="Pesquisar" />
                    </FiltroPesq>
                    <FiltroBtn>
                        <Button filterServico click={dropPreco}>
                            Preço
                            {openDropPreco ? (
                                <img src={DropUp} alt="" />
                            ) : (
                                <img src={DropDown} alt="" />
                            )}
                        </Button>
                        <Button filterServico click={dropAvaliacao}>
                            Avaliação
                            {openDropAvaliacao ? (
                                <img src={DropUp} alt="" />
                            ) : (
                                <img src={DropDown} alt="" />
                            )}
                        </Button>
                    </FiltroBtn>
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
                <>
                    <ConteCardServico>
                        <ConteCardImg>
                            <img src={Computador} alt="Computador" />
                        </ConteCardImg>
                        <ConteInfoServico>
                            <h2>{elemento.titulo}</h2>
                            <ConteStrela>
                                <img src={StarVazio} alt="" />
                                <img src={StarVazio} alt="" />
                                <img src={StarVazio} alt="" />
                                <img src={StarVazio} alt="" />
                                <img src={StarVazio} alt="" />
                            </ConteStrela>
                            <p>{elemento.descricao}</p>
                            <span>R$ {elemento.price}</span>
                        </ConteInfoServico>
                        <button onClick={servicoId} id={elemento.id}>
                            <span id={elemento.id}>+</span> Detalhes
                        </button>
                    </ConteCardServico>
                </>
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
