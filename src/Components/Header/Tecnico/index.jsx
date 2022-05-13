import '../style.css';
import { Span } from '../../Span';
import { Img } from '../../Img';
import ImgPerfil from '../../../Imgs/perfil.png';
import { useHistory } from 'react-router-dom';
import { ModalPerfil } from '../../../modals/ModalPerfil';
import { useState } from 'react';

export const HeaderTecnico = () => {
    const history = useHistory();
    const id = window.localStorage.getItem('idTcc');

    const PageCriarService = () => {
        history.push('/tecnico/criar/servico');
    };

    const [statusPerfil, setStatusPerfil] = useState(false);

    const statusPerfilFunc = () => {
        if (statusPerfil) {
            setStatusPerfil(false);
        } else {
            setStatusPerfil(true);
        }
    };

    const funcDashboard = () => {
        setStatusPerfil(false);
        history.push(`/tecnico/${id}`);
    };

    function funcLogout() {
        window.localStorage.removeItem('authToken');
        window.localStorage.removeItem('idTcc');
        history.push('/');
    }

    const funcPerfil = () => {
        history.push(`/tecnico/${id}/perfil`);
    };

    return (
        <>
            <header>
                <section className="Logo">
                    <h1>STA - Sistema para Técnicos Autônomo</h1>
                </section>
                <section className="menu-home">
                    <Span click={funcDashboard} classe="menu-span">
                        Dashboard
                    </Span>
                    <Span classe="menu-span">Serviços</Span>
                    <Span click={PageCriarService} classe="menu-span">
                        Criar Serviço
                    </Span>
                    <Span classe="menu-span">Relatório</Span>
                    <div className="perfil">
                        <Span click={statusPerfilFunc} classe="menu-span">
                            Perfil
                        </Span>
                        <div className="img-perfil">
                            <Img Imagem={ImgPerfil} />
                        </div>
                    </div>
                </section>
            </header>
            <ModalPerfil
                funcPerfil={funcPerfil}
                funcLogout={funcLogout}
                status={statusPerfil}
            />
        </>
    );
};
