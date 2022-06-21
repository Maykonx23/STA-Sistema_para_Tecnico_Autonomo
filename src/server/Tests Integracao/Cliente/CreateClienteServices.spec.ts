import AppError from "@shared/errors/AppError";
import axios from "axios";
import "reflect-metadata";

describe("Clientes", () => {
    it("Criação de um Cliente 1", async () => {
        const cep = "798390076";

        const responseEndereco = await axios.get(
            `http://localhost:3333/enderecos/${cep}`
        );

        const responseCliente = await axios.post(
            `http://localhost:3333/clientes`,
            {
                name: "Aline",
                email: "aline@gmail.com",
                password: "123456",
                cpf: "509167156",
                data_nasc: "1998-01-30",
                telefone: "67996043244",
                nivel: "cliente",
                endereco_id: `${responseEndereco.data.id}`,
            }
        );

        expect(responseCliente.data).toHaveProperty("id");
    });

    it("Criação de um Cliente 2", async () => {
        const cep = "798390075";

        const responseEndereco = await axios.get(
            `http://localhost:3333/enderecos/${cep}`
        );

        const responseCliente = await axios.post(
            `http://localhost:3333/clientes`,
            {
                name: "Luan",
                email: "luan@gmail.com",
                password: "123456",
                cpf: "509167155",
                data_nasc: "1998-01-30",
                telefone: "67996043246",
                nivel: "cliente",
                endereco_id: responseEndereco.data.id,
            }
        );

        expect(responseCliente.data).toHaveProperty("id");
    });

    it("Criação de um Cliente 3", async () => {
        const cep = "798390074";

        const responseEndereco = await axios.get(
            `http://localhost:3333/enderecos/${cep}`
        );

        const responseCliente = await axios.post(
            `http://localhost:3333/clientes`,
            {
                name: "Antonia",
                email: "antonia@gmail.com",
                password: "123456",
                cpf: "509167856",
                data_nasc: "1998-01-30",
                telefone: "67996143244",
                nivel: "cliente",
                endereco_id: `${responseEndereco.data.id}`,
            }
        );

        expect(responseCliente.data).toHaveProperty("id");
    });
});
