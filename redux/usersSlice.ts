import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchUsers } from '../lib/services/userService';
import { sortUsers } from '../lib/utils';
import { UsersType, UsersState } from '../lib/types';

export const loadUsers = createAsyncThunk<UsersType>('users/loadUsers', async () => {
  const usersData = await fetchUsers();
  return usersData;
});

const initialState: UsersState = {
  users: [],
  sortedUsers: [],
  filterText: '',
  sortBy: 'alphabetically',
  loading: false,
  error: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setFilterText(state, action: PayloadAction<string>) {
      state.filterText = action.payload;
    },
    setSortBy(state, action: PayloadAction<string>) {
      state.sortBy = action.payload;
      state.sortedUsers = sortUsers(state.users, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUsers.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(loadUsers.fulfilled, (state, action: PayloadAction<UsersType>) => {
        state.users = action.payload;
        state.sortedUsers = sortUsers(action.payload, state.sortBy);
        state.loading = false;
      })
      .addCase(loadUsers.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { setFilterText, setSortBy } = usersSlice.actions;
export default usersSlice.reducer;
