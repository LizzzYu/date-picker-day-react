import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import moment from 'moment';
import DatePickerHeader from '../DatePickerHeader';

describe('DatePickerHeader', () => {
	const mockSetSelectedDate = jest.fn();

	test('renders current year and month by default', () => {
		render(
			<DatePickerHeader
				selectDate={moment()}
				setSelectedDate={mockSetSelectedDate}
			/>
		);

		const currentYearMonth = screen.getByText(
			`${moment().format('YYYY年M月')}`
		);
		expect(currentYearMonth).toBeInTheDocument();
	});

	test('renders specified year and month', () => {
		const testDate = moment('2024-07-01'); // Example: July 2024
		render(
			<DatePickerHeader
				selectDate={testDate}
				setSelectedDate={mockSetSelectedDate}
			/>
		);

		const specifiedYearMonth = screen.getByText(
			`${testDate.format('YYYY年M月')}`
		);
		expect(specifiedYearMonth).toBeInTheDocument();
	});

	test('handles click events on prev and next month buttons', () => {
		const selectDate = moment(); // Example: current date
		render(
			<DatePickerHeader
				selectDate={selectDate}
				setSelectedDate={mockSetSelectedDate}
			/>
		);

		const prevButton = screen.getByAltText('left-arrow');
		const nextButton = screen.getByAltText('right-arrow');

		fireEvent.click(prevButton);
		expect(mockSetSelectedDate).toHaveBeenCalledWith(
			selectDate.clone().subtract(1, 'month')
		);

		fireEvent.click(nextButton);
		expect(mockSetSelectedDate).toHaveBeenCalledWith(
			selectDate.clone().add(1, 'month')
		);
	});
});
