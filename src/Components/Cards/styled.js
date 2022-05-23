import styled from "styled-components";

export const ConteCard = styled.div`
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
