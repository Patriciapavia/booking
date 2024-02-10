import axios from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import { Session } from '../utils/utils';

interface BookSessionState {
  loading: boolean;
  hasErrors: boolean;
  session: Session[];
  upComingSession: Session[];
  deleteItem: Session[];
}

const initialState: BookSessionState = {
  loading: false,
  hasErrors: false,
  session: [],
  upComingSession: [],
  deleteItem: [],
};

const userId = '65c6db948c340e86f6c4a2db';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzZkYjk0OGMzNDBlODZmNmM0YTJkYiIsImlhdCI6MTcwNzUzMTE1NywiZXhwIjoxNzEwMTIzMTU3fQ.r8j45edBZJHyj08Gzsbzg-fMk9OgrTX15M1tlA6fohg';

const bookSessionSlice = createSlice({
  name: 'bookSession',
  initialState,
  reducers: {
    bookSessionSuccess: (state, action: PayloadAction<Session[]>) => {
      state.session = action.payload;
      state.loading = false;
      state.hasErrors = false;
    },
    bookSessionFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

const upComingSessionSlice = createSlice({
  name: 'upComingSession',
  initialState,
  reducers: {
    upComingSessionSuccess: (state, action: PayloadAction<Session[]>) => {
      state.upComingSession = action.payload;
      state.loading = false;
      state.hasErrors = false;
    },
  },
});

const deleteItemSlice = createSlice({
  name: 'deleteItem',
  initialState,
  reducers: {
    deleteItemSuccess: (state, action: PayloadAction<Session[]>) => {
      state.deleteItem = action.payload;
      state.loading = false;
      state.hasErrors = false;
    },
  },
});

export const { bookSessionSuccess, bookSessionFailure } =
  bookSessionSlice.actions;
export const { upComingSessionSuccess } = upComingSessionSlice.actions;
export const { deleteItemSuccess } = deleteItemSlice.actions;

export const deleteItemSelector = (state: { deleteItem: BookSessionState }) =>
  state.deleteItem;
export const bookSessionSelector = (state: { session: BookSessionState }) =>
  state.session;
export const upComingSessionSelector = (state: {
  upComingSession: BookSessionState;
}) => state.upComingSession;
export const deleteItemReducer = deleteItemSlice.reducer;
export const bookSessionReducer = bookSessionSlice.reducer;
export const upComingSessionReducer = upComingSessionSlice.reducer;

export const deleteSession = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.delete(
        `http://localhost:3000/api/session/${id}`,
        config
      );
      dispatch(deleteItemSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUpComingSession = () => {
  return async (dispatch: Dispatch) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.get(
        `http://localhost:3000/api/session/${userId}`,
        config
      );
      dispatch(upComingSessionSuccess(data));
    } catch (error) {
      dispatch(bookSessionFailure());
    }
  };
};

export const bookSession = (session: Session) => {
  return async (dispatch: Dispatch) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      const { data: responseData } = await axios.post(
        `http://localhost:3000/api/session`,
        {
          title: session.title,
          summary: session.summary,
          duration: session.duration,
          image: session.image,
          date: session.date,
        },
        config
      );
      dispatch(bookSessionSuccess(responseData));

      console.log(responseData, 'response from book item');
    } catch (error) {
      dispatch(bookSessionFailure());
    }
  };
};
