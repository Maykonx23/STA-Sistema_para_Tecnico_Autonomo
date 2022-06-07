import {
    AcaoP,
    CardCriarConte,
    DescricaoP,
    PrecoP,
    ServicoP,
    TempoP,
} from "./styled";

export const CardCriar = ({
    elemento,
    id,
    click,
    clickEdit,
    criarServicos,
}) => {
    /* 
    console.log(elemento); */
    /* 
    const excluirServico = () => {
        excluir(true);
    }; */

    return (
        <>
            {elemento ? (
                <>
                    <CardCriarConte>
                        <ServicoP>{elemento.titulo}</ServicoP>
                        <DescricaoP>{elemento.descricao}</DescricaoP>
                        <TempoP>{elemento.mediaTempo}</TempoP>
                        <PrecoP>{elemento.price}</PrecoP>
                        <AcaoP>
                            <p onClick={clickEdit} id={elemento.id}>
                                Editar
                            </p>
                            <p onClick={click} id={elemento.id}>
                                Excluir
                            </p>
                        </AcaoP>
                    </CardCriarConte>
                </>
            ) : (
                <CardCriarConte cabecalho>
                    <ServicoP>SERVIÇO</ServicoP>
                    <DescricaoP>DESCRIÇÃO</DescricaoP>
                    <TempoP>TEMPO</TempoP>
                    <PrecoP>PREÇO</PrecoP>
                    <AcaoP cabecalho>
                        <p>AÇÃO</p>
                    </AcaoP>
                </CardCriarConte>
            )}

            {elemento && criarServicos ? (
                <>
                    <CardCriarConte>
                        <ServicoP>{elemento.titulo}</ServicoP>
                        <DescricaoP>{elemento.descricao}</DescricaoP>
                        <TempoP>{elemento.mediaTempo}</TempoP>
                        <PrecoP>{elemento.price}</PrecoP>
                        <AcaoP>
                            <p onClick={clickEdit} id={elemento.id}>
                                Editar
                            </p>
                            <p onClick={click} id={elemento.id}>
                                Excluir
                            </p>
                        </AcaoP>
                    </CardCriarConte>
                </>
            ) : (
                <CardCriarConte cabecalho>
                    <ServicoP>SERVIÇO</ServicoP>
                    <DescricaoP>DESCRIÇÃO</DescricaoP>
                    <TempoP>TEMPO</TempoP>
                    <PrecoP>PREÇO</PrecoP>
                    <AcaoP cabecalho>
                        <p>AÇÃO</p>
                    </AcaoP>
                </CardCriarConte>
            )}
        </>
    );
};
