// import { combineReducers } from 'redux';

import sessionsReducer from './sessions';
import { bookSessionReducer, upComingSessionReducer } from './session';

import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    sessions: sessionsReducer,
    bookSession: bookSessionReducer,
    upComingSession: upComingSessionReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
