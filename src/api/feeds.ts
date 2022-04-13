import axios from './axios';

export const feedsAPI = {
  get: async (url: string, params: any ) => await axios.get(url, { params }),
};
