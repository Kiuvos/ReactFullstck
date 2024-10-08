import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRoutes from './routes';

import { BrowserRouter as Router } from 'react-router-dom';
import 'animate.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Router>
			<AppRoutes />
		</Router>
	</StrictMode>
);
