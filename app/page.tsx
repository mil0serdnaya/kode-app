'use client';

import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledContainer } from "./components/shared/styled/StyledContainer";
import { TopBar } from "./components/shared/TopBar";
import { Users } from "./components/users/Users";
import { RootState, AppDispatch } from "../redux/store";
import { loadUsers, setFilterText, setSortBy } from "../redux/usersSlice";
import { sortUsers, filterUsers } from "../lib/utils";

export default function Page() {
  const dispatch: AppDispatch = useDispatch();

  const { users, loading, error, filterText, sortBy } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  const filteredAndSortedUsers = useMemo(() => {
    const filtered = filterUsers(users, filterText);
    return sortUsers(filtered, sortBy);
  }, [users, filterText, sortBy]);

  return (
    <StyledContainer>
      <TopBar
        filterText={filterText}
        sortBy={sortBy}
        onFilterTextChange={(text) => dispatch(setFilterText(text))}
        onSortByChange={(sort) => dispatch(setSortBy(sort))}
      />
      <Users
        users={filteredAndSortedUsers}
        isLoading={loading}
        isError={error}
        onRetry={() => dispatch(loadUsers())}
      />
    </StyledContainer>
  );
}
