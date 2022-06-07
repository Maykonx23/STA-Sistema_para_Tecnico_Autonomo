import { createContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const RoutesContext = createContext();

export const RoutesProvider = ({ children }) => {
    const history = useHistory();

    const returnLogin = () => {
        history.push("/login");
    };
    const returnCadastro = () => {
        history.push("/register");
    };
    const returnIndex = () => {
        history.push("/");
    };
    const returnCliente = (id) => {
        history.push(`/cliente/${id}`);
    };

    const returnTecnico = (id) => {
        history.push(`/tecnico/${id}`);
    };

    const returnLogout = () => {
        window.localStorage.removeItem("@TCC/Token"); // eslint-disable-line
        window.localStorage.removeItem("@TCC/ID"); // eslint-disable-line

        history.push(`/cliente/1`);
        history.push(`/`);
    };

    const returnHome = (id, type) => {
        if (type == "cliente") {
            history.push(`/cliente/${id}`);
        }
        if (type == "tecnico") {
            history.push(`/tecnico/${id}`);
        }
        if (type == "admin") {
            history.push(`/admin/${id}`);
        }
    };

    const returnSolicitacao = (id, type) => {
        if (type == "cliente") {
            history.push(`/cliente/${id}/solicitacao`);
        }
        if (type == "tecnico") {
            history.push(`/tecnico/${id}/solicitacao`);
        }
        if (type == "admin") {
            history.push(`/admin/${id}/solicitacao`);
        }
    };

    const returnPerfil = (id, type) => {
        if (type == "cliente") {
            history.push(`/cliente/${id}/perfil`);
        }
        if (type == "tecnico") {
            history.push(`/tecnico/${id}/perfil`);
        }
        if (type == "admin") {
            history.push(`/admin/${id}/perfil`);
        }
    };

    const returnSolicitacaoTec = (id, type) => {
        if (type == "cliente") {
            history.push(`/cliente/${id}/solicitacao-tecnico`);
        }
    };

    const returnCriarServico = (id, type) => {
        if (type == "tecnico") {
            history.push(`/tecnico/${id}/criar-servico`);
        }
    };
    return (
        <RoutesContext.Provider
            value={{
                returnLogin,
                returnCadastro,
                returnIndex,
                returnCliente,
                returnHome,
                returnSolicitacao,
                returnPerfil,
                returnLogout,
                returnTecnico,
                returnSolicitacaoTec,
                returnCriarServico,
            }}
        >
            {children}
        </RoutesContext.Provider>
    );
};
