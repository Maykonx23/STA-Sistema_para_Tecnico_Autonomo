import styled from "styled-components";

export const ConteHeader = styled.header`
    background: linear-gradient(#e88b05, #ff7708, #e84a05);
    border-bottom: 3px inset #997e42;
    cursor: pointer;
    @media (min-width: 760px) {
        padding: 20px;
        display: flex;
        align-items: center;
    }
`;

export const ConteHeaderLC = styled.header`
    background: linear-gradient(#e88b05, #ff7708, #e84a05);
    border-bottom: 3px inset #997e42;
    cursor: pointer;
    @media (min-width: 320px) and (max-width: 759px) {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
    }
    @media (min-width: 760px) {
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const ConteHeaderCliente = styled.header`
    background: linear-gradient(#e88b05, #ff7708, #e84a05);
    border-bottom: 3px inset #997e42;
    box-sizing: border-box;
    cursor: pointer;
    @media (min-width: 320px) and (max-width: 759px) {
        height: 8vh;
        padding: 40px 0 40px 40px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    @media (min-width: 760px) {
        height: 8vh;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
