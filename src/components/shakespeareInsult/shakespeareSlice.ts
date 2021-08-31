import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import loadInsult from './loadInsult';

export interface InsultState {
  value: string;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: InsultState = {
  value: '',
  status: 'idle',
};

export const fetchInsult = createAsyncThunk('insult/fetch', async () => {
  try {
    const respond = await loadInsult();
    if (!respond) {
      throw new Error('Something went wrong');
    }
    return respond;
  } catch (error: any) {
    throw new Error(error);
  }
});

export const insultSlice = createSlice({
  name: 'insult',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchInsult.fulfilled, (state, action) => {
      const result = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.value = result;
    });
  },
});

export const insultValue = (state: RootState) => state.insult.value;

export default insultSlice.reducer;
