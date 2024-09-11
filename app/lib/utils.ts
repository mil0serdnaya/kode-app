import { UserPropsType, UserType } from './types';
import { SORT_BY_BIRTHDAY } from './constants';

export const sortUsers = (users: UserPropsType, sortBy: string): UserPropsType => {
  const sorted = [...users];
  
  return sorted.sort((a: UserType, b: UserType) =>
    sortBy === SORT_BY_BIRTHDAY
      ? Date.parse(b.birthday) - Date.parse(a.birthday)
      : a.firstName.localeCompare(b.firstName)
  );
};