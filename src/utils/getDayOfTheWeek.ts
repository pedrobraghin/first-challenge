import { DaysOfTheWeek } from '../entities/DaysOfTheWeek';

export const getDayOfTheWeek = (dayOfTheWeek: string) => {
  const days: DaysOfTheWeek = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
  };
  const day = days[dayOfTheWeek];
  if (day == undefined) {
    throw new Error(`Day of the week invalid`);
  }
  return days[dayOfTheWeek];
};
