import styled from 'styled-components';

export const ContePerfilTec = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 40px 150px;
`;

export const ContePerfilTecImg = styled.div`
    width: 150px;
    height: 150px;
    border: 2px solid black;
    border-radius: 50%;
    margin-bottom: 20px;
    img {
        width: 100%;
        border-radius: 50%;
    }
`;

export const ContePerfilSpan = styled.span`
    font-weight: 700;
    margin-bottom: 50px;
`;

export const ContePerfilTecForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContePerfilInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
    :nth-last-child(1) {
        margin-bottom: 0;
    }
    label {
        font-size: 1.2em;
        font-weight: 700;
        margin-bottom: 20px;
    }
`;
