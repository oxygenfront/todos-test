import type { ITodosState, TTodo } from '@/types/todos';
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState: ITodosState = {
	todos: JSON.parse(localStorage.getItem('todos') || '[]'),
};

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		createTodo: (state) => {
			const newTodo: TTodo = {
				id: uuidv4(),
				value: 'Новая задача',
				check: false,
			};
			state.todos.push(newTodo);
			localStorage.setItem('todos', JSON.stringify(state.todos));
		},
		editTodo: (state, action: PayloadAction<{ id: string; value: string }>) => {
			const { id, value } = action.payload;
			const existingTodo = state.todos.find((todo) => todo.id === id);
			if (existingTodo) {
				existingTodo.value = value;
				localStorage.setItem('todos', JSON.stringify(state.todos));
			}
		},
		deleteTodo: (state, action: PayloadAction<string>) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
			localStorage.setItem('todos', JSON.stringify(state.todos));
		},
		checkTodo: (state, action: PayloadAction<string>) => {
			const existingTodo = state.todos.find(
				(todo) => todo.id === action.payload
			);
			if (existingTodo) {
				existingTodo.check = !existingTodo.check;
				localStorage.setItem('todos', JSON.stringify(state.todos));
			}
		},
		setTodosInitial: (state) => {
			state.todos = JSON.parse(localStorage.getItem('todos') || '[]');
		},
	},
});

export const { checkTodo, createTodo, deleteTodo, editTodo, setTodosInitial } =
	todosSlice.actions;
