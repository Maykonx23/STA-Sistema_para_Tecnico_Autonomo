import styled from 'styled-components';

export const CardCriarConte = styled.div`
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 20px 40px;
    font-size: 1em;
    font-weight: 700;
    margin-bottom: 20px;
    background-color: ${props =>
        props.cabecalho ? 'rgb(231, 137, 5)' : 'rgb(105, 62, 2, 0.5)'};

    font-weight: 600;

    color: ${props => (props.cabecalho ? 'white' : 'white')};
    :nth-last-child(1) {
        margin-bottom: 0;
    }
`;

export const ServicoP = styled.p`
    width: 250px;
    font-size: 1.2em;
    margin: 0;
    padding: 0;
    font-weight: 800;
`;

export const DescricaoP = styled.p`
    width: 300px;
    margin: 0;
    padding: 0;
`;

export const TempoP = styled.p`
    width: 200px;
    margin: 0;
    padding: 0;
`;

export const PrecoP = styled.p`
    width: 200px;
    margin: 0;
    padding: 0;
`;

export const AcaoP = styled.div`
    display: flex;
    justify-content: center;
    width: 150px;
    margin: 0;
    padding: 0;
    p {
        margin: 0;
        padding: 0;
        margin-right: 30px;
        cursor: pointer;
        :nth-last-child(1) {
            margin-right: 0px;
        }
        :hover {
            color: ${props => (props.cabecalho ? 'white' : 'black')};
        }
    }
`;
