import { ConteLogo, ConteLogoLC } from "./styled";

export const Logo = ({ index, login, cadastro, cliente }) => {
    return (
        <>
            {index && (
                <ConteLogo>
                    <h2>STA - Sistema para Técnicos Autônomo</h2>
                </ConteLogo>
            )}
            {(login || cadastro) && (
                <ConteLogoLC>
                    <h2>STA - Sistema para Técnicos Autônomo</h2>
                </ConteLogoLC>
            )}
            {cliente && (
                <ConteLogoLC>
                    <h2>STA - Sistema para Técnicos Autônomo</h2>
                </ConteLogoLC>
            )}
        </>
    );
};
