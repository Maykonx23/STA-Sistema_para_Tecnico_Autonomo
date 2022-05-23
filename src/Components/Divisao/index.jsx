import { Div, DivMenu } from "./styled";

export const Divisao = ({ login, menu }) => {
    return (
        <>
            {login && <Div />}
            {menu && <DivMenu />}
        </>
    );
};
