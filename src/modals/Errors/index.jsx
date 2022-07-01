import { useContext } from "react";
import { CadastroContext } from "../../Providers/Cadastrar";
import { RoutesContext } from "../../Providers/Routes";
import {
    ConteErroInfo,
    ConteErrorLogin,
    ConteErrorSolicitacao,
    ConteStatus,
    ConteStatusSolicitacao,
} from "./styled";

export const ErrosGeral = ({
    children,
    login,
    loginEmail,
    loginSenha,
    loginApi,
    solicitacaoFeita,
    cadastro,
    erroCad,
    cadastroCep,
    apiErrorCad,
}) => {
    const { cadastrarUser, cepError } = useContext(CadastroContext);
    return (
        <>
            {login && (
                <ConteErrorLogin>
                    <ConteErroInfo>
                        <ul>
                            {loginEmail && (
                                <>
                                    <li>{loginEmail.message}</li>
                                </>
                            )}
                            {loginSenha && <li>{loginSenha.message}</li>}
                            {loginApi && (
                                <>
                                    <li>{loginApi.message}</li>
                                </>
                            )}
                        </ul>
                    </ConteErroInfo>
                    <ConteStatus />
                </ConteErrorLogin>
            )}
            {solicitacaoFeita && (
                <ConteErrorSolicitacao>
                    <ConteErroInfo>
                        <p>{children}</p>
                    </ConteErroInfo>
                    <ConteStatusSolicitacao />
                </ConteErrorSolicitacao>
            )}
            {cadastro && (
                <ConteErrorLogin>
                    <ConteErroInfo>
                        <ul>
                            {erroCad.name && (
                                <>
                                    <li>{erroCad.name.message}</li>
                                </>
                            )}
                            {erroCad.email && (
                                <>
                                    <li>{erroCad.email.message}</li>
                                </>
                            )}
                            {erroCad.password && (
                                <>
                                    <li>{erroCad.password.message}</li>
                                </>
                            )}
                            {erroCad.confirmPassword && (
                                <>
                                    <li>{erroCad.confirmPassword.message}</li>
                                </>
                            )}
                            {erroCad.cpf && (
                                <>
                                    <li>{erroCad.cpf.message}</li>
                                </>
                            )}
                            {erroCad.telefone && (
                                <>
                                    <li>{erroCad.telefone.message}</li>
                                </>
                            )}
                            {erroCad.data_nasc && (
                                <>
                                    <li>{erroCad.data_nasc.message}</li>
                                </>
                            )}
                            {erroCad.cep && (
                                <>
                                    <li>{erroCad.cep.message}</li>
                                </>
                            )}
                        </ul>
                    </ConteErroInfo>
                    <ConteStatus />
                </ConteErrorLogin>
            )}
            {cadastroCep && (
                <ConteErrorLogin>
                    <ConteErroInfo>
                        <ul>
                            <li>{children}</li>
                        </ul>
                    </ConteErroInfo>
                    <ConteStatus />
                </ConteErrorLogin>
            )}
            {apiErrorCad && (
                <ConteErrorLogin>
                    <ConteErroInfo>
                        <ul>
                            <li>{children}</li>
                        </ul>
                    </ConteErroInfo>
                    <ConteStatus />
                </ConteErrorLogin>
            )}
        </>
    );
};
