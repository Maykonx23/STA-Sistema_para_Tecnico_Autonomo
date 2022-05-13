import '../../style.css';
import { HeaderTecnico } from '../../../Components/Header/Tecnico';
import { Button } from '../../../Components/Buttons';
import { CriarServico } from '../../../modals/CriarServico';
import { useEffect, useState } from 'react';
import apiTcc from '../../../APIs/TCC-STA';
import { CardCriar } from '../../../Components/CardCriarServico';
import { ExcluirServico } from '../../../modals/ExcluirServico';
import { EditarService } from '../../../modals/EditarServico';

export const TecnicoCriarServico = () => {
    const [list, setList] = useState(false);
    const [criarService, setCriarService] = useState(false);
    const [excluirService, setExcluirService] = useState(false);
    const [editarService, setEditarService] = useState(false);
    const [servicos, setServicos] = useState();
    const id = window.localStorage.getItem('idTcc');

    const criarServiceFunc = () => {
        setCriarService(true);
    };

    const ExcluirServiceFunc = e => {
        setExcluirService(e.target.id);
    };

    const EditarServiceFunc = e => {
        setEditarService(e.target.id);
    };

    const lists = useEffect(() => {
        apiTcc
            .get(`/tecnicos/${id}`)
            .then(response => {
                return response.data.servicos;
            })
            .then(data => {
                setList(true);
                setServicos(data);
            });
    }, [setServicos]);

    return (
        <>
            {editarService && (
                <EditarService
                    editarService={editarService}
                    setEditarService={setEditarService}
                />
            )}
            {excluirService && (
                <ExcluirServico
                    lists={lists}
                    excluirService={excluirService}
                    setExcluirService={setExcluirService}
                />
            )}
            {criarService && (
                <CriarServico
                    lists={lists}
                    criarService={criarService}
                    setCriarService={setCriarService}
                />
            )}

            <HeaderTecnico />
            {setList && (
                <div className="container-criar-servico">
                    <div className="criar-servico">
                        <span>Lista de Serviços</span>
                        <Button
                            click={criarServiceFunc}
                            classe="btn-criar-servico"
                        >
                            Adicionar
                        </Button>
                    </div>
                    {servicos ? (
                        <div className="container-table">
                            <CardCriar />
                            {servicos.map(elemento => {
                                return (
                                    <CardCriar
                                        clickEdit={EditarServiceFunc}
                                        click={ExcluirServiceFunc}
                                        key={elemento.id}
                                        elemento={elemento}
                                    />
                                );
                            })}
                        </div>
                    ) : (
                        <div>Carregando</div>
                    )}
                </div>
            )}
        </>
    );
};
