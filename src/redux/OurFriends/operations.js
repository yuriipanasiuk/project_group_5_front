import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchOurFriends = createAsyncThunk(
  'ourFriends/getAllFriends',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('friends/');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
