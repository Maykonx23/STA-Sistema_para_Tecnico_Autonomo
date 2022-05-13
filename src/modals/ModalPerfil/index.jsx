import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { ModalPerfilConte, ModalPerfilDivis, ModalPerfilOpcao } from './style';

export const ModalPerfil = ({ status, funcLogout, funcPerfil }) => {
    return (
        <>
            {status && (
                <ModalPerfilConte>
                    <ModalPerfilOpcao onClick={funcPerfil}>
                        Editar Perfil
                    </ModalPerfilOpcao>
                    <ModalPerfilDivis />
                    <ModalPerfilOpcao>Configuração</ModalPerfilOpcao>
                    <ModalPerfilDivis />
                    <ModalPerfilOpcao onClick={funcLogout}>
                        Logout
                    </ModalPerfilOpcao>
                </ModalPerfilConte>
            )}
        </>
    );
};
