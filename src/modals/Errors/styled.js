import styled from "styled-components";

export const ConteErrorLogin = styled.div`
    @media (min-width: 760px) {
        position: fixed;
        width: 300px;
        right: 0;
        background-color: white;
        margin: 10px;
        border-radius: 10px;
    }
`;

export const ConteErroInfo = styled.div`
    @media (min-width: 760px) {
        color: red;
        font-size: 1.2em;
        font-weight: 600;
    }
`;

export const ConteStatus = styled.div`
    @media (min-width: 760px) {
        width: 100%;
        height: 10px;
        background-color: red;

        border-radius: 0 0 10px 10px;
    }
`;

export const ConteStatusSolicitacao = styled.div`
    @media (min-width: 760px) {
        width: 100%;
        height: 10px;
        background-color: green;

        border-radius: 0 0 10px 10px;
    }
`;

export const ConteErrorSolicitacao = styled.div`
    @media (min-width: 760px) {
        position: absolute;
        width: 300px;
        top: 8vh;
        right: 0;
        background-color: white;
        margin: 10px;
        border-radius: 10px;
        p {
            margin: 10px;
        }
    }
`;
