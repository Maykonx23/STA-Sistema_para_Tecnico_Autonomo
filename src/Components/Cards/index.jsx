import {
    ConeteInfoStatus,
    ConteBtn,
    ConteCard,
    ConteCardCriar,
    ConteCardImg,
    ConteCardServico,
    ConteInfoCliente,
    ConteInfoServico,
    ConteInfoServicoSoli,
    ConteStatus,
    ConteStrela,
    DivEditServico,
    FiltroBtn,
    FiltroPesq,
    FiltroPesqCriar,
} from "./styled";
import DropDown from "./arrow_drop_down.svg";
import DropUp from "./arrow_drop_up.svg";
import { useContext } from "react";
import { DropFilterContext } from "../../Providers/DropFiltro";
import { Input } from "../Inputs";
import Perquisa from "./search.svg";
import { Button } from "../Buttons";
import Computador from "../../Imgs/computer.svg";
import StarVazio from "../../Imgs/star_vazia.svg";
import { ListServicosContext } from "../../Providers/ListServicos";
import { ServicoContext } from "../../Providers/CriarServico";
import { SolicitacaoServicoContext } from "../../Providers/SolicitacaoServico";
import { RoutesContext } from "../../Providers/Routes";

export const Card = ({
    listCabecalho,
    listServicos,
    listCabecalhoSolicitacao,
    listServicosSolicitacao,
    elemento,
    criarServico,
    cardServico,
    listSolicitacaoServicoTecnico,
}) => {
    const id = window.localStorage.getItem("@TCC/ID"); // eslint-disable-line
    const { openDropPreco, openDropAvaliacao, dropPreco, dropAvaliacao } =
        useContext(DropFilterContext);

    const { funcAlterarSolicitacaoServico, funcInfoServico } = useContext(
        SolicitacaoServicoContext
    );

    const {
        CriarServicoFunc,
        setExcluirServico,
        excluirServicoFunc,
        setIdServico,
        editarServicoFunc,
    } = useContext(ServicoContext);

    const { servicoId } = useContext(ListServicosContext);

    const { returnSolicitacaoServico } = useContext(RoutesContext);

    const eventoId = (e) => {
        setIdServico(e.target.id);
        setExcluirServico(true);
        excluirServicoFunc();
    };

    const eventoEdit = (e) => {
        setIdServico(e.target.id);
        editarServicoFunc();
    };

    const eventoRejeitar = (e) => {
        funcAlterarSolicitacaoServico(e.target.id, "rejeitar");
    };

    const eventoAceitar = (e) => {
        funcAlterarSolicitacaoServico(e.target.id, "aceitar");
    };

    const eventoDetalhe = (e) => {
        returnSolicitacaoServico(id, e.target.id, "tecnico");
        funcInfoServico(e.target.id);
    };

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
                <ConteCardCriar>
                    <FiltroPesqCriar>
                        <Input pesquisaServico>Pesquisar</Input>
                        <img src={Perquisa} alt="Pesquisar" />
                    </FiltroPesqCriar>
                    <ConteBtn>
                        <Button addCriarService click={CriarServicoFunc}>
                            +
                        </Button>
                    </ConteBtn>
                </ConteCardCriar>
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
                <>
                    <ConteCardServico>
                        <ConteCardImg>
                            <img src={Computador} alt="Computador" />
                        </ConteCardImg>
                        <ConteInfoServico>
                            <h2> Titulo{/* {elemento.titulo} */}</h2>
                            <ConeteInfoStatus>
                                <ConteStrela>
                                    <img src={StarVazio} alt="" />
                                    <img src={StarVazio} alt="" />
                                    <img src={StarVazio} alt="" />
                                    <img src={StarVazio} alt="" />
                                    <img src={StarVazio} alt="" />
                                </ConteStrela>
                                <div>Status</div>
                            </ConeteInfoStatus>
                            <p>Descrição{/* {elemento.descricao} */} </p>
                            <span>R$ 100{/* {elemento.price} */}</span>
                        </ConteInfoServico>
                        <DivEditServico>
                            <button /* onClick={eventoEdit} */ /* id={elemento.id} */
                            >
                                + Detalhes
                            </button>
                        </DivEditServico>
                    </ConteCardServico>
                </>
            )}

            {criarServico && (
                <ConteCardCriar>
                    <FiltroPesqCriar>
                        <Input pesquisaServico>Pesquisar</Input>
                        <img src={Perquisa} alt="Pesquisar" />
                    </FiltroPesqCriar>
                    <ConteBtn>
                        <Button addCriarService click={CriarServicoFunc}>
                            +
                        </Button>
                    </ConteBtn>
                </ConteCardCriar>
            )}

            {cardServico && (
                <>
                    <ConteCardServico>
                        <ConteCardImg>
                            <img src={Computador} alt="Computador" />
                        </ConteCardImg>
                        <ConteInfoServico>
                            <h2> {elemento.titulo}</h2>
                            <ConteStrela>
                                <img src={StarVazio} alt="" />
                                <img src={StarVazio} alt="" />
                                <img src={StarVazio} alt="" />
                                <img src={StarVazio} alt="" />
                                <img src={StarVazio} alt="" />
                            </ConteStrela>
                            <p>{elemento.descricao} </p>
                            <span>R$ {elemento.price}</span>
                        </ConteInfoServico>
                        <DivEditServico>
                            <button onClick={eventoEdit} id={elemento.id}>
                                + Editar
                            </button>
                            <button onClick={eventoId} id={elemento.id}>
                                Excluir
                            </button>
                        </DivEditServico>
                    </ConteCardServico>
                </>
            )}

            {listSolicitacaoServicoTecnico && (
                <>
                    <ConteCardServico>
                        <ConteCardImg>
                            <img src={Computador} alt="Computador" />
                        </ConteCardImg>
                        <ConteInfoServicoSoli>
                            <h2> {elemento.servicos.titulo}</h2>
                            <ConeteInfoStatus>
                                <ConteStrela>
                                    <img src={StarVazio} alt="" />
                                    <img src={StarVazio} alt="" />
                                    <img src={StarVazio} alt="" />
                                    <img src={StarVazio} alt="" />
                                    <img src={StarVazio} alt="" />
                                </ConteStrela>
                                <div>
                                    {elemento.status == "Encerrado" ? (
                                        <ConteStatus color="red">
                                            Encerrado
                                        </ConteStatus>
                                    ) : (
                                        <>
                                            {elemento.status == "Aguardando" ? (
                                                <ConteStatus color="yellow">
                                                    Aguardando
                                                </ConteStatus>
                                            ) : (
                                                <>
                                                    {elemento.status ==
                                                    "Concluido" ? (
                                                        <ConteStatus color="green">
                                                            Concluido
                                                        </ConteStatus>
                                                    ) : (
                                                        <>
                                                            {elemento.status ==
                                                                "Processando" && (
                                                                <ConteStatus color="blue">
                                                                    Processando
                                                                </ConteStatus>
                                                            )}
                                                        </>
                                                    )}
                                                </>
                                            )}
                                        </>
                                    )}
                                </div>
                            </ConeteInfoStatus>
                            <p>{elemento.servicos.descricao} </p>
                            <ConteInfoCliente>
                                Cliente: <p>{elemento.cliente.name} </p>
                            </ConteInfoCliente>
                        </ConteInfoServicoSoli>
                        <DivEditServico>
                            {elemento.status == "Aguardando" ? (
                                <>
                                    <button
                                        onClick={eventoRejeitar}
                                        id={elemento.id}
                                    >
                                        Rejeitar
                                    </button>
                                    <button
                                        onClick={eventoAceitar}
                                        id={elemento.id}
                                    >
                                        Aceitar
                                    </button>
                                </>
                            ) : (
                                <>
                                    {elemento.status == "Encerrado" ? (
                                        <div>Encerrado</div>
                                    ) : (
                                        <button
                                            onClick={eventoDetalhe}
                                            id={elemento.id}
                                        >
                                            + Detalhes
                                        </button>
                                    )}
                                </>
                            )}
                        </DivEditServico>
                    </ConteCardServico>
                </>
            )}
        </>
    );
};
