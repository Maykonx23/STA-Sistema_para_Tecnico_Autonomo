import "./style.css";

export const Span = ({ children, classe, statusLogin }) => {
  return <span className={classe}>{children}</span>;
};
