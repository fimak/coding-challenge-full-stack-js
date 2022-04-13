import { createAsyncThunk } from '@reduxjs/toolkit';

import { feedsAPI } from '../../api/feeds';

export const getImages = createAsyncThunk(
  'feeds/getImages',
  async (tags: string) => {
    const response = await feedsAPI.get(`/search/`, { tags: tags.replace(/\s/g, ',') });
    return response.data
  }
);
