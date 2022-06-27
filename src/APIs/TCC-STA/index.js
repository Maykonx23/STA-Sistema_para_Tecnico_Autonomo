import axios from "axios";
const apiTcc = axios.create({
    baseURL: "https://tcc-sta-bd.herokuapp.com/",
});

/* const apiTcc = axios.create({
    baseURL: "http://localhost:3333",
}); */

export default apiTcc;
