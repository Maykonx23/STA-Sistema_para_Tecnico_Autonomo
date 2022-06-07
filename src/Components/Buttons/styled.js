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
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: transparent;
        font-size: 1.2em;
        font-weight: 600;
        color: #d99607;
        border: 2px solid rgb(194, 115, 4, 10);
        border-radius: 10px;
        padding: 10px 20px;
        cursor: pointer;
        :hover {
            color: white;
            background-color: #d99607;
        }
    }
`;

export const BtnCancelarServico = styled.button`
    @media (min-width: 760px) {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: transparent;
        font-size: 1.2em;
        font-weight: 600;
        color: #000036;
        border: 1px solid #000036;
        border-radius: 10px;
        cursor: pointer;
        padding: 10px 20px;
        :hover {
            color: #fefefe;
            background-color: #000036;
        }
    }
`;

export const BtnCriarService = styled.button`
    @media (min-width: 760px) {
        cursor: pointer;
        display: flex;
        padding: 0 15px;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: transparent;
        font-size: 1.5em;
        font-weight: 600;
        background-color: transparent;
        border: 2px solid rgb(194, 115, 4, 10);
        color: rgb(194, 115, 4, 10);
        border-radius: 10px;
        cursor: pointer;
        img {
            width: 30px;
        }
        :hover {
            background-color: #d99607;
            color: white;
        }
    }
`;
