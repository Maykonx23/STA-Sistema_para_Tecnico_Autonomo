import { createContext, useState } from "react";

export const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
    const [errorInfo, setErrorInfo] = useState(false);

    const funcErrorInfo = () => {
        if (errorInfo) {
            setErrorInfo(false);
        } else {
            setErrorInfo(true);
        }
    };

    const funcOnErrorInfo = () => {
        setErrorInfo(true);
    };

    const funcOffErrorInfo = () => {
        setErrorInfo(false);
    };

    return (
        <ErrorContext.Provider
            value={{ errorInfo, setErrorInfo, funcErrorInfo, funcOnErrorInfo }}
        >
            {children}
        </ErrorContext.Provider>
    );
};
