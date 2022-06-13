import styled from "styled-components";

export const BtnMenu = styled.button`
    @media (min-width: 760px) {
        padding: 5px 10px;
        font-size: 1.3em;
        color: #000036;
        border: none;
        font-weight: 1000;
        background-color: transparent;
        box-sizing: border-box;
        cursor: pointer;
        :hover {
            color: #000060;
        }
    }
`;

export const BtnMenuL = styled.button`
    @media (min-width: 760px) {
        box-sizing: border-box;
        padding: 5px 10px;
        font-size: 1.3em;
        color: #b22222;
        border: 2px solid #b22222;
        font-weight: 1000;
        background-color: transparent;
        margin: 40px 0;
        border-radius: 10px;
        cursor: pointer;
        :hover {
            color: #aa422f;
            border-color: #aa422f;
        }
    }
`;

export const BtnHamburg = styled.button`
    @media (min-width: 760px) {
        position: absolute;
        left: 3%;
        background-color: transparent;
        border: 1px solid transparent;
        border-radius: 10px;
        box-sizing: border-box;
        cursor: pointer;
        img {
            width: 35px;
            :hover {
                width: 40px;
            }
        }

        animation-name: openH;
        animation-duration: 2s;
        animation-fill-mode: backwards;

        @keyframes openH {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
    }
`;

export const BtnClose = styled.button`
    @media (min-width: 760px) {
        padding: 0;
        background-color: transparent;
        border: 1px solid transparent;
        border-radius: 10px;
        text-align: right;
        box-sizing: border-box;
        cursor: pointer;
        img {
            width: 35px;
        }
    }
`;

export const BtnH = styled.div`
    @media (min-width: 760px) {
        width: 100%;
        display: flex;
        box-sizing: border-box;
        cursor: pointer;
        button {
            color: #000036;
            font-size: 2em;
            font-weight: 700;
            background-color: transparent;
            border: none;
            box-sizing: border-box;
            cursor: pointer;

            :hover {
                color: #000060;
            }
        }
    }
`;

export const BtnDrop = styled.button`
    @media (min-width: 760px) {
        color: #f1f227;
        font-size: 1.2em;
        font-weight: 700;
        background-color: transparent;
        border: none;
        box-sizing: border-box;
        cursor: pointer;

        :hover {
            color: #fefefe;
        }
    }
`;

export const BtnEdit = styled.button`
    @media (min-width: 760px) {
        color: #000036;
        font-size: 1.2em;
        font-weight: 700;
        background-color: transparent;
        border: 1px solid #000036;
        border-radius: 10px;
        box-sizing: border-box;
        padding: 10px 20px;
        cursor: pointer;

        :hover {
            color: #fefefe;
            background-color: #000036;
        }
    }
`;

export const BtnVoltar = styled.div`
    @media (min-width: 760px) {
        width: 100%;
        text-align: right;
        button {
            color: #000036;
            font-size: 1.2em;
            font-weight: 700;
            background-color: transparent;
            border: 1px solid #000036;
            border-radius: 10px;
            box-sizing: border-box;
            padding: 10px 20px;
            cursor: pointer;

            :hover {
                color: #fefefe;
                background-color: #000036;
            }
        }
    }
`;

export const BtnFilterServico = styled.div`
    @media (min-width: 760px) {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border: 2px solid transparent;
        border-radius: 10px;
        padding: 2px 4px;
        background-color: #d99607;
        cursor: pointer;
        :hover {
            border: 2px solid rgb(194, 115, 4, 10);
        }
        button {
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            background-color: transparent;
            font-size: 1.2em;
            font-weight: 600;
            color: white;
            cursor: pointer;
            img {
                width: 30px;
            }
        }
    }
`;

export const BtnSolicitar = styled.div`
    @media (min-width: 760px) {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border: 2px solid transparent;
        border-radius: 10px;
        padding: 2px 4px;
        background-color: #d99607;
        cursor: pointer;
        :hover {
            border: 2px solid rgb(194, 115, 4, 10);
        }
        button {
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            background-color: transparent;
            font-size: 1.2em;
            font-weight: 600;
            color: white;
            cursor: pointer;
            img {
                width: 30px;
            }
        }
    }
`;

export const BtnSolicitarServico = styled.button`
    @media (min-width: 760px) {
        box-sizing: border-box;
        cursor: pointer;
        display: flex;
        padding: 10px 20px;
        align-items: center;
        justify-content: center;
        border: 2px solid transparent;
        font-size: 1.4em;
        font-weight: 600;
        background-color: rgb(141, 103, 8);
        color: white;
        border-radius: 10px;
        cursor: pointer;
        :hover {
            border: 2px solid rgb(141, 103, 8);
            color: rgb(141, 103, 8);
            background-color: transparent;
        }
    }
`;

