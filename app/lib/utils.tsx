import { UsersType, UserType } from './types';
import { SORT_BY_BIRTHDAY } from './constants';
import { UserPlaceholder } from '../components/UserPlaceholder';

export const sortUsers = (users: UsersType, sortBy: string): UsersType => {
  const sorted = [...users];
  
  return sorted.sort((a: UserType, b: UserType) =>
    sortBy === SORT_BY_BIRTHDAY
      ? Date.parse(b.birthday) - Date.parse(a.birthday)
      : a.firstName.localeCompare(b.firstName)
  );
};

export const filterUsersByDepartment = (users: UsersType, departmentFilter: string) => {
  return users.filter(user => 
    departmentFilter === 'all' || user.department === departmentFilter
  )
};

export const renderUserPlaceholders = (count: number) => (
  Array.from({ length: count }).map((el, index) => <UserPlaceholder key={index} />)
);