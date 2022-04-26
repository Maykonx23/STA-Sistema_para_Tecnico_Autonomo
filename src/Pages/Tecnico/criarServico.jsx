import "../style.css";
import { HeaderTecnico } from "../../Components/Header/Tecnico";
import { Button } from "../../Components/Buttons";
import { FormCriarServico } from "../../Components/Forms/FormCriarServico";

export const TecnicoCriarServico = () => {
  return (
    <>
      <HeaderTecnico />
      <div className="container-criar-servico">
        <div className="container-form-criar">
          <FormCriarServico />
        </div>
        {/* 
        <div className="criar-servico">
          <Button classe="btn-criar-servico">Adicionar</Button>
              </div> */}
      </div>
    </>
  );
};
