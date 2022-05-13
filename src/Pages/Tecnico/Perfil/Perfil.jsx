import { useEffect, useState } from 'react';
import apiTcc from '../../../APIs/TCC-STA';
import { HeaderTecnico } from '../../../Components/Header/Tecnico';
import {
    ContePerfilInput,
    ContePerfilSpan,
    ContePerfilTec,
    ContePerfilTecForm,
    ContePerfilTecImg,
} from './style';
import { Button } from '../../../Components/Buttons/index';
import Perfil from '../../../Imgs/perfil.png';
import { Input } from '../../../Components/Inputs';

export const PagePerfil = () => {
    const [tecnico, setTecnico] = useState();

    useEffect(() => {
        apiTcc
            .get(`/tecnicos/${window.localStorage.getItem('idTcc')}`)
            .then(res => {
                setTecnico(res.data);
                return res.data;
            })
            .catch(err => {
                return err;
            });
    }, []);

    return (
        <>
            <HeaderTecnico />
            {tecnico && (
                <ContePerfilTec>
                    <ContePerfilTecImg>
                        <img src={Perfil} />
                    </ContePerfilTecImg>
                    <ContePerfilSpan>{tecnico.cliente.email}</ContePerfilSpan>
                    <ContePerfilTecForm>
                        <ContePerfilInput>
                            <label>Nome</label>
                            <Input classe="input-perfil-tec">
                                {tecnico.cliente.name}
                            </Input>
                        </ContePerfilInput>
                        <ContePerfilInput>
                            <label>Email</label>
                            <Input classe="input-perfil-tec">
                                {tecnico.cliente.email}
                            </Input>
                        </ContePerfilInput>
                        <ContePerfilInput>
                            <label>CPF</label>
                            <Input classe="input-perfil-tec">
                                {tecnico.cliente.cpf}
                            </Input>
                        </ContePerfilInput>
                        <ContePerfilInput>
                            <label>Telefone</label>
                            <Input classe="input-perfil-tec">
                                {tecnico.cliente.telefone}
                            </Input>
                        </ContePerfilInput>
                        <ContePerfilInput>
                            <label>Descrição</label>
                            <Input classe="input-perfil-tec">
                                {tecnico.descricao}
                            </Input>
                        </ContePerfilInput>
                        <Button classe="btn-perfil-tec">Atualizar</Button>
                    </ContePerfilTecForm>
                </ContePerfilTec>
            )}
        </>
    );
};
