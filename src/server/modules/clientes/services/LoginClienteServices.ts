import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ClientesRepository } from '../typeorm/repositories/ClientesRepository';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { Cliente } from '../typeorm/entities/Cliente';

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    cliente: Cliente;
    token: string;
}

export class LoginClienteService {
    public async execute({ email, password }: IRequest): Promise<IResponse> {
        const clientesRepository = getCustomRepository(ClientesRepository);

        const cliente = await clientesRepository.findByEmail(email);

        if (!cliente) {
            throw new AppError('Email/Senha invalido.', 401);
        }

        const passAccept = await compare(password, cliente.password);

        if (!passAccept) {
            throw new AppError('Email/Senha invalido.', 401);
        }

        const token = sign({}, '1d48933f7f397c016d2ac818d3a4c220', {
            subject: cliente.id,
            expiresIn: '2d',
        });

        return { cliente, token };
    }
}
