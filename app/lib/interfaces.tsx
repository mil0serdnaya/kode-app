export interface ITabs {
  id: number;
  name: string;
  isActive: boolean;
}
export interface IUser {
  id: string;
  avatarUrl: string;
  firstName: string;
  lastName: string;
  userTag: string;
  department: string;
  position: string;
  birthday: string;
  phone: string;
}

export interface IUserProps {
  users: IUser[];
 }