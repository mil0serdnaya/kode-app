// usersSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "../lib/services/userService";
import { UsersType, UsersState } from "../lib/types";
import { sortUsers, filterUsers } from "../lib/utils";

export const loadUsers = createAsyncThunk<UsersType>(
  "users/loadUsers",
  async () => {
    const usersData = await fetchUsers();
    return usersData;
  }
);

const initialState: UsersState = {
  users: [],
  filterText: "",
  sortBy: "alphabetically",
  loading: false,
  error: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setFilterText: (state, action: PayloadAction<string>) => {
      state.filterText = action.payload;
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
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
