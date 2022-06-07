import { Request, Response } from "express";
import { CreateSolicitacaoServicoService } from "../services/CreateSolicitacaoServicoServices";
import { DeleteSolicitacaoServicoService } from "../services/DeleteSolicitacaoServicoService";
import { ListSolicitacaoServicoService } from "../services/ListSolicitacaoServicoService";
import { ShowSolicitacaoServicoService } from "../services/ShowSolicitacaoServicoService";
import { UpdateSolicitacaoServicoService } from "../services/UpdateSolicitacaoServicoService";

export default class SolicitacaoServicoController {
    public async index(
        request: Request,
        response: Response
    ): Promise<Response> {
        const listSolicitacaoServicos = new ListSolicitacaoServicoService();

        const solicitacaoServico = await listSolicitacaoServicos.execute();

        return response.json(solicitacaoServico);
    }

    public async show(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const showsolicitacaoServico = new ShowSolicitacaoServicoService();

        const solicitacaoServico = await showsolicitacaoServico.execute({ id });

        return response.json(solicitacaoServico);
    }

    public async create(
        request: Request,
        response: Response
    ): Promise<Response> {
        const { status, validacao, cliente_id, tecnico_id, servico_id, chats } =
            request.body;

        const createSolicitacaoServico = new CreateSolicitacaoServicoService();

        const solicitacaoServico = await createSolicitacaoServico.execute({
            status,
            validacao,
            cliente_id,
            tecnico_id,
            servico_id,
            chats,
        });

        return response.json(solicitacaoServico);
    }

    public async update(
        request: Request,
        response: Response
    ): Promise<Response> {
        const { status, validacao, cliente_id, tecnico_id, servico_id } =
            request.body;

        const { id } = request.params;

        const updateSolicitacaoServico = new UpdateSolicitacaoServicoService();

        const solicitacaoServico = await updateSolicitacaoServico.execute({
            id,
            status,
            validacao,
            cliente_id,
            tecnico_id,
            servico_id,
        });

        return response.json(solicitacaoServico);
    }

    public async delete(
        request: Request,
        response: Response
    ): Promise<Response> {
        const { id } = request.params;

        const deleteSolicitacaoServico = new DeleteSolicitacaoServicoService();

        await deleteSolicitacaoServico.execute({ id });

        return response.json([]);
    }
    /* 
    public async showCliente(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { id } = request.params;

        const showIDClienteTecnico = new ClienteIDTecnicoService();

        const tecnico = await showIDClienteTecnico.execute({ id });

        return response.json(tecnico);
    } */
}
