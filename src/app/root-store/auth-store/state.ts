import { User } from '../../models/auth';

export interface State {
  user: User | null;
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  user: JSON.parse(localStorage.getItem('user')),
  isLoading: false,
  error: null
}