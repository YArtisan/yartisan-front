import { IArtisan, IArtisanFormData } from "@/types/interfaces";
import { ratings } from "./datas/ratingsData";
import { artisans } from "@/fetch/datas/artisansData";
import { days } from "@utils/variables";

export const getAllArtisans = () => {
  return new Promise<IArtisan[]>((resolve, reject) => {
    try {
      fetch(`${import.meta.env.VITE_YARTISAN_API_URL}/artisant/get-all-artisant`)
        .then((res) => res.json())
        .then(({ data }) => {
          const artisansData = data.map((e: any) => {
            const { artisantData, artisantOpeningTime } = e;
            const index = Math.floor(Math.random() * artisans.length)
            const randomArtisan = artisans[index];
            const opening_time = artisantOpeningTime?.map(({ day_of_week, ...e }: any) => ({ ...e, day_of_week: days.findIndex((day) => day === day_of_week.toLowerCase()) }));
            return { ...artisantData, ratings, address: randomArtisan.address, opening_time }
          })
          resolve(artisansData);
        })
    } catch (error) {
      reject(error);
    }
  });
};

export const postArtisant = (artisan: IArtisanFormData) => {
  return new Promise<void>((resolve, reject) => {
    try {
      fetch(`${import.meta.env.VITE_YARTISAN_API_URL}/artisant/signup`, { method: "POST", body: JSON.stringify(artisan) })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          resolve();
        })
    } catch (error) {
      reject(error);
    }
  });
};
