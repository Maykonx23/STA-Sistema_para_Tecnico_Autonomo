import axios from 'axios';

export const apiTcc = axios.create({
    baseURL: 'http://localhost:3333',
});
