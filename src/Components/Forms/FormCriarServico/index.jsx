import { Button } from '../../Buttons';
import { Input } from '../../Inputs';
import './style.css';

export const FormCriarServico = () => {
    return (
        <form className="container-criar">
            <div className="info-criar">
                <div className="inputs-criar">
                    <label>Titulo</label>
                    <Input type="text"></Input>
                </div>
                <div className="inputs-criar">
                    <label>Tempo Medio</label>
                    <Input type="date"></Input>
                </div>
            </div>
            <div className="inputs">
                <label>Descrição</label>
                <Input type="text"></Input>
            </div>
            <Button type="submit" classe="btn-criar">
                Criar
            </Button>
        </form>
    );
};
