import { IArtisan } from "@/types/interfaces";
import { artisans } from "@/fetch/datas/artisansData";

export const getAllArtisans = () => {
  return new Promise<IArtisan[]>((resolve, reject) => {
    try {
      // TODO FETCH SERVER
      resolve(artisans);
    } catch (error) {
      reject(error);
    }
  });
};
