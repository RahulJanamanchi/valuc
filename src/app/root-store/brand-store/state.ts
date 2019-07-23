import { Brand } from '../../models/brand';

export interface State {
  brands: Brand[];
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
    brands: [],
    isLoading: false,
    error: ''
};
