import { ClientesRepository } from '@modules/clientes/typeorm/repositories/ClientesRepository';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Tecnico } from '../typeorm/entities/Tecnico';
import { TecnicosRepository } from '../typeorm/repositories/TecnicosRepository';

interface IServicos {
    id: string;
    titulo: string;
    price: number;
}

interface IRequest {
    descricao: string;
    avaliacao: number;
    cliente_id: string;
    servicos: IServicos[];
}

export class CreateTecnicoService {
    public async execute({
        descricao,
        avaliacao,
        cliente_id,
        servicos,
    }: IRequest): Promise<Tecnico> {
        const tecnicosRepository = getCustomRepository(TecnicosRepository);

        const clientesRepository = getCustomRepository(ClientesRepository);

        const clienteExists = await clientesRepository.findById(cliente_id);

        if (!clienteExists) {
            throw new AppError('Esse Cliente não existe.');
        }

        if (clienteExists.nivel === 'cliente') {
            throw new AppError('Esse Cliente não é nivel Técnico.');
        }

        const tecnico = await tecnicosRepository.createTecnico({
            descricao,
            avaliacao,
            cliente: clienteExists,
            servicos,
        });

        await tecnicosRepository.save(tecnico);

        return tecnico;
    }
}
