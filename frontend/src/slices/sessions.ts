import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index'; // Assuming you have a store setup
import { Dispatch } from 'redux';
import { Session } from '../utils/utils';
export interface Product {
  // Define your product interface here
}

export interface ProductsState {
  loading: boolean;
  hasErrors: boolean;
  sessions: Session[];
}

export const initialState: ProductsState = {
  loading: false,
  hasErrors: false,
  sessions: [],
};

const sessionsSlice = createSlice({
  name: 'sessions',
  initialState,
  reducers: {
    getSessions: (state) => {
      state.loading = true;
    },
    getSessionsSuccess: (state, action: PayloadAction<Session[]>) => {
      state.sessions = action.payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getSessionsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { getSessions, getSessionsSuccess, getSessionsFailure } =
  sessionsSlice.actions;

export const sessionsSelector = (state: RootState) => state.sessions;

export default sessionsSlice.reducer;

export const fetchProducts = () => async (dispatch: Dispatch) => {
  dispatch(getSessions());

  try {
    const response = await fetch('http://localhost:3000/api/sessions');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    dispatch(getSessionsSuccess(data));
  } catch (error) {
    dispatch(getSessionsFailure());
  }
};
