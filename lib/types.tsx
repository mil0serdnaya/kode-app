export type Tab = {
  id: number;
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
  searchError: boolean;
  onRetry: () => void;
}

export type UsersState = {
  users: UserType[];
  filterText: string;
  sortBy: string;
  loading: boolean;
  error: boolean;
  searchError: boolean;
}

export type TabsProps = {
  onDepartmentChange: React.Dispatch<React.SetStateAction<string>>;
}

export type ErrorProps = {
  imageSrc: string;
  altText: string;
  title: string;
  subtitle: string;
  retryText?: string;
  onRetry?: () => void;
}

export type CriticalErrorProps = {
  onRetry: () => void;
}

export type TopBarProps = {
  filterText: string;
  sortBy: string;
  onFilterTextChange: (text: string) => void;
  onSortByChange: (sort: string) => void;
}

export type SortingProps = {
  sortBy: string;
  onSortVisibleChange: React.Dispatch<React.SetStateAction<boolean>>;
  onSortByChange: (sort: string) => void;
}