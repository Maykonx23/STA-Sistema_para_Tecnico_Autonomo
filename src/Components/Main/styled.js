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
