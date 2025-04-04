
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "../lib/services/userService";
import { UserType, UsersType, UsersState } from "../lib/types";

export const loadUsers = createAsyncThunk<UsersType>(
  "users/loadUsers",
  async () => {
    const usersData = await fetchUsers();

    const normalizedUsers = usersData.map((user: UserType) => ({
      ...user,
      userTag: user.userTag !== "string" 
        ? user.userTag 
        : '',
    }));

    return normalizedUsers;
  }
);

const initialState: UsersState = {
  users: [],
  filterText: "",
  sortBy: "alphabetically",
  loading: false,
  error: false,
  searchError: false
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
    setSearchError: (state, action: PayloadAction<boolean>) => {
      state.searchError = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUsers.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.searchError = false;
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

export const { setFilterText, setSortBy, setSearchError } = usersSlice.actions;
export default usersSlice.reducer;
