import styled from "styled-components";

export const ConteLogin = styled.div`
    @media (min-width: 320px) and (max-width: 759px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 30px 0 0 0;
        box-sizing: border-box;
        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            > h1 {
                font-size: 2em;
                color: #05182a;
                margin-bottom: 10px;
            }
            p {
                font-size: 0.9em;
                font-weight: 700;
                span {
                    color: blue;
                    cursor: pointer;
                }
            }
        }
    }
    @media (min-width: 760px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 80px 0 0 0;
        box-sizing: border-box;
        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            > h1 {
                font-size: 4em;
                color: #05182a;
                margin-bottom: 60px;
            }
            p {
                font-size: 1em;
                font-weight: 700;
                span {
                    color: blue;
                    cursor: pointer;
                }
            }
        }
    }
`;

export const ContePass = styled.div`
    @media (min-width: 320px) and (max-width: 759px) {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 40px -30px 20px 0;
        box-sizing: border-box;
        img {
            width: 30px;
            box-sizing: border-box;
            position: relative;
            left: -48px;
            cursor: pointer;
        }
    }
    @media (min-width: 760px) {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 60px -30px 20px 0;
        box-sizing: border-box;
        img {
            width: 30px;
            box-sizing: border-box;
            position: relative;
            left: -48px;
            cursor: pointer;
        }
    }
`;

export const ConteForm = styled.form`
    @media (min-width: 320px) and (max-width: 759px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media (min-width: 760px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
