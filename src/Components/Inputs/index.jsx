import { InputLogin, InputPerfil, InputPesquisaServ } from "./styled";
import InputMask from "react-input-mask";

export const Input = ({
    classe,
    type,
    children,
    register,
    name,
    login,
    info,
    pesquisaServico,
    criarServico,
    editarServico,
    value,
}) => {
    return (
        <>
            {login && (
                <>
                    {register ? (
                        <InputLogin
                            {...register(name)}
                            className={classe}
                            type={type}
                            placeholder={children}
                        />
                    ) : (
                        <InputLogin
                            className={classe}
                            type={type}
                            placeholder={children}
                        />
                    )}
                </>
            )}

            {info && (
                <>
                    {register ? (
                        <InputPerfil
                            {...register(name)}
                            className={classe}
                            type={type}
                            placeholder={children}
                        />
                    ) : (
                        <InputPerfil
                            className={classe}
                            type={type}
                            placeholder={children}
                        />
                    )}
                </>
            )}
            {pesquisaServico && (
                <>
                    {register ? (
                        <InputPesquisaServ
                            {...register(name)}
                            className={classe}
                            type={type}
                            placeholder={children}
                        />
                    ) : (
                        <InputPesquisaServ
                            className={classe}
                            type={type}
                            placeholder={children}
                        />
                    )}
                </>
            )}

            {criarServico && (
                <>
                    {register ? (
                        <InputPesquisaServ
                            {...register(name)}
                            className={classe}
                            type={type}
                            placeholder={children}
                        />
                    ) : (
                        <InputPesquisaServ
                            className={classe}
                            type={type}
                            placeholder={children}
                        />
                    )}
                </>
            )}

            {editarServico && (
                <>
                    {value ? (
                        <>
                            {register ? (
                                <InputPesquisaServ
                                    {...register(name)}
                                    className={classe}
                                    type={type}
                                    defaultValue={value}
                                    placeholder={children}
                                />
                            ) : (
                                <InputPesquisaServ
                                    className={classe}
                                    type={type}
                                    defaultValue={value}
                                    placeholder={children}
                                />
                            )}
                        </>
                    ) : (
                        <>
                            {register ? (
                                <InputPesquisaServ
                                    {...register(name)}
                                    className={classe}
                                    type={type}
                                    placeholder={children}
                                />
                            ) : (
                                <InputPesquisaServ
                                    className={classe}
                                    type={type}
                                    placeholder={children}
                                />
                            )}
                        </>
                    )}
                </>
            )}
        </>
    );
};
