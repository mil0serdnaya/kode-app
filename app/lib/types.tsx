export type TabsType = {
  id: number;
  name: string;
  department: string;
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
  users?: UserType[] | [];
  map: Function;
  sort: Function;
  filter: Function;
  length: number;
 }
