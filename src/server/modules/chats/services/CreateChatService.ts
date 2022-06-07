import { SolicitacaoServicosRepository } from "@modules/solicitacaoServicos/typeorm/repositories/SolicitacaoServicosRepository";
import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { Chat } from "../typeorm/entities/Chat";
import { ChatRepository } from "../typeorm/repositories/ChatsReposutiries";

interface IRequest {
    descricao: string;
    cliente: string;
    tecnico: string;
    solicitacaoServico_id: string;
}

export class CreateChatService {
    public async execute({
        descricao,
        cliente,
        tecnico,
        solicitacaoServico_id,
    }: IRequest): Promise<Chat> {
        const chatsRepository = getCustomRepository(ChatRepository);

        const solicitacaoServicoRepository = getCustomRepository(
            SolicitacaoServicosRepository
        );

        const solicitacaoServicoExists =
            await solicitacaoServicoRepository.findById(solicitacaoServico_id);

        if (!solicitacaoServicoExists) {
            throw new AppError("Esse Cliente não existe.");
        }

        const chat = await chatsRepository.createChat({
            descricao,
            cliente,
            tecnico,
            solicitacaoServico: solicitacaoServicoExists,
        });

        await chatsRepository.save(chat);

        return chat;
    }
}
