export function getHoursFromDate(dateString: string): string {
  const date = new Date(dateString);

  let hoursString = date.getHours() + '';

  if (Number(hoursString) < 10) {
    hoursString = `0${hoursString}`;
  }

  return hoursString;
}
