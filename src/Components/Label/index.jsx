export const Label = ({ children, solitacaoTec, criarServico, editar }) => {
    return (
        <>
            {solitacaoTec && <label>{children}</label>}
            {criarServico && <label>{children}</label>}
            {editar && <label>{children}</label>}
        </>
    );
};
