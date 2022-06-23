import axios from "axios";
import "reflect-metadata";

describe("Endereço", () => {
    it("Criação de um endereço 1", async () => {
        const response = await axios.post(`http://localhost:3333/enderecos`, {
            cep: "798390076",
            rua: "Abacateiro",
            bairro: "Harrison 2",
            cidade: "Dourados",
            uf: "MS",
        });
        expect(response.data).toHaveProperty("id");
    });

    it("Criação de um endereço 2", async () => {
        const response = await axios.post(`http://localhost:3333/enderecos`, {
            cep: "798390075",
            rua: "Jabuticabeira",
            bairro: "Jardim",
            cidade: "Dourados",
            uf: "MS",
        });
        expect(response.data).toHaveProperty("id");
    });

    it("Criação de um endereço 3", async () => {
        const response = await axios.post(`http://localhost:3333/enderecos`, {
            cep: "798390074",
            rua: "Marcelino",
            bairro: "Centro",
            cidade: "Dourados",
            uf: "MS",
        });
        expect(response.data).toHaveProperty("id");
    });
});

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
});

describe("Tecnico", () => {
    it("Criação de um Tecnico", async () => {
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

        const responseClientePut = await axios.put(
            `http://localhost:3333/clientes/${responseCliente.data.id}`,
            {
                nivel: "tecnico",
            }
        );

        const responseTecnico = await axios.post(
            `http://localhost:3333/tecnicos`,
            {
                descricao: "Tecnico de TI",
                avaliacao: 0,
                cliente_id: `${responseCliente.data.id}`,
            }
        );

        expect(responseTecnico.data).toHaveProperty("id");
    });
});

describe("Serviço", () => {
    it("Criação de Serviços", async () => {
        const cep = "798390074";

        const responseEndereco = await axios.get(
            `http://localhost:3333/enderecos/${cep}`
        );

        const responseCliente = await axios.post(
            `http://localhost:3333/clientes`,
            {
                name: "Maykon Dias",
                email: "maykonD@gmail.com",
                password: "123456",
                cpf: "509167896",
                data_nasc: "1998-01-30",
                telefone: "67996143244",
                nivel: "cliente",
                endereco_id: `${responseEndereco.data.id}`,
            }
        );

        const responseClientePut = await axios.put(
            `http://localhost:3333/clientes/${responseCliente.data.id}`,
            {
                nivel: "tecnico",
            }
        );

        const responseTecnico = await axios.post(
            `http://localhost:3333/tecnicos/`,
            {
                descricao: "Tecnico de TI",
                avaliacao: 0,
                cliente_id: `${responseCliente.data.id}`,
            }
        );

        const responseServico1 = await axios.post(
            `http://localhost:3333/servicos`,
            {
                titulo: "Impressora",
                mediaTempo: "3",
                descricao: "Configuração de Impressoras",
                price: 120,
                tecnico_id: `${responseTecnico.data.id}`,
            }
        );

        const responseServico2 = await axios.post(
            `http://localhost:3333/servicos`,
            {
                titulo: "Formatação",
                mediaTempo: "3",
                descricao: "Formatação de Notebook",
                price: 120,
                tecnico_id: `${responseTecnico.data.id}`,
            }
        );

        const responseServico3 = await axios.post(
            `http://localhost:3333/servicos`,

            {
                titulo: "Formatação",
                mediaTempo: "3",
                descricao: "Formatação de Computador de mesa",
                price: 120,
                tecnico_id: `${responseTecnico.data.id}`,
            }
        );

        const responseServico4 = await axios.post(
            `http://localhost:3333/servicos`,

            {
                titulo: "Rede Internet",
                mediaTempo: "3",
                descricao: "Manutenção de Rede",
                price: 120,
                tecnico_id: `${responseTecnico.data.id}`,
            }
        );

        expect(responseTecnico.data).toHaveProperty("id");
    });
});
