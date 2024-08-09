import { Container } from '@mui/material';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './global.sass';
import { store } from '@/app/store';
import { Provider } from 'react-redux';
// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<Container maxWidth='xl'>
				<App />
			</Container>
		</Provider>
	</StrictMode>
);
