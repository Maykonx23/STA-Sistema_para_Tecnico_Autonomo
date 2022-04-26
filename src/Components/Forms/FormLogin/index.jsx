import { Button } from "../../Buttons";
import { Close } from "../../Close/Close";
import { Input } from "../../Inputs";
import { Span } from "../../Span";
import "./style.css";

export const Login = ({ classe, CloseForm }) => {
  return (
    <section className={classe}>
      <div className="form-logar">
        <Close CloseForm={CloseForm} classe="close-form" />
        <h1>Login</h1>
        <form className="login-form">
          <Input type="text" classe="login-input">
            Email
          </Input>
          <Span classe="erro-span"></Span>
          <Input type="password" classe="login-input">
            Senha
          </Input>
          <Span classe="erro-span"></Span>
          <Button type="submit" classe="form-btn">
            Entrar
          </Button>
        </form>
      </div>
    </section>
  );
};
