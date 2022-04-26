import "./style.css";

export const Input = ({ classe, type, children }) => {
  return <input className={classe} type={type} placeholder={children} />;
};
