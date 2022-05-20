import axios from "axios";

const baseURL = "http://localhost:1337/api"

axios.defaults.adapter = require('axios/lib/adapters/http')

const api = axios.create({
    baseURL
});

export {
    api,
    baseURL
};
