import styled from "styled-components";

export const ConteMenu = styled.div`
    @media (min-width: 760px) {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 0 20px;
        box-sizing: border-box;
        button {
            margin: 0 30px 0 0;
            :nth-last-child(1) {
                margin: 0;
            }
        }
    }
`;

export const ConteMenuCliente = styled.div`
    @media (min-width: 760px) {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 25%;
        height: 100%;
        border-right: 3px outset rgb(5, 24, 42, 0.3);
        background: linear-gradient(#e88b05, #ff7708, #e84a05);
        animation-name: openMenu;
        animation-duration: 1s;
        animation-fill-mode: backwards;

        padding: 10px 20px;
        box-sizing: border-box;
        @keyframes openMenu {
            from {
                transform: translate(-100%);
            }
        }
    }
`;

export const ConteClose = styled.div`
    @media (min-width: 760px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
    }
`;
export const DivClose = styled.div`
    @media (min-width: 760px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        box-sizing: border-box;
        > section {
            button {
                padding: 0;
            }
            div {
            }
            margin: 15px 0 0 0;
            box-sizing: border-box;
            :nth-child(1) {
                margin: 0;
            }
        }
    }
`;

export const InfoUser = styled.div`
    @media (min-width: 760px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        margin: 30px 0 0 0;
        > div {
            padding: 2px;
            border: 3px solid #000060;
            border-radius: 50%;
            box-sizing: border-box;
            display: flex;
            img {
                background-color: white;
                border-radius: 50%;
                box-sizing: border-box;
                width: 100px;
            }
        }
        h1 {
            margin: 20px;
            color: white;
        }
    }
`;

export const DropMenu = styled.div`
    @media (min-width: 760px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin: 10px 0 0 40px;
        button {
            margin: 10px 0 0 0;
            :nth-child(1) {
                margin: 0;
            }
        }
    }
`;
