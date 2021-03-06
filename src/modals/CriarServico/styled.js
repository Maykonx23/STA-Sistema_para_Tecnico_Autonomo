import styled from "styled-components";

export const ModalCriarServConte = styled.div`
    @media (min-width: 320px) and (max-width: 759px) {
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;
        background-color: rgb(0, 0, 0, 0.6);
        > div {
            padding: 40px 30px;
            border-radius: 10px;
            background-color: white;
        }
    }
    @media (min-width: 760px) {
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;
        background-color: rgb(0, 0, 0, 0.6);
        > div {
            padding: 40px 30px;
            border-radius: 10px;
            background-color: white;
        }
    }
`;

export const ModalCriarServForm = styled.form`
    @media (min-width: 320px) and (max-width: 759px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        button {
            margin: 30px 0 0 0;
        }
    }
    @media (min-width: 760px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        button {
            margin: 30px 0 0 0;
        }
    }
`;

export const ConteServicoBtn = styled.div`
    @media (min-width: 320px) and (max-width: 759px) {
        width: 100%;
        text-align: right;
    }
    @media (min-width: 760px) {
        width: 100%;
        text-align: right;
    }
`;

export const ModalCriarServInput = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    :nth-last-child(1) {
        margin-bottom: 0px;
    }
    label {
        font-size: 1.2em;
        font-weight: 600;
        margin-bottom: 20px;
    }
    input {
        width: 300px;
        padding: 20px 20px;
        font-size: 1em;
    }
`;
