import moment, { Moment } from 'moment';

export const getStartOfMonth = (date: Moment): Moment =>
	moment(date).startOf('month');
export const getEndOfMonth = (date: Moment): Moment =>
	moment(date).endOf('month');

export const getCalendarDates = (date: Moment): Moment[] => {
	const startOfMonth = getStartOfMonth(date);
	const endOfMonth = getEndOfMonth(date);
	const startDate = startOfMonth.startOf('week'); // Start from the first day of the week
	const endDate = endOfMonth.endOf('week'); // End at the last day of the week

	const days: Moment[] = [];
	let day = startDate.clone();

	while (day <= endDate) {
		days.push(day.clone());
		day = day.add(1, 'days');
	}

	return days;
};
