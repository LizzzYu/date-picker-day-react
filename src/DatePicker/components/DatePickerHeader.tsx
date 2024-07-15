import React, { Dispatch, SetStateAction } from 'react';
import leftArrow from '../../static/angle-small-left.png';
import rightArrow from '../../static/angle-small-right.png';
import styled from 'styled-components';
import { COLOR_DEFAULT, COLOR_HOVER } from '../../design-system/color';
import { Moment } from 'moment';

const Wrapper = styled.div`
	width: 350px;
	height: 44px;
	margin-bottom: 16px;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Button = styled.button`
	width: 44px;
	height: 44px;
	background-color: ${COLOR_DEFAULT};
	border-style: none;

	& > img {
		width: 50%;
	}

	&:hover {
		background-color: ${COLOR_HOVER};
	}
`;

interface DatePickerHeaderProps {
	selectDate: Moment;
	setSelectedDate: Dispatch<SetStateAction<Moment>>;
}

const DatePickerHeader = ({
	selectDate,
	setSelectedDate,
}: DatePickerHeaderProps): JSX.Element => {
	const handlePrevMonth = () => {
		setSelectedDate(selectDate.clone().subtract(1, 'month'));
	};

	const handleNextMonth = () => {
		setSelectedDate(selectDate.clone().add(1, 'month'));
	};

	return (
		<Wrapper>
			<Button onClick={handlePrevMonth}>
				<img src={leftArrow} alt="left-arrow" />
			</Button>
			{selectDate.format('YYYY年M月')}
			<Button onClick={handleNextMonth}>
				<img src={rightArrow} alt="right-arrow" />
			</Button>
		</Wrapper>
	);
};

export default DatePickerHeader;
