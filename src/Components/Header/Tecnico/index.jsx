import "../style.css";
import { Span } from "../../Span";
import { Img } from "../../Img";
import ImgPerfil from "../../../Imgs/perfil.png";

export const HeaderTecnico = () => {
  return (
    <header>
      <section className="Logo">
        <h1>STA - Sistema para Técnicos Autônomo</h1>
      </section>
      <section className="menu-home">
        <Span classe="menu-span">Dashboard</Span>
        <Span classe="menu-span">Serviços</Span>
        <Span classe="menu-span">Criar Serviço</Span>
        <Span classe="menu-span">Relatório</Span>
        <div className="perfil">
          <Span classe="menu-span">Perfil</Span>
          <div className="img-perfil">
            <Img Imagem={ImgPerfil} />
          </div>
        </div>
      </section>
    </header>
  );
};
