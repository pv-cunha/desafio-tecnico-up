import axios from 'axios';

const KEY = 'AIzaSyAtKqwvaEtwhey7qNS4m5RPe-jmlfz8YbM';

const apiClient = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1',
});

const create = () => {
  const getVolumes = () =>
    apiClient.get(
      `/volumes?q=bernardCornwell&key=${KEY}&startIndex=0&maxResults=5`,
    );

  return { getVolumes };
};

const api = create();

export { api };
