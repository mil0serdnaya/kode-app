import axios from 'axios';
import { UserPropsType } from '../types';

export const fetchUsers = async (): Promise<UserPropsType> => {
  const response = await axios.get('https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all');
  return response.data.items;
};
