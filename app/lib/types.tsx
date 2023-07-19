export type TabsType = {
  id: number;
  name: string;
  isActive: boolean;
}
export type UserType = {
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

export type UserPropsType = {
  users?: UserType[];
  sort: Function;
 }
