import { DaysOfTheWeek } from '../entities/DaysOfTheWeek';

export const getDayOfTheWeek = (dayOfTheWeek: string) => {
  const days: DaysOfTheWeek = {
    monday: 0,
    tuesday: 1,
    wednesday: 2,
    thursday: 3,
    friday: 4,
    saturday: 5,
    sunday: 6,
  };
  const day = days[dayOfTheWeek];
  if (day == undefined) {
    throw new Error(`Invalid day of the week ${dayOfTheWeek}`);
  }
  return days[dayOfTheWeek];
};
