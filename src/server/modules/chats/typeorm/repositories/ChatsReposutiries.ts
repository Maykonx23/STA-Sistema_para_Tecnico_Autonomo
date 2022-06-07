import { SolicitacaoServico } from "@modules/solicitacaoServicos/typeorm/entities/SolicitacaoServico";
import { EntityRepository, Repository } from "typeorm";
import { Chat } from "../entities/Chat";

interface IRequest {
    descricao: string;
    cliente: string;
    tecnico: string;
    solicitacaoServico: SolicitacaoServico;
}

@EntityRepository(Chat)
export class ChatRepository extends Repository<Chat> {
    public async findByCliente(cliente: string): Promise<Chat | undefined> {
        const chat = this.findOne({ where: { cliente } });
        return chat;
    }

    public async findByTecnico(tecnico: string): Promise<Chat | undefined> {
        const chat = this.findOne({ where: { tecnico } });
        return chat;
    }

    public async findById(id: string): Promise<Chat | undefined> {
        const chat = this.findOne({
            where: { id },
            relations: ["solicitacaoServico"],
        });

        return chat;
    }

    public async createChat({
        descricao,
        cliente,
        tecnico,
        solicitacaoServico,
    }: IRequest): Promise<Chat> {
        const chat = this.create({
            descricao,
            cliente,
            tecnico,
            solicitacaoServico,
        });

        await this.save(chat);

        return chat;
    }
}
