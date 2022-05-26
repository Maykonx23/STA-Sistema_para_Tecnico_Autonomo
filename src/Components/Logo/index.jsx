import { useContext } from "react";
import { RoutesContext } from "../../Providers/Routes";
import { ConteLogo, ConteLogoLC } from "./styled";

export const Logo = ({ index, login, cadastro, cliente }) => {
    const { returnIndex } = useContext(RoutesContext);
    return (
        <>
            {index && (
                <ConteLogo onClick={returnIndex}>
                    <h2>STA - Sistema para Técnicos Autônomo</h2>
                </ConteLogo>
            )}
            {(login || cadastro) && (
                <ConteLogoLC onClick={returnIndex}>
                    <h2>STA - Sistema para Técnicos Autônomo</h2>
                </ConteLogoLC>
            )}
            {cliente && (
                <ConteLogoLC onClick={returnIndex}>
                    <h2>STA - Sistema para Técnicos Autônomo</h2>
                </ConteLogoLC>
            )}
        </>
    );
};
