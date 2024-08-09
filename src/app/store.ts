import { todosSlice } from '@/entities/todo/model';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
	[todosSlice.name]: todosSlice.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
