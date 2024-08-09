import { setTodosInitial } from '@/entities/todo/model';
import { useAppDispatch } from '@/shared/lib/hooks';
import { Todos } from '@/widgets/Todos';
import { useEffect } from 'react';

export function App() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setTodosInitial());
	}, []);

	return <Todos />;
}
