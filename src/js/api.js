/* API functions for Hacker News with Axios */
import axios from 'axios';

// Configurazione base dell'istanza Axios
const apiClient = axios.create({
  baseURL: process.env.HACKER_NEWS_API_URL,
  timeout: 10000, // 10 secondi di timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor per la gestione degli errori
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.message);
    if (error.code === 'ECONNABORTED') {
      console.error('Request timeout - please try again');
    }
    return Promise.reject(error);
  }
);

/* Fetch of the latest news IDs */
export const fetchNewsIds = async () => {
  try {
    const response = await apiClient.get('/newstories.json');
    return response.data;
  } catch (error) {
    console.error('Error fetching news IDs:', error);
    throw error;
  }
};

/* Fetch of a single news item by ID */
export const fetchNewsItem = async (id) => {
  try {
    const response = await apiClient.get(`/item/${id}.json`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching news item ${id}:`, error);
    throw error;
  }
};

export const fetchNewsItems = async (ids) => {
  try {
    return Promise.all(ids.map((id) => fetchNewsItem(id)));
  } catch (error) {
    console.error('Error fetching multiple news items:', error);
    throw error;
  }
};
