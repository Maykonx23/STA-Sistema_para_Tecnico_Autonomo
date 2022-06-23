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
}) => {
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
                        {/*<ul>
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
                        </ul>*/}
                    </ConteErroInfo>
                    <ConteStatusSolicitacao />
                </ConteErrorSolicitacao>
            )}
        </>
    );
};
