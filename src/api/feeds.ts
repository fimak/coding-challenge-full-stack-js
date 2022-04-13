import axios from './axios';

export const feedsAPI = {
  get: async (url: string) => await axios.get(url),
};