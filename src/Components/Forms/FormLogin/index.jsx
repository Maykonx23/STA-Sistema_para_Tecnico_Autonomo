import { useForm } from 'react-hook-form';
import { Button } from '../../Buttons';
import { Close } from '../../Close/Close';
import { Input } from '../../Inputs';
import { Span } from '../../Span';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './style.css';
import { useHistory } from 'react-router-dom';
import apiTcc from '../../../APIs/TCC-STA';

export const Login = ({ classe, CloseForm, setToken }) => {
    const history = useHistory();
    const formSchema = yup.object().shape({
        email: yup.string().email().required('Campo Obrigatório*'),
        password: yup.string().required('Campo Obrigatório*'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(formSchema) });

    const onSubmitFunc = data => {
        apiTcc
            .post('/sessions', data)
            .then(response => {
                window.localStorage.clear();
                window.localStorage.setItem('authToken', response.data.token);

                setToken(response.data.token);

                if (response.data.cliente.nivel === 'cliente') {
                    window.localStorage.setItem(
                        'idTcc',
                        response.data.cliente.id,
                    );
                    history.push(`/cliente/${response.data.cliente.id}`);
                }

                if (response.data.cliente.nivel === 'tecnico') {
                    apiTcc
                        .get(`/tecnicos/clientes/${response.data.cliente.id}`)
                        .then(res => {
                            /* 
                            console.log(res.data[0].id); */
                            window.localStorage.setItem(
                                'idTcc',
                                res.data[0].id,
                            );
                            history.push(`/tecnico/${res.data[0].id}`);
                        })
                        .catch(err => console.log(err));
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <section onSubmit={handleSubmit(onSubmitFunc)} className={classe}>
            <div className="form-logar">
                <Close CloseForm={CloseForm} classe="close-form" />
                <h1>Login</h1>
                <form className="login-form">
                    <Input
                        register={register}
                        name="email"
                        type="text"
                        classe="login-input"
                    >
                        Email
                    </Input>
                    <Span classe="erro-span">{errors.name?.message}</Span>
                    <Input
                        register={register}
                        name="password"
                        type="password"
                        classe="login-input"
                    >
                        Senha
                    </Input>
                    <Span classe="erro-span">{errors.password?.message}</Span>
                    <Button type="submit" classe="form-btn">
                        Entrar
                    </Button>
                </form>
            </div>
        </section>
    );
};
