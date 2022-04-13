import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import feedsReducer from '../state/feeds/feeds.reducer'

export const createStore = configureStore({
  reducer: {
    feeds: feedsReducer
  },
});

export type AppDispatch = typeof createStore.dispatch;
export type RootState = ReturnType<typeof createStore.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
