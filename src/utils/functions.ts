import { axiosWithCache } from "@utils/axiosConfig";
import {
  IAddress,
  IArtisan,
  IHoraire,
  IMultiHoraire,
  IRating,
} from "@/types/interfaces";

export const getLatLonFromAddress = (address: string | IAddress) => {
  const q = typeof address !== "string" ? getCompleteAddress(address) : address;
  return new Promise<{ lat: number; lon: number }>((resolve, reject) => {
    axiosWithCache
      .get("https://nominatim.openstreetmap.org/search", {
        params: { q, format: "json", polygon: 1, addressdetails: 1 },
      })
      .then((res) => {
        console.log(res.cached);

        const { lat, lon } = res.data[0];
        resolve({ lat, lon });
      })
      .catch((err) => reject(err.data));
  });
};

export const getCompleteAddress = (address: IAddress) => {
  return [
    `${address.address_number} ${address.street_name}`,
    `${address.postal_code} ${address.city}`,
  ].join(", ");
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
            days: [...e.days, curr.day_of_week],
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

export const getAverageRating = (ratings: IRating[]) =>
  ratings.reduce((prev, curr) => prev + curr.score, 0) / ratings.length;

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);
