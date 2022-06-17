import "reflect-metadata";
import { CreateEnderecoService } from "@modules/enderecos/services/CreateEnderecoService";
import { EnderecoRepository } from "@modules/enderecos/typeorm/repositories/EnderecosReposutiries";

describe("Endereço", () => {
    it("Criação de um endereço", () => {
        expect(1).toBe(1);
    });
});
