export const createDateRange = (start, end) => {
  const newStart = new Date(start);
  const newEnd = new Date(end);

  let dateRange;

  const startDate = newStart.getDate();
  const endDate = newEnd.getDate();

  const startMonth = newStart.toLocaleString('default', { month: 'long' });
  const endMonth = newEnd.toLocaleString('default', { month: 'long' });

  const endYear = newEnd.getFullYear();

  if (startMonth === endMonth) {
    dateRange = `${startDate} - `;
  } else {
    dateRange = `${startDate} ${startMonth} - `;
  }

  dateRange += `${endDate} ${endMonth} ${endYear}`;

  return dateRange;
};

export const hasPassed = (start, end) => {};
