import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import insultReducer from '../components/shakespeareInsult/shakespeareSlice';

export const store = configureStore({
  reducer: {
    insult: insultReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
