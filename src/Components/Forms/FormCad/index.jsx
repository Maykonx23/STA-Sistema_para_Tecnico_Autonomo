import { Button } from "../../Buttons";
import { Close } from "../../Close/Close";
import { Input } from "../../Inputs";
import { Span } from "../../Span";
import "./style.css";

export const Cadastro = ({ CloseForm, classe }) => {
  return (
    <div className={classe}>
      <div className="form-cadastrar">
        <Close CloseForm={CloseForm} classe="close-form" />
        <h1>Cadastro</h1>
        <form className="cadastro-form">
          <div className="cadastro-inputs">
            <div className="container-input-span">
              <Input classe="form-input" type="text">
                Nome Completo
              </Input>
              <Span classe="erro-span"></Span>
            </div>
            <div className="container-input-span">
              <Input classe="form-input" type="text">
                Email
              </Input>
              <Span classe="erro-span"></Span>
            </div>
            <div className="container-input-span">
              <Input classe="form-input" type="text">
                Senha
              </Input>
              <Span classe="erro-span"></Span>
            </div>
            <div className="container-input-span">
              <Input classe="form-input" type="text">
                Confirmar Senha
              </Input>
              <Span classe="erro-span"></Span>
            </div>
            <div className="container-input-span">
              <Input classe="form-input" type="text">
                CPF
              </Input>
              <Span classe="erro-span"></Span>
            </div>
            <div className="container-input-span">
              <Input classe="form-input" type="text">
                Telefone
              </Input>
              <Span classe="erro-span"></Span>
            </div>
            <div className="container-input-span">
              <Input classe="form-input" type="date">
                Data Nascimento
              </Input>
              <Span classe="erro-span"></Span>
            </div>
            <div className="container-input-span">
              <Input classe="form-input" type="text">
                CEP
              </Input>
              <Span classe="erro-span"></Span>
            </div>
          </div>
          <Button type="submit" classe="form-btn">
            Cadastrar
          </Button>
        </form>
      </div>
    </div>
  );
};
