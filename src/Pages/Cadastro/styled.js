import styled from "styled-components";

export const ConteCad = styled.div`
    @media (min-width: 320px) and (max-width: 759px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px 0 20px 0;
        box-sizing: border-box;
        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            > h1 {
                font-size: 2em;
                color: #05182a;
                margin-bottom: 20px;
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
    @media (min-width: 760px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 80px 0 80px 0;
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

export const ConteForm = styled.form`
    @media (min-width: 320px) and (max-width: 759px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        input {
            width: 100%;
            margin: 0 0 25px 0;
            filter: wi;
        }
        input[type="date"]::-webkit-calendar-picker-indicator {
            cursor: pointer;
            filter: invert(1);
        }
    }
    @media (min-width: 760px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        > div {
            width: 100%;
            label {
                font-size: 1.2em;
                font-weight: 600;
            }
            input {
                width: 100%;
                margin: 0 0 40px 0;
                filter: white;
            }
            input[type="date"]::-webkit-calendar-picker-indicator {
                cursor: pointer;
                filter: invert(1);
            }
        }
    }
`;
