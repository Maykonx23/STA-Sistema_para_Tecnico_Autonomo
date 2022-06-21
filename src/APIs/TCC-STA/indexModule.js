import axios from "axios";

module.exports = () => {
    const apiTcc = axios.create({
        baseURL: "http://localhost:3333",
    });
    return apiTcc;
};
