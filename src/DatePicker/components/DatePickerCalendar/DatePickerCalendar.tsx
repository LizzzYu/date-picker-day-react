import React from 'react';
import DatePickerCell from './DatePickerCell';
import styled from 'styled-components';
import {
	getCalendarDates,
	getEndOfMonth,
	getStartOfMonth,
} from '../../utils/getDays';
import moment, { Moment } from 'moment';

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
`;

interface DatePickerCalendarProps {
	date: Moment;
	startDate: Moment | null;
	endDate: Moment | null;
	onDateClick: (date: Moment) => void;
}

const DatePickerCalendar = ({
	date,
	startDate,
	endDate,
	onDateClick,
}: DatePickerCalendarProps): JSX.Element => {
	const daysInMonth = getCalendarDates(date);
	const startOfMonth = getStartOfMonth(date);
	const endOfMonth = getEndOfMonth(date);
	const today = moment().startOf('day');

	return (
		<Wrapper>
			{daysInMonth.map((day, index) => {
				const isStartDay = startDate && day.isSame(startDate, 'day');
				const isEndDate = endDate && day.isSame(endDate, 'day');
				const isInRange =
					startDate && endDate && day.isBetween(startDate, endDate, 'day');

				return (
					<DatePickerCell
						key={index}
						date={day}
						isCurrentMonth={day.isBetween(
							startOfMonth,
							endOfMonth,
							'days',
							'[]'
						)}
						isToday={day.isSame(today, 'day')}
						isStartDate={isStartDay}
						isEndDate={isEndDate}
						isInRange={isInRange}
						onClick={() => onDateClick(day)}
					/>
				);
			})}
		</Wrapper>
	);
};

export default DatePickerCalendar;
