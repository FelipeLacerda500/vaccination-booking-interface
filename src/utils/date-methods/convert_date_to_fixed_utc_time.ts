export function convertDateToFixedUtcTime(
  dateString: string,
  hasHour?: boolean,
  hour?: string,
) {
  const [year, month, day] = dateString.split('-').map(Number);
  const hourValue = hour?.split(':').map(Number)[0] || 0;

  if (dateString && !hasHour) {
    const fixedTimeDate = new Date(Date.UTC(year, month - 1, day, 11, 0, 0, 0));

    return fixedTimeDate.toISOString();
  }

  if (dateString && hasHour) {
    const fixedTimeDate = new Date(
      Date.UTC(year, month - 1, day, hourValue + 3, 0, 0, 0),
    );

    return fixedTimeDate.toISOString();
  }
}
