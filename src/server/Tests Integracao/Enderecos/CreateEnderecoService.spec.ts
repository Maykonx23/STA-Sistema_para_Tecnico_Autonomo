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
