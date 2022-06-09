import { ClientesRepository } from "@modules/clientes/typeorm/repositories/ClientesRepository";
import { SolicitacaoServicosRepository } from "@modules/solicitacaoServicos/typeorm/repositories/SolicitacaoServicosRepository";
import { TecnicosRepository } from "@modules/tecnicos/typeorm/repositories/TecnicosRepository";
import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { Chat } from "../typeorm/entities/Chat";
import { ChatRepository } from "../typeorm/repositories/ChatsReposutiries";

interface IRequest {
    id: string;
    descricao: string;
    usuario: string;
    solicitacaoServico_id: string;
}

export class UpdateChatService {
    public async execute({
        id,
        descricao,
        usuario,
        solicitacaoServico_id,
    }: IRequest): Promise<Chat> {
        const chatsRepository = getCustomRepository(ChatRepository);

        const solicitacaoServicosRepository = getCustomRepository(
            SolicitacaoServicosRepository
        );
        /*
        const clientesRepository = getCustomRepository(ClientesRepository);

        const tecnicosRepository = getCustomRepository(TecnicosRepository);  

        const clienteExists = await clientesRepository.findById(cliente);

        if (!clienteExists) {
            throw new AppError("Esse Cliente não existe.");
        }

        const tecnicoExists = await tecnicosRepository.findById(tecnico);

        if (!tecnicoExists) {
            throw new AppError("Esse Tecnico não existe.");
        } */

        const solicitacaoServico = await solicitacaoServicosRepository.findById(
            solicitacaoServico_id
        );

        if (!solicitacaoServico) {
            throw new AppError("Solicitação não existe.");
        }

        const chat = await chatsRepository.findOne(id);

        if (!chat) {
            throw new AppError("Chat não existe.");
        }

        chat.descricao = descricao;
        chat.usuario = usuario;
        chat.solicitacaoServico = solicitacaoServico;

        await chatsRepository.save(chat);

        return chat;
    }
}
