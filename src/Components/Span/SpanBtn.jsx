import './style.css';

export const SpanBtn = ({ children, classe, Status }) => {
    return (
        <span onClick={Status} className={classe}>
            {children}
        </span>
    );
};
