import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Button, Checkbox, Typography } from '@mui/material';
import type { FC } from 'react';

interface IViewMode {
	check: boolean;
	value: string;
	handleCheck: () => any;
	handleDelete: () => any;
	toggleEdit: () => void;
}

export const ViewMode: FC<IViewMode> = ({
	check,
	value,
	handleCheck,
	handleDelete,
	toggleEdit,
}) => (
	<>
		<Box sx={{ display: 'flex', alignItems: 'center' }}>
			<Checkbox onChange={handleCheck} checked={check} />
			<Typography padding='10px'>{value}</Typography>
		</Box>
		<Box display='flex' gap='10px'>
			<Button onClick={toggleEdit}>
				<EditIcon />
			</Button>
			<Button onClick={handleDelete}>
				<DeleteForeverIcon />
			</Button>
		</Box>
	</>
);
