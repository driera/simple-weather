import axios from 'axios';

const baseDomain = 'http://api.openweathermap.org/data/2.5';
const baseURL = `${baseDomain}`; // Incase of /api/v1;

export default axios.create({
    baseURL,
    headers: {}
});
