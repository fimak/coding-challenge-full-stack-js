import { createAsyncThunk } from '@reduxjs/toolkit';

// import { feedsAPI } from '../../api/feeds';
import { itemData } from '../../constants';
import { GetFeedsParam } from './feeds.types';

export const getImages = createAsyncThunk(
  'feeds/getImages',
  async ({ page, limit }: GetFeedsParam) => {
    // const response = await feedsAPI.get(`/search/?page=${page}&limit=${limit}`);
    const response: any = await new Promise((resolve) => setTimeout(() => resolve(itemData), 1000));
    // return response.data
    return response
  }
);
