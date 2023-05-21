import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const rootReducer = {};

const store = configureStore({
	reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
