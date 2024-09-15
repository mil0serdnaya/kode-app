import axios from 'axios';
import { UsersType } from '../types';

export const fetchUsers = async (): Promise<UsersType> => {
  const response = await axios.get('https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all');
  return response.data.items;
};
