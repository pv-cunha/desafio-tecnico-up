import axios from 'axios';
import { maxResults } from '../utils/Pagination';

const KEY = 'AIzaSyAtKqwvaEtwhey7qNS4m5RPe-jmlfz8YbM';

const apiClient = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1',
});

const create = () => {
  const getVolumes = (text: string, startIndex: number) =>
    apiClient.get(
      `/volumes?q=${text}&key=${KEY}&startIndex=${startIndex}&maxResults=${maxResults}`,
    );

  const getBookById = (volumeID: string) =>
    apiClient.get(`/volumes/${volumeID}?${KEY}`);

  return { getVolumes, getBookById };
};

const api = create();

export { api };
