import styled from "styled-components";

export const ModalExcluirServConte = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: rgb(0, 0, 0, 0.5);
`;

export const ModalCriarServExcluir = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 30px;
    border-radius: 10px;
    background-color: white;
    span {
        font-size: 2em;
        margin-bottom: 20px;
    }
`;

export const ModalCriarServBtn = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    button {
        cursor: pointer;
        margin-left: 20px;
        :nth-child(1) {
            margin-left: 0;
        }
    }
`;

export const ConteExcluirServicoBtn = styled.div`
    @media (min-width: 760px) {
        width: 100%;
        text-align: right;
    }
`;
