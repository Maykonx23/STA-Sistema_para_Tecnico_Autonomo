import { useContext } from "react";
import { RoutesContext } from "../../../Providers/Routes";
import { Span } from "../../Span";
import { SpanBtn } from "../../Span/SpanBtn";
import "../style.css";

export const HeaderIndex = ({ StatusLog, StatusCad }) => {
    return (
        <header>
            <section className="Logo">
                <h1>STA - Sistema para Técnicos Autônomo</h1>
            </section>
            <section className="menu-home">
                <Span classe="menu-span">Sobre</Span>
                <Span classe="menu-span">Equipe</Span>
                <SpanBtn Status={StatusLog} classe="menu-span">
                    Login
                </SpanBtn>
                <SpanBtn Status={StatusCad} classe="menu-span">
                    Cadastre-se
                </SpanBtn>
            </section>
        </header>
    );
};
