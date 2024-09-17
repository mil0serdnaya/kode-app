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

export type UsersType = UserType[]; 

export type UsersProps = {
  users: UsersType;
  isLoading: boolean;
  isError: boolean;
  onRetry: () => void;
}

export type TabsProps = {
  onDepartmentChange: (department: string) => void;
}

export type CriticalErrorProps = {
  onRetry: () => void;
}