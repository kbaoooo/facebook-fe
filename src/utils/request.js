import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:3002/api/',
});

export const get = async (path, params = {}) => {
    const response = await request.get(path, params);
    return response.data;
};

export const post = async (path, params = {}) => {
    const response = await request.post(path, params);
    return response.data;
};

export default request;
