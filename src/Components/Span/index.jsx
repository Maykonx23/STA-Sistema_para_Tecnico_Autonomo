import './style.css';

export const Span = ({ children, classe, click }) => {
    return (
        <>
            {click ? (
                <span onClick={click} className={classe}>
                    {children}
                </span>
            ) : (
                <span className={classe}>{children}</span>
            )}
        </>
    );
};
