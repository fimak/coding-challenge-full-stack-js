import { createSlice } from '@reduxjs/toolkit';
import { getImages } from './feeds.actions';
import { FeedsState } from './feeds.types';

const initialState: FeedsState = {
  imageList: undefined,
  page: 1,
  perPage: 10,
  status: undefined,
  sortBy: undefined,
  filterBy: undefined
};

export const feedsSlice = createSlice({
  name: 'feeds',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getImages.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getImages.fulfilled, (state, action) => {
        state.status = 'success';
        state.imageList = action.payload.items;
      })
      .addCase(getImages.rejected, (state, action) => {
        state.status = 'error';
      })
  },
});

export default feedsSlice.reducer