import './style.css';

export const Button = ({ children, classe, type }) => {
    return (
        <button type={type} className={classe}>
            {children}
        </button>
    );
};
