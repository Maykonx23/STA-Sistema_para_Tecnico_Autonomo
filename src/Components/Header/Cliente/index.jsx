import '../style.css';
import { Span } from '../../Span';
import { Img } from '../../Img';
import ImgPerfil from '../../../Imgs/perfil.png';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { ModalPerfil } from '../../../modals/ModalPerfil';

export const HeaderClient = () => {
    const history = useHistory();

    const [statusPerfil, setStatusPerfil] = useState(false);

    const statusPerfilFunc = () => {
        if (statusPerfil) {
            setStatusPerfil(false);
        } else {
            setStatusPerfil(true);
        }
    };

    const funcDashboard = () => {
        const id = window.localStorage.getItem('idTcc');
        setStatusPerfil(false);
        history.push(`/cliente/${id}`);
    };

    function funcLogout() {
        window.localStorage.removeItem('authToken');
        window.localStorage.removeItem('idTcc');
        history.push('/');
    }

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
                    <Span classe="menu-span">Solicitação</Span>
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
            <ModalPerfil funcLogout={funcLogout} status={statusPerfil} />
        </>
    );
};
