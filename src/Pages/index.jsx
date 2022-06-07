import { useContext, useState } from "react";
import { Header } from "../Components/Header"; /* 
import { useState } from "react";
import { Login } from "../Components/Forms/FormLogin";
import { Cadastro } from "../Components/Forms/FormCad";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"; */
import { LoginContext } from "../Providers/Login";

export const Index = ({ setToken }) => {
    const [token, settoken] = useState(
        window.localStorage.getItem("@TCC/Token")
    );

    const { typeInfo } = useContext(LoginContext);

    return (
        <>
            <Header page index />
        </>
    );
};
