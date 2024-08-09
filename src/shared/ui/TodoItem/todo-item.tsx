import { checkTodo, deleteTodo, editTodo } from '@/entities/todo/model';
import { useAppDispatch } from '@/shared/lib/hooks';
import { EditMode } from '@/features/EditMode';
import { ViewMode } from '@/features/ViewMode';
import type { TTodo } from '@/types/todos';

import { Box } from '@mui/material';
import { type FC, type KeyboardEvent, useState } from 'react';

export const TodoItem: FC<TTodo> = ({ check, id, value }) => {
	const [isEdit, setIsEdit] = useState(false);
	const [currentValue, setCurrentValue] = useState(value);
	const dispatch = useAppDispatch();

	const handleCheck = () => dispatch(checkTodo(id));
	const handleDelete = () => dispatch(deleteTodo(id));

	const toggleEdit = () => setIsEdit((prev) => !prev);

	const handleEdit = () => {
		if (isEdit) {
			dispatch(editTodo({ id, value: currentValue }));
		}
		toggleEdit();
	};

	const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			handleEdit();
		} else if (event.key === 'Escape') {
			setCurrentValue(value);
			setIsEdit(false);
		}
	};

	const handleBlur = () => handleEdit();

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				width: '100%',
				padding: '10px',
				borderRadius: '8px',
				border: '2px solid rgba(255, 255, 255, 0.12)',
			}}
		>
			{isEdit ? (
				<EditMode
					currentValue={currentValue}
					setCurrentValue={setCurrentValue}
					handleKeyDown={handleKeyDown}
					handleBlur={handleBlur}
					check={check}
					toggleEdit={toggleEdit}
				/>
			) : (
				<ViewMode
					check={check}
					value={value}
					handleCheck={handleCheck}
					handleDelete={handleDelete}
					toggleEdit={toggleEdit}
				/>
			)}
		</Box>
	);
};
