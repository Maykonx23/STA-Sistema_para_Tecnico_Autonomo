import './style.css';

export const Button = ({ children, classe, type, click }) => {
    return (
        <>
            {click ? (
                <button onClick={click} type={type} className={classe}>
                    {children}
                </button>
            ) : (
                <button type={type} className={classe}>
                    {children}
                </button>
            )}
        </>
    );
};
