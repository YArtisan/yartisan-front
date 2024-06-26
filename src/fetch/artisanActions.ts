import { IArtisan, IArtisanFormData } from "@/types/interfaces";

export const getAllArtisans = () => {
  return new Promise<IArtisan[]>((resolve, reject) => {
    try {
      fetch(
        `${import.meta.env.VITE_YARTISAN_API_URL}/artisant/get-all-artisant`
      )
        .then((res) => res.json())
        .then(({ data }) => {
          const artisansData = data?.map((e: any) => {
            const { artisantData, opening_time, address, ratings } = e;
            return {
              ...artisantData,
              ratings,
              address: address[0],
              opening_hours: opening_time,
            };
          });

          resolve(artisansData ?? []);
        });
    } catch (error) {
      reject(error);
    }
  });
};

export const getArtisanByID = (id: string) => {
  return new Promise<IArtisan>((resolve, reject) => {
    try {
      fetch(`${import.meta.env.VITE_YARTISAN_API_URL}/artisant/` + id)
        .then((res) => res.json())
        .then(({ data }) => {
          const { artisantData, opening_time, address, ratings } = data;

          const send = {
            ...artisantData,
            ratings,
            address: address[0],
            opening_hours: opening_time,
          };

          resolve(send);
        });
    } catch (error) {
      reject(error);
    }
  });
};

export const postArtisan = (artisan: IArtisanFormData) => {
  return new Promise<void>((resolve, reject) => {
    try {
      fetch(`${import.meta.env.VITE_YARTISAN_API_URL}/artisant/signup`, {
        method: "POST",
        body: JSON.stringify(artisan),
        headers: {
          "Content-Type": "application/json",
          "Accept-Encoding": "application/json",
        },
      })
        .then((res) => res.json())
        .then(() => {
          resolve();
        });
    } catch (error) {
      reject(error);
    }
  });
};

export const postArtisant = (artisan: IArtisanFormData) => {
  return new Promise<void>((resolve, reject) => {
    try {
      fetch(`${import.meta.env.VITE_YARTISAN_API_URL}/artisant/signup`, {
        method: "POST",
        body: JSON.stringify(artisan),
      })
        .then((res) => res.json())
        .then((res) => {
          resolve();
        });
    } catch (error) {
      reject(error);
    }
  });
};
