import { createSlice } from '@reduxjs/toolkit';
import { fetchOurFriends } from './operations';

const ourFriendsSlice = createSlice({
  name: 'friends',
  initialState: {
    isLoading: false,
    items: [],
  },
  extraReducers: {
    [fetchOurFriends.pending](state, action) {
      state.isLoading = true;
    },
    [fetchOurFriends.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload;
    },
    [fetchOurFriends.rejected](state, action) {
      state.isLoading = false;
    },
  },
});

export const ourFriendsReducer = ourFriendsSlice.reducer;
