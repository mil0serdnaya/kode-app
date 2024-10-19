import { UsersType, UserType } from './types';
import { SORT_BY_BIRTHDAY, departmentMap } from './constants';
import { UserPlaceholder } from '../app/components/users/UserPlaceholder';

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

export const filterUsers = (users: UserType[], filterText: string): UserType[] => {
  if (!filterText) return users;
  
  return users.filter(user =>
    user.firstName.toLowerCase().includes(filterText.toLowerCase()) ||
    user.lastName.toLowerCase().includes(filterText.toLowerCase()) ||
    user.userTag.toLowerCase().includes(filterText.toLowerCase())
  );
};

export const getDepartmentName = (department: string) => {
  return departmentMap[department] || department;
};

export const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);