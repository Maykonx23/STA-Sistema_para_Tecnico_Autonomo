import "./index.css";

export const Close = ({ classe, CloseForm }) => {
  return (
    <div onClick={CloseForm} className={classe}>
      <div className="div-esquerda"></div>
      <div className="div-direita"></div>
    </div>
  );
};
