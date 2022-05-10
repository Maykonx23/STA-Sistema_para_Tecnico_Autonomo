import { Cliente } from '../../../clientes/typeorm/entities/Cliente';
import { EntityRepository, Repository } from 'typeorm';
import { Tecnico } from '../entities/Tecnico';

interface IServicos {
    id: string;
    titulo: string;
    price: number;
}

interface IRequest {
    descricao: string;
    avaliacao: number;
    cliente: Cliente;
    servicos: IServicos[];
}

@EntityRepository(Tecnico)
export class TecnicosRepository extends Repository<Tecnico> {
    public async findById(id: string): Promise<Tecnico | undefined> {
        const tecnico = await this.findOne(id, { relations: ['cliente'] });
        return tecnico;
    }

    public async createTecnico({
        descricao,
        avaliacao,
        cliente,
        servicos,
    }: IRequest): Promise<Tecnico> {
        const tecnico = this.create({
            descricao,
            avaliacao,
            cliente,
            servicos,
        });

        await this.save(tecnico);

        return tecnico;
    }
}
