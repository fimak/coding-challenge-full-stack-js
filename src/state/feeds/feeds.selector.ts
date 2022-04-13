import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store/createStore';

const imageSelector = (state: RootState) => state.feeds.imageList;

export const galleryImageSelector = createSelector(imageSelector, (imageList) => imageList);
export const statusSelector = (state: RootState) => state.feeds.status;
export const pageSelector = (state: RootState) => state.feeds.page;
export const pageLimitSelector = (state: RootState) => state.feeds.perPage;
