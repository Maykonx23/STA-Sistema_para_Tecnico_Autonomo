import { useHistory } from 'react-router-dom';
import { HeaderTecnico } from '../../Components/Header/Tecnico';

export const Tecnicoindex = ({ token }) => {
    const history = useHistory();
    if (!token) {
        history.push('/');
    }

    return (
        <>
            <HeaderTecnico token={token} />
        </>
    );
};
