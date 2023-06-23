import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

const initialState = {
  allPosts: [],
  loading: false,
  error: null,
};

export const sliceName = 'posts';

export const fetchPosts = createAsyncThunk(
  `${sliceName}/fetchPosts`,
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const data = await api.getAllPosts();
      console.log('data',data)
      return fulfillWithValue([...data]);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

const postSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.allPosts = action.payload;
        state.loading = false;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
  },
});

export default postSlice.reducer;

