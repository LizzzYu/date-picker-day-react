import React, { useState } from 'react';
import DatePickerHeader from './components/DatePickerHeader';
import styled from 'styled-components';
import DatePickerCalendar from './components/DatePickerCalendar/DatePickerCalendar';
import moment, { Moment } from 'moment';

const Wrapper = styled.div`
	width: 350px;
	height: 240px;
	font-size: 16px;
`;

const DatePicker = (): JSX.Element => {
	const [selectDate, setSelectedDate] = useState<Moment>(moment());
	const [startDate, setStartDate] = useState<Moment | null>(null);
	const [endDate, setEndDate] = useState<Moment | null>(null);

	const handleDateClick = (date: Moment) => {
		if (!startDate || date.isBefore(startDate)) {
			setStartDate(date);
			setEndDate(null);
		} else if (date.isSame(startDate) || date.isAfter(startDate)) {
			setEndDate(date);
		}
	};

	return (
		<Wrapper>
			<DatePickerHeader
				selectDate={selectDate}
				setSelectedDate={setSelectedDate}
			/>
			<DatePickerCalendar
				date={selectDate}
				startDate={startDate}
				endDate={endDate}
				onDateClick={handleDateClick}
			/>
		</Wrapper>
	);
};

export default DatePicker;
