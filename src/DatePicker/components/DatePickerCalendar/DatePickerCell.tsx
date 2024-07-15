import React from 'react';
import styled from 'styled-components';
import {
	COLOR_ACTIVE,
	COLOR_DEFAULT,
	COLOR_DISABLE,
	COLOR_HOVER,
	COLOR_TODAY,
} from '../../../design-system/color';
import { Moment } from 'moment';

const Wrapper = styled.div<{
	isCurrentMonth: boolean;
	isToday: boolean;
	isStartDate?: boolean | null;
	isEndDate?: boolean | null;
	isInRange?: boolean | null;
}>`
	width: 50px;
	height: 36px;
	background-color: ${({ isToday, isStartDate, isEndDate, isInRange }) => {
		if (isStartDate || isEndDate || isInRange) {
			return COLOR_ACTIVE;
		}
		if (isToday) return COLOR_TODAY;
		return COLOR_DEFAULT;
	}};
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: ${({ isCurrentMonth }) =>
		isCurrentMonth ? 'pointer' : 'not-allowed'};
	color: ${({ isCurrentMonth, isStartDate, isEndDate, isInRange }) => {
		if (isStartDate || isEndDate || isInRange) {
			return COLOR_DEFAULT;
		}
		if (!isCurrentMonth) return COLOR_DISABLE;
	}};

	/* &:hover {
		background-color: ${({ isCurrentMonth, isStartDate, isEndDate, isInRange }) => {
		if (!isCurrentMonth) return 'unset';
		if (isStartDate || isEndDate || isInRange) return COLOR_ACTIVE;
		return COLOR_HOVER;
	}};
	} */
`;

interface DatePickerCellProps {
	date: Moment;
	isCurrentMonth: boolean;
	isToday: boolean;
	isStartDate?: boolean | null;
	isEndDate?: boolean | null;
	isInRange?: boolean | null;
	onClick: () => void;
}

const DatePickerCell = ({
	date,
	isCurrentMonth,
	isToday,
	isStartDate,
	isEndDate,
	isInRange,
	onClick,
}: DatePickerCellProps): JSX.Element => {
	return (
		<Wrapper
			isCurrentMonth={isCurrentMonth}
			isToday={isToday}
			isStartDate={isStartDate}
			isEndDate={isEndDate}
			isInRange={isInRange}
			onClick={onClick}>
			{date.date()}日
		</Wrapper>
	);
};

export default DatePickerCell;
