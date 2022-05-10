import { HeaderIndex } from '../Components/Header/Index';
import { useState } from 'react';
import { Login } from '../Components/Forms/FormLogin';
import { Cadastro } from '../Components/Forms/FormCad';

export const Index = () => {
    const [statusLogin, setStatusLogin] = useState(false);
    const [statusCad, setStatusCad] = useState(false);

    const StatusLog = () => {
        if (statusCad) {
            setStatusLogin(true);
            setStatusCad(false);
        } else {
            setStatusLogin(true);
        }
    };

    const StatusCad = () => {
        if (statusLogin) {
            setStatusLogin(false);
            setStatusCad(true);
        } else {
            setStatusCad(true);
        }
    };
    const CloseForm = () => {
        if (statusLogin === true || statusCad === true) {
            setStatusLogin(false);
            setStatusCad(false);
        }
    };

    return (
        <>
            <HeaderIndex
                StatusCad={StatusCad}
                StatusLog={StatusLog}
            ></HeaderIndex>
            {statusLogin ? (
                <Login classe="form-login" CloseForm={CloseForm} />
            ) : (
                <Login classe="move-sair" />
            )}
            {statusCad ? (
                <Cadastro classe="container-cadastro" CloseForm={CloseForm} />
            ) : (
                <Cadastro classe="move-sair" />
            )}
        </>
    );
};
