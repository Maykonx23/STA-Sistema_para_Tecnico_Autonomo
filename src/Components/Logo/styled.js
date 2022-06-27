import styled from "styled-components";

export const ConteLogo = styled.div`
    h2 {
        color: white;
    }
    @media (min-width: 760px) {
        width: 100%;
        h2 {
            font-weight: bold;
            font-size: 2em;
            text-shadow: 1px 3px 2px black;
        }
    }
`;

export const ConteLogoLC = styled.div`
    h2 {
        color: white;
    }
    @media (min-width: 320px) and (max-width: 759px) {
        h2 {
            text-align: center;
            font-weight: bold;
            font-size: 1.2em;
            text-shadow: 1px 3px 2px black;
        }
    }

    @media (min-width: 760px) {
        h2 {
            font-weight: bold;
            font-size: 2em;
            text-shadow: 1px 3px 2px black;
        }
    }
`;
