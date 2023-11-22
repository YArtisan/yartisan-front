import { axiosWithCache } from "@utils/axiosConfig";
import { IAddress, IRating } from "@/types/interfaces";

export const getLatLonFromAddress = (address: string | IAddress) => {
  const q = typeof address !== "string" ? getCompleteAddress(address) : address;
  return new Promise<{ lat: number; lon: number }>((resolve, reject) => {
    axiosWithCache
      .get("https://nominatim.openstreetmap.org/search", {
        params: { q, format: "json", polygon: 1, addressdetails: 1 },
      })
      .then((res) => {
        const { lat, lon } = res.data[0];
        resolve({ lat, lon });
      })
      .catch((err) => reject(err.data));
  });
};

export const getAverageRating = (ratings: IRating[]) => ratings.reduce((prev, curr) => prev + curr.score, 0) / ratings.length;

export const getCompleteAddress = (address: IAddress) => {
  return [
    `${address.address_number} ${address.street_name}`,
    `${address.postal_code} ${address.city}`,
  ].join(", ");
};

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);
