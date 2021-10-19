/**
 * Axios
 */

import axios from "axios";

const API = "http://127.0.0.1:8000/";

const objAxios = axios.create({
    baseURL: API,
    timeout: 2500
});

export default objAxios