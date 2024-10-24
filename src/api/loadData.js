import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api/data';

export const fetchData = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Ошибка при запросе данных:', error);
        throw error;
    }
};
