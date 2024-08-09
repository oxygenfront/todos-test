import { createTodo, selectTodos } from '@/entities/todo/model';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { TodoItem } from '@/shared/ui/TodoItem';
import type { TTodo } from '@/types/todos';
import {
	Box,
	Button,
	FormControl,
	FormGroup,
	InputLabel,
	MenuItem,
	Select,
	Typography,
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material/Select';
import { type FC, useState } from 'react';

type TSort = 'completed' | 'uncompleted';

export const Todos: FC = () => {
	const dispatch = useAppDispatch();
	const { todos }: { todos: TTodo[] } = useAppSelector(selectTodos);
	const [sort, setSort] = useState<TSort>('uncompleted');

	const createTodoAction = () => {
		dispatch(createTodo());
	};

	const handleChangeSort = (event: SelectChangeEvent) => {
		setSort(event.target.value as TSort);
	};

	const sortedTodos = () => {
		return [...todos].sort((a, b) => {
			if (sort === 'uncompleted') {
				return Number(a.check) - Number(b.check);
			}
			return Number(b.check) - Number(a.check);
		});
	};

	return (
		<Box
			width='100%'
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '20px',
			}}
		>
			<Typography variant='h3' margin='0 auto' width='fit-content'>
				Планировщик задач
			</Typography>
			<FormGroup
				sx={{
					width: '50%',
					border: '1px solid rgba(255, 255, 255, 0.12)',
					borderRadius: '15px',
					backgroundColor: 'rgba(32, 36, 45, 1)',
					margin: '0 auto',
					padding: '20px',
					gap: '30px',
				}}
			>
				<FormControl
					fullWidth
					sx={{
						borderRadius: '8px',
						border: '2px solid rgba(255, 255, 255, 0.12)',
						color: 'white',
						'& .MuiFormLabel-root': {
							color: 'white',
						},
						'& .MuiSelect-select': {
							color: 'white',
						},
					}}
				>
					<InputLabel id='sort-select-label'>Сортировка</InputLabel>
					<Select
						labelId='sort-select-label'
						id='sort-select'
						value={sort}
						onChange={handleChangeSort}
					>
						<MenuItem value='uncompleted'>Сначала невыполненные</MenuItem>
						<MenuItem value='completed'>Сначала выполненные</MenuItem>
					</Select>
				</FormControl>
				{todos.length ? (
					sortedTodos().map((todo) => <TodoItem key={todo.id} {...todo} />)
				) : (
					<Typography>В списке нет задач</Typography>
				)}
			</FormGroup>
			<Button variant='outlined' onClick={createTodoAction}>
				Добавить задачу
			</Button>
		</Box>
	);
};
