import styled from "styled-components";

export const ConteCard = styled.div`
    @media (min-width: 760px) {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        margin: 0 0 40px 0;
    }
`;

export const ConteCardCriar = styled.div`
    @media (min-width: 760px) {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`;

export const FiltroPesq = styled.div`
    @media (min-width: 760px) {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        img {
            box-sizing: border-box;
            position: relative;
            width: 30px;
            left: -40px;
            cursor: pointer;
        }
    }
`;

export const FiltroPesqCriar = styled.div`
    @media (min-width: 760px) {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        img {
            box-sizing: border-box;
            position: static;
            width: 30px;

            margin-left: -40px;
            cursor: pointer;
            box-sizing: border-box;
        }
    }
`;

export const FiltroBtn = styled.div`
    @media (min-width: 760px) {
        display: flex;
        div {
            margin-left: 20px;
            :nth-child(1) {
                margin-left: 0px;
            }
        }
    }
`;

export const DivServico = styled.div`
    @media (min-width: 760px) {
        width: 30%;
    }
`;

export const DivDescription = styled.div`
    @media (min-width: 760px) {
        width: 35%;
    }
`;

export const DivPreco = styled.div`
    @media (min-width: 760px) {
        width: 15%;
    }
`;

export const DivAcao = styled.div`
    @media (min-width: 760px) {
        width: 20%;
    }
`;

export const ConteCardServico = styled.div`
    @media (min-width: 760px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 300px;
        box-sizing: border-box;
        border: 2px solid rgb(46, 52, 59, 0.5);
        padding: 10px;
        border-radius: 10px;
        background-color: white;
        :hover {
            border: 2px solid #e84a05;
        }
        button {
            border: 1px solid black;
            border-radius: 10px;
            background-color: #000036;
            color: white;
            padding: 10px 20px;
            line-height: 1.2em;
            font-weight: 600;
            cursor: pointer;
            :hover {
                background-color: white;
                color: #000036;
                font-weight: 800;
            }
            span {
                font-weight: 800;
            }
        }
    }
`;

export const DivEditServico = styled.div`
    @media (min-width: 760px) {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
`;

export const ConteRejeitado = styled.div`
    @media (min-width: 760px) {
        display: flex;
        padding: 5px 10px;
        align-items: center;
        justify-content: center;
        font-size: 1.2em;
        font-weight: 600;
        background-color: red;
        color: white;
        border-radius: 10px;
        border: 2px solid transparent;
        cursor: pointer;
    }
`;

export const ConteStrela = styled.div`
    @media (min-width: 760px) {
        display: flex;
        :nth-last-child(1) {
            color: red;
        }
        img {
            width: 20px;
            box-sizing: border-box;
        }
    }
`;

export const ConeteInfoStatus = styled.div`
    @media (min-width: 760px) {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`;

export const ConteInfoServicoSoli = styled.div`
    @media (min-width: 760px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0 0 20px 0;
        > h2 {
            color: #000036;
            margin: 20px 0 0 0;
        }

        > h3 {
            color: #000036;
            margin: 20px 0 0 0;
        }
        > p {
            height: 70px;
            margin: 10px 0;
            text-align: justify;
        }
        > span {
            font-size: 1.3em;
            font-weight: 600;
        }
    }
`;

export const ConteInfoCliente = styled.h3`
    @media (min-width: 760px) {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 1.5em;
        font-weight: 800;
        p {
            margin-left: 8px;
            font-size: 0.8em;
            color: black;
            font-weight: 500;
        }
    }
`;

export const ConteInfoServico = styled.div`
    @media (min-width: 760px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0 0 20px 0;
        h2 {
            color: #000036;
            margin: 20px 0 0 0;
        }

        h3 {
            color: #000036;
            margin: 20px 0 0 0;
        }
        p {
            height: 70px;
            margin: 10px 0;
            text-align: justify;
        }
        span {
            font-size: 1.3em;
            font-weight: 600;
        }
    }
`;

export const ConteCardImg = styled.div`
    @media (min-width: 760px) {
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        background-color: #e0e0e0;
        border-radius: 10px;
        img {
            width: 100%;
            box-sizing: border-box;
        }
    }
`;

export const ConteCardSolicitacao = styled.div`
    @media (min-width: 760px) {
        width: 100%;
        margin: 30px 0 0 0;
        background-color: white;
        display: flex;
        justify-content: flex-start;
        border: 1px solid #708090;
        border-radius: 8px 8px 0 0;
        p {
            font-size: 1.4em;
            font-weight: 600;
            line-height: 1.4em;
            color: #000036;
        }
        img {
            width: 30px;
            cursor: pointer;
        }
        div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 5px 15px;
            border-left: 2px solid #708090;
            :nth-child(1) {
                border-left: 0;
            }
        }
    }
`;

export const DivServicoSolicitacao = styled.div`
    @media (min-width: 760px) {
        width: 30%;
    }
`;
export const DivTecnicoSolicitacao = styled.div`
    @media (min-width: 760px) {
        width: 35%;
    }
`;
export const DivStatusSolicitacao = styled.div`
    @media (min-width: 760px) {
        width: 15%;
    }
`;
export const DivAcaoSolicitacao = styled.div`
    @media (min-width: 760px) {
        width: 20%;
    }
`;

export const ConteCardServicoSolicitacao = styled.div`
    @media (min-width: 760px) {
        width: 100%;
        margin: 15px 0;
        background-color: white;
        display: flex;
        justify-content: flex-start;
        border: 1px solid #708090;
        p {
            font-size: 1em;
            font-weight: 400;
            line-height: 1.2em;
            color: black;
        }
        div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 15px;
            border-left: 2px solid #708090;
            :nth-child(1) {
                border-left: 0;
            }

            :nth-last-child(1) {
                p {
                    width: 100%;
                    text-align: center;
                    font-weight: 600;
                    cursor: pointer;
                    :hover {
                        color: green;
                    }
                }
            }
        }
    }
`;

export const ConteBtn = styled.div`
    @media (min-width: 760px) {
        display: flex;
    }
`;

export const ConteStatus = styled.p`
    @media (min-width: 760px) {
        position: static;
        background-color: ${(props) =>
            props.color == "red"
                ? "red"
                : props.color == "yellow"
                ? "yellow"
                : props.color == "green"
                ? "green"
                : props.color == "blue" && "blue"};
        padding: 3px 6px;
        border-radius: 10px;
        color: ${(props) =>
            props.color == "red"
                ? "white"
                : props.color == "yellow"
                ? "black"
                : props.color == "green"
                ? "white"
                : props.color == "blue" && "white"};
        font-size: 0.8em;
        font-weight: 600;
        box-sizing: border-box;
    }
`;

export const ConteCardServicoSolicitTec = styled.div`
    @media (min-width: 760px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 300px;
        box-sizing: border-box;
        border: 2px solid rgb(46, 52, 59, 0.5);
        padding: 10px;
        border-radius: 10px;
        background-color: white;
        :hover {
            border: 2px solid #e84a05;
        }
    }
`;
