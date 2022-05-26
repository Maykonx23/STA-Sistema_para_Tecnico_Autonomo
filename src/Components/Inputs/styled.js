import styled from "styled-components";

export const InputLogin = styled.input`
    @media (min-width: 760px) {
        font-size: 1.6em;
        padding: 10px 20px;
        border: 2px solid #05182a;
        border-radius: 10px;
        outline: none;
        background-color: #05182a;
        color: white;
        ::placeholder {
            color: #95aaaa;
        }
    }
`;

export const InputPerfil = styled.input`
    @media (min-width: 760px) {
        width: 100%;
        font-size: 1.6em;
        padding: 10px 20px;
        border: 2px solid #05182a;
        border-radius: 10px;
        outline: none;
        background-color: #05182a;
        color: white;
        ::placeholder {
            color: #95aaaa;
        }
    }
`;

export const InputPesquisaServ = styled.input`
    @media (min-width: 760px) {
        font-size: 1.6em;
        padding: 5px 15px;
        border: 2px solid #05182a;
        border-radius: 10px;
        outline: none;
        background-color: white;
        color: black;
        ::placeholder {
            color: #95aaaa;
        }
    }
`;
