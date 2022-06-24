import axios from "axios";
const apiTcc = axios.create({
    baseURL: "https://3471-131-196-16-67.sa.ngrok.io",
});

/* const apiTcc = axios.create({
    baseURL: "http://localhost:3333",
}); */

export default apiTcc;
