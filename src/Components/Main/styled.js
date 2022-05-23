import styled from "styled-components";

export const ConteMain = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 40px 190px;
    width: 100%;
    height: 92vh;
    box-sizing: border-box;
    border: 1px solid red;
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
        justify-content: center;
        align-items: center;
        flex-direction: column;
        box-sizing: border-box;
    }
`;

export const ContePerfil = styled.div`
    @media (min-width: 760px) {
        display: flex;
    }
`;

export const DivImg = styled.div`
    @media (min-width: 760px) {
        display: flex;
    }
`;
