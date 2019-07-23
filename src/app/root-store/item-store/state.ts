import { Item } from '../../models/item';

export interface State {
  items: Item[];
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
    items: [],
    isLoading: false,
    error: ''
};
