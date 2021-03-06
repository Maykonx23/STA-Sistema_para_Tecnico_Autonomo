import styled from "styled-components";

export const ConteInfoServico = styled.div`
    @media (min-width: 320px) and (max-width: 759px) {
        width: 100%;
        height: 100%;
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(0, 0, 0, 0.5);
    }
    @media (min-width: 760px) {
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-color: rgb(0, 0, 0, 0.5);
    }
`;

export const ConteDescricao = styled.div`
    @media (min-width: 320px) and (max-width: 759px) {
        width: 100%;
        font-size: 1.1em;
        margin: 5px 0;
    }
    @media (min-width: 760px) {
        width: 100%;
        font-size: 1.2em;
        margin: 20px 0;
    }
`;

export const ConteInfoS = styled.div`
    @media (min-width: 320px) and (max-width: 759px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: white;
        border-radius: 10px;
        padding: 10px 30px;
        > h1 {
            font-size: 1.8em;
            margin: 0 0 20px 0;
        }
        > p {
            width: 100%;
            margin: 20px 0;
        }
    }
    @media (min-width: 760px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 40%;
        background-color: white;
        border-radius: 10px;
        padding: 40px;
        > h1 {
            margin: 0 0 20px;
        }
        > p {
            width: 100%;
            margin: 20px 0;
        }
    }
`;

export const ConteBtn = styled.div`
    @media (min-width: 320px) and (max-width: 759px) {
        width: 100%;
        text-align: right;
    }
    @media (min-width: 760px) {
        width: 100%;
        text-align: right;
    }
`;

export const InfoTec = styled.h2`
    @media (min-width: 320px) and (max-width: 759px) {
        width: 100%;
        display: flex;
        align-items: center;
        text-align: right;
        font-size: 1.5em;
        span {
            font-size: 0.9em;
            font-weight: 500;
            margin-left: 10px;
        }
    }
    @media (min-width: 760px) {
        width: 100%;
        display: flex;
        align-items: center;
        font-size: 1.8em;
        span {
            font-size: 1em;
            font-weight: 500;
            margin-left: 10px;
        }
    }
`;

export const InfoServico = styled.div`
    @media (min-width: 320px) and (max-width: 759px) {
        width: 100%;
        display: flex;
        justify-content: space-around;
        h3 {
            margin: 0 30px 20px 0;
            :nth-last-child(1) {
                margin-right: 0;
            }
        }
    }
    @media (min-width: 760px) {
        width: 100%;
        display: flex;
        justify-content: space-around;
        h3 {
            margin: 0 30px 20px 0;
            :nth-last-child(1) {
                margin-right: 0;
            }
        }
    }
`;

export const BtnServico = styled.div`
    @media (min-width: 320px) and (max-width: 759px) {
        display: flex;
        justify-content: space-between;
        button {
            margin-left: 20px;
            :nth-child(1) {
                margin-left: 0px;
            }
        }
    }
    @media (min-width: 760px) {
        display: flex;
        justify-content: space-between;
        button {
            margin-left: 40px;
            :nth-child(1) {
                margin-left: 0px;
            }
        }
    }
`;
