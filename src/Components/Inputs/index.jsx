import './style.css';

export const Input = ({ classe, type, children, register, name }) => {
    return (
        <>
            {register ? (
                <input
                    {...register(name)}
                    className={classe}
                    type={type}
                    placeholder={children}
                />
            ) : (
                <input className={classe} type={type} placeholder={children} />
            )}
        </>
    );
};
