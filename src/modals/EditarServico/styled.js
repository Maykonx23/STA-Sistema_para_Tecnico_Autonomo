import styled from 'styled-components';

export const ModalEditarServConte = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: rgb(0, 0, 0, 0.6);
`;

export const ModalEditarServForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 40px 30px;
    border-radius: 10px;
    background-color: white;
`;

export const ModalEditarServInput = styled.div`
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
