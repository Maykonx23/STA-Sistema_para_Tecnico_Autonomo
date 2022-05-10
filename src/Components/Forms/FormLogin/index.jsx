import { useForm } from 'react-hook-form';
import { Button } from '../../Buttons';
import { Close } from '../../Close/Close';
import { Input } from '../../Inputs';
import { Span } from '../../Span';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './style.css';

export const Login = ({ classe, CloseForm }) => {
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
        console.log(data);
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
