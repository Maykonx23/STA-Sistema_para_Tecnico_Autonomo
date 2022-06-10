import styled from "styled-components";

export const ConteMain = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 40px 190px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    h1 {
        width: 100%;
        margin: 0 0 40px 0;
        span {
            font-weight: 800;
            color: #2a2a22;
        }
    }
`;

export const ConteListServico = styled.div`
    @media (min-width: 760px) {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        box-sizing: border-box;
        > div {
            margin: 0 25px 20px 0;
        }
    }
`;

export const ContePerfil = styled.div`
    @media (min-width: 760px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const DivImg = styled.div`
    @media (min-width: 760px) {
        display: flex;
        div {
            border: 1px solid black;
            border-radius: 50%;
            padding: 2px;
            display: flex;
            img {
                width: 150px;
            }
        }
    }
`;

export const DivInfo = styled.form`
    @media (min-width: 760px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 40px 0;
        input {
            margin: 20px 0 0 0;
            :nth-child(1) {
                margin: 0;
            }
        }
        button {
            margin-top: 30px;
        }
    }
`;

export const ConteFormTec = styled.form`
    @media (min-width: 760px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        div {
            display: flex;
            flex-direction: column;
            label {
                margin: 30px 0 15px 0;
                font-size: 1.5em;
                font-weight: 800;
            }
        }
        button {
            margin: 40px 0;
        }
    }
`;

export const MainCriarServico = styled.div`
    @media (min-width: 760px) {
        width: 100%;
        display: flex;
        margin: 0 0 50px 0;
    }
`;

export const ConteListCriarService = styled.div`
    @media (min-width: 760px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        > div {
            margin: 0 30px 30px 0;
        }
    }
`;

export const ContePerfilSolicitacaoTec = styled.div`
    @media (min-width: 760px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        > h1 {
            text-align: center;
        }
        > p {
            font-size: 1.5em;
        }
    }
`;

export const ConteMainSolicitacaoServico = styled.main`
    @media (min-width: 760px) {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 40px 190px;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }
`;

export const ConteSolicitacaoServico = styled.div`
    @media (min-width: 760px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: white;
        border-radius: 15px;
        box-sizing: border-box;
        padding: 0 10% 40px 10%;
        > h3 {
            width: 100%;
            font-size: 1.5em;
            text-align: center;
        }
    }
`;

export const ConteStatus = styled.p`
    @media (min-width: 760px) {
        position: absolute;
        background-color: ${(props) =>
            props.color == "red"
                ? "red"
                : props.color == "yellow"
                ? "yellow"
                : props.color == "green" && "green"};
        padding: 10px 20px;
        border-radius: 10px;
        color: black;
        font-size: 1em;
        font-weight: 900;
        box-sizing: border-box;
        right: 18%;
        top: 20%;
    }
`;

export const InfoServico = styled.div`
    @media (min-width: 760px) {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        h1 {
            margin: 40px 0;
            box-sizing: border-box;
        }
    }
`;

export const ConteInfoTec = styled.div`
    @media (min-width: 760px) {
        width: 100%;
        display: flex;
        font-size: 1.8em;
        font-weight: 600;
        span {
            font-size: 0.9em;
            margin-left: 10px;
            font-weight: 200;
        }
    }
`;

export const ConteInfoDescricao = styled.div`
    @media (min-width: 760px) {
        width: 100%;
        margin: 40px 0;
        font-size: 1.1em;
    }
`;
