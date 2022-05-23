import { InputLogin } from "./styled";

export const Input = ({ classe, type, children, register, name, login }) => {
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
