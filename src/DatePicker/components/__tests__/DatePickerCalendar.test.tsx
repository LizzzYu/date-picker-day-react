import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import moment from 'moment';
import DatePickerCalendar from '../DatePickerCalendar/DatePickerCalendar';

describe('DatePickerCalendar', () => {
	const today = moment().startOf('day');
	const startOfMonth = moment().startOf('month');
	const endOfMonth = moment().endOf('month');

	const onDateClick = jest.fn();

	test('renders DatePickerCalendar with correct dates', () => {
		render(
			<DatePickerCalendar
				date={today}
				startDate={null}
				endDate={null}
				onDateClick={onDateClick}
			/>
		);

		// Check if today is rendered
		const todayCells = screen.getAllByText(`${today.date()}日`);
		expect(todayCells.length).toBeGreaterThan(0); // Ensure at least one element is found
		todayCells.forEach((cell) => {
			expect(cell).toBeInTheDocument();
		});

		// Check if first day of the month is rendered
		const startOfMonthCells = screen.getAllByText(`${startOfMonth.date()}日`);
		expect(startOfMonthCells.length).toBeGreaterThan(0); // Ensure at least one element is found
		startOfMonthCells.forEach((cell) => {
			expect(cell).toBeInTheDocument();
		});

		// Check if last day of the month is rendered
		const endOfMonthCells = screen.getAllByText(`${endOfMonth.date()}日`);
		expect(endOfMonthCells.length).toBeGreaterThan(0); // Ensure at least one element is found
		endOfMonthCells.forEach((cell) => {
			expect(cell).toBeInTheDocument();
		});
	});

	test('calls onDateClick with the correct date', () => {
		render(
			<DatePickerCalendar
				date={today}
				startDate={null}
				endDate={null}
				onDateClick={onDateClick}
			/>
		);

		fireEvent.click(screen.getByText(`${today.date()}日`));

		expect(onDateClick).toHaveBeenCalledWith(today);
	});

	test('highlights startDate, endDate, and dates in range', () => {
		const startDate = moment('2024-07-10'); // Example: July 10th, 2024
		const endDate = moment('2024-07-20'); // Example: July 20th, 2024

		render(
			<DatePickerCalendar
				date={today}
				startDate={startDate}
				endDate={endDate}
				onDateClick={onDateClick}
			/>
		);

		// Check startDate element
		const startDateElement = screen.getByText(`${startDate.date()}日`);
		expect(startDateElement).toHaveStyle('background-color: #006edc');

		// Check endDate element
		const endDateElement = screen.getByText(`${endDate.date()}日`);
		expect(endDateElement).toHaveStyle('background-color: #006edc');

		// Check dates in range
		for (let date = startDate.date() + 1; date < endDate.date(); date++) {
			const rangeDateElement = screen.getByText(`${date}日`);
			expect(rangeDateElement).toHaveStyle('background-color: #006edc');
		}
	});
});
