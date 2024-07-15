import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DatePicker from './DatePicker/DatePicker';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<DatePicker />
	</React.StrictMode>
);
