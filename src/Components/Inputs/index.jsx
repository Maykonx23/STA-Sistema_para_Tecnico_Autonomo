import { InputLogin, InputPerfil, InputPesquisaServ } from "./styled";

export const Input = ({
    classe,
    type,
    children,
    register,
    name,
    login,
    info,
    pesquisaServico,
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
            {/* {register ? (
                <input
                    {...register(name)}
                    className={classe}
                    type={type}
                    placeholder={children}
                />
            ) : (
                <input className={classe} type={type} placeholder={children} />
            )} */}
        </>
    );
};
