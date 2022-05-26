import { useContext, useState } from "react";
import { Header } from "../../../Components/Header";
import { Main } from "../../../Components/Main";
import { RoutesContext } from "../../../Providers/Routes";

export const TecnicoPerfil = () => {
    const [token, settoken] = useState(
        window.localStorage.getItem("@TCC/Token") // eslint-disable-line
    );

    const { returnIndex } = useContext(RoutesContext);

    if (!token) {
        returnIndex();
    }
    return (
        <>
            <Header tecnico />
            <Main perfilTec />
        </>
    );
};
