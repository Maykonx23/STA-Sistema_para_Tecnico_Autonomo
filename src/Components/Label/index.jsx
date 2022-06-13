import { LabelPerfil } from "./styled";

export const Label = ({
    children,
    solitacaoTec,
    criarServico,
    editar,
    perfil,
}) => {
    return (
        <>
            {solitacaoTec && <label>{children}</label>}
            {criarServico && <label>{children}</label>}
            {editar && <label>{children}</label>}
            {perfil && <LabelPerfil>{children}</LabelPerfil>}
        </>
    );
};
