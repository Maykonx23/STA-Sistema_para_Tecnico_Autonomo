import { useContext, useEffect } from "react";
import { Header } from "../../../Components/Header";
import { Main } from "../../../Components/Main";
import { CriarNewServico } from "../../../modals/CriarServico";
import { Editar } from "../../../modals/Editar";
import { Excluir } from "../../../modals/Excluir";
import { ServicoContext } from "../../../Providers/CriarServico";

export const CriarServico = () => {
    const id = window.localStorage.getItem("@TCC/ID"); // eslint-disable-line
    const { criarServico, listServico, excluirServico, editarServico } =
        useContext(ServicoContext);

    useEffect(() => {
        listServico(id);
    }, [listServico]);
    return (
        <>
            {editarServico && <Editar servico />}
            {excluirServico && <Excluir servico />}
            {criarServico && <CriarNewServico />}
            <Header tecnico />
            <Main CriarServico />
        </>
    );
};
