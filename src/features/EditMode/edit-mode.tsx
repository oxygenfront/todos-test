import CheckIcon from '@mui/icons-material/Check';
import { Box, Button, Checkbox, TextField } from '@mui/material';
import type { Dispatch, FC, KeyboardEvent, SetStateAction } from 'react';

interface IEditMode {
	currentValue: string;
	setCurrentValue: Dispatch<SetStateAction<string>>;
	handleKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
	handleBlur: () => void;
	check: boolean;
	toggleEdit: () => void;
}

export const EditMode: FC<IEditMode> = ({
	currentValue,
	setCurrentValue,
	handleKeyDown,
	handleBlur,
	check,
	toggleEdit,
}) => (
	<>
		<Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
			<Checkbox disabled checked={check} />
			<TextField
				value={currentValue}
				onChange={(e) => setCurrentValue(e.target.value)}
				onKeyDown={handleKeyDown}
				onBlur={handleBlur}
				sx={{
					marginLeft: '10px',
					width: '100%',
					'& .MuiOutlinedInput-root': {
						'& fieldset': {
							borderColor: 'white',
						},
						'&:hover fieldset': {
							borderColor: 'lightgray',
						},
						'&.Mui-focused fieldset': {
							borderColor: 'cyan',
						},
					},
					'& .MuiInputBase-input': {
						color: 'white',
						padding: '10px',
					},
				}}
			/>
		</Box>
		<Button onClick={toggleEdit}>
			<CheckIcon />
		</Button>
	</>
);
