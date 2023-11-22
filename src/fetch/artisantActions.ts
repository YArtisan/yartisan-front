import { IArtisant } from "@/types/interfaces";
import { artisants } from "@components/datas/artisantsData";

export const getAllArtisants = () => {
  return new Promise<IArtisant[]>((resolve, reject) => {
    try {
      // TODO FETCH SERVER
      resolve(artisants);
    } catch (error) {
      reject(error);
    }
  });
};
