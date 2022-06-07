import { useContext } from "react";
import { RoutesContext } from "../../Providers/Routes";
import { ConteLogo, ConteLogoLC } from "./styled";

export const Logo = ({ index, login, cadastro, cliente, tecnico }) => {
    const id = window.localStorage.getItem("@TCC/ID"); // eslint-disable-line
    const { returnIndex, returnHome } = useContext(RoutesContext);
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
                <ConteLogoLC
                    onClick={() => {
                        returnHome(id, "cliente");
                    }}
                >
                    <h2>STA - Sistema para Técnicos Autônomo</h2>
                </ConteLogoLC>
            )}

            {tecnico && (
                <ConteLogoLC
                    onClick={() => {
                        returnHome(id, "tecnico");
                    }}
                >
                    <h2>STA - Sistema para Técnicos Autônomo</h2>
                </ConteLogoLC>
            )}
        </>
    );
};