export const BtnCancelarServico = styled.button`
    @media (min-width: 760px) {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid transparent;
        background-color: transparent;
        font-size: 1.2em;
        font-weight: 600;
        color: #fefefe;
        background-color: #000036;
        border-radius: 10px;
        cursor: pointer;
        padding: 10px 20px;
        :hover {
            color: #000036;
            border: 2px solid #000036;
            background-color: transparent;
        }
    }
`;

export const BtnCriarService = styled.button`
    @media (min-width: 760px) {
        cursor: pointer;
        display: flex;
        padding: 10px 15px;
        align-items: center;
        justify-content: center;
        border: 2px solid transparent;
        background-color: transparent;
        font-size: 1.5em;
        font-weight: 600;
        background-color: rgb(194, 115, 4, 10);
        border-radius: 10px;
        color: white;
        cursor: pointer;
        img {
            width: 30px;
        }
        :hover {
            border: 2px solid rgb(194, 115, 4, 10);
            background-color: transparent;
            color: rgb(194, 115, 4, 10);
        }
    }
`;

export const BtnAddCriarService = styled.button`
    @media (min-width: 760px) {
        cursor: pointer;
        display: flex;
        padding: 10px 15px;
        align-items: center;
        justify-content: center;
        border: 2px solid transparent;
        background-color: transparent;
        font-size: 1.5em;
        font-weight: 600;
        background-color: rgb(194, 115, 4, 10);
        border-radius: 10px;
        color: white;
        cursor: pointer;
        img {
            width: 30px;
        }
        :hover {
            border: 2px solid rgb(194, 115, 4, 10);
            background-color: transparent;
            color: rgb(194, 115, 4, 10);
        }
    }
`;

export const BtnCancelar = styled.button`
    @media (min-width: 760px) {
        cursor: pointer;
        display: flex;
        padding: 10px 15px;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: transparent;
        font-size: 1.5em;
        font-weight: 600;
        background-color: #f22613;
        color: white;
        border-radius: 10px;
        border: 2px solid transparent;
        cursor: pointer;
        img {
            width: 30px;
        }
        :hover {
            border: 2px solid rgb(242, 38, 19);
            color: rgb(242, 38, 19);
            background-color: transparent;
        }
    }
`;

export const BtnEnviarM = styled.button`
    @media (min-width: 760px) {
        cursor: pointer;
        display: flex;
        padding: 5px 10px;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: transparent;
        font-size: 1.5em;
        font-weight: 600;
        background-color: #1e8bc3;
        color: white;
        border-radius: 10px;
        border: 2px solid transparent;
        cursor: pointer;
        img {
            width: 30px;
        }
        :hover {
            border: 2px solid rgb(30, 139, 195);
            color: rgb(30, 139, 195);
            background-color: transparent;
        }
    }
`;

export const BtnConcluir = styled.button`
    @media (min-width: 760px) {
        cursor: pointer;
        display: flex;
        padding: 10px 15px;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: transparent;
        font-size: 1.5em;
        font-weight: 600;
        background-color: rgb(0, 170, 0);
        color: white;
        border-radius: 10px;
        border: 2px solid transparent;
        cursor: pointer;
        img {
            width: 30px;
        }
        :hover {
            border: 2px solid rgb(0, 170, 0);
            color: rgb(0, 170, 0);
            background-color: transparent;
        }
    }
`;

export const BtnRejeitar = styled.button`
    @media (min-width: 760px) {
        cursor: pointer;
        display: flex;
        padding: 5px 10px;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: transparent;
        font-size: 1.3em;
        font-weight: 600;
        background-color: #f22613;
        color: white;
        border-radius: 10px;
        border: 2px solid transparent;
        cursor: pointer;
        img {
            width: 30px;
        }
        :hover {
            border: 2px solid rgb(242, 38, 19);
            color: rgb(242, 38, 19);
            background-color: transparent;
        }
    }
`;

export const BtnAceitar = styled.button`
    @media (min-width: 760px) {
        cursor: pointer;
        display: flex;
        padding: 5px 10px;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: transparent;
        font-size: 1.3em;
        font-weight: 600;
        background-color: rgb(0, 170, 0);
        color: white;
        border-radius: 10px;
        border: 2px solid transparent;
        cursor: pointer;
        img {
            width: 30px;
        }
        :hover {
            border: 2px solid rgb(0, 170, 0);
            color: rgb(0, 170, 0);
            background-color: transparent;
        }
    }
`;

export const BtnDetalhe = styled.button`
    @media (min-width: 760px) {
        box-sizing: border-box;
        cursor: pointer;
        display: flex;
        padding: 5px 10px;
        align-items: center;
        justify-content: center;
        border: 2px solid transparent;
        font-size: 1.2em;
        font-weight: 600;
        background-color: #000036;
        color: white;
        border-radius: 10px;
        cursor: pointer;
        img {
            width: 30px;
        }
        :hover {
            border: 2px solid #000036;
            color: #000036;
            background-color: transparent;
        }
    }
`;
