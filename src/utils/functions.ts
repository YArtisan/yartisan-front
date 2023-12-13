
import { IAddress, IFormAddress, IHoraire, IMultiHoraire, IRating } from "@/types/interfaces";

export const getAverageRating = (ratings: IRating[]) =>
  ratings.reduce((prev, curr) => prev + curr.score, 0) / ratings.length;

export const getCompleteAddress = (address: IAddress | IFormAddress) => {
  const street = [address.address_number, address.street_name].filter(Boolean).join(" ");
  const city = [address.postal_code, address.city].filter(Boolean).join(" ")

  return [street, city, address.country].filter(Boolean).join(", ")
};

export const getHoraires = (horaires: IHoraire[]): IMultiHoraire[] =>
  horaires.reduce((prev: IMultiHoraire[], curr: IHoraire): IMultiHoraire[] => {
    const lastIndex = prev.length - 1;
    const previous = prev[lastIndex];

    if (
      previous &&
      previous.opening_time === curr.opening_time &&
      previous.closing_time === curr.closing_time
    ) {
      return prev.map((e, i) => {
        if (i === lastIndex)
          return {
            ...e,
            days: [...e.days, curr.day_of_week].sort(),
          };

        return e;
      });
    }

    return [
      ...prev,
      {
        days: [curr.day_of_week],
        opening_time: curr.opening_time,
        closing_time: curr.closing_time,
      },
    ];
  }, []);

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const getRandomNumber = (min = 0, max = 999999) => Math.floor(Math.random() * 99999) + 1;

export const isValidUrl = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}