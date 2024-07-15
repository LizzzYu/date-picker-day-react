import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import moment from 'moment';
import DatePickerCell from '../DatePickerCalendar/DatePickerCell';

describe('DatePickerCell', () => {
	const date = moment('2024-07-01'); // Example: July 1st, 2024

	test('renders correct date text and cursor pointer', () => {
		const onClick = jest.fn();
		render(
			<DatePickerCell
				date={date}
				isCurrentMonth={true}
				isToday={false}
				onClick={onClick}
			/>
		);

		const cell = screen.getByText(`${date.date()}日`);

		// Check if the date text is rendered correctly
		expect(cell).toBeInTheDocument();

		// Check cursor style
		expect(cell).toHaveStyle(`cursor: pointer`);

		// Simulate click event
		fireEvent.click(cell);
		expect(onClick).toHaveBeenCalledTimes(1);
	});
});
