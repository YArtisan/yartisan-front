import { IAddress, IApiAddress, ICoords } from "@/types/interfaces";
import { axiosWithCache } from "@utils/axiosConfig";
import { getCompleteAddress } from "@utils/functions";

export const getLatLonFromAddress = (address: string | IAddress) => {
    const q = typeof address !== "string" ? getCompleteAddress(address) : address;
    return new Promise<ICoords>((resolve, reject) => {
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

export const getAddresses = (address: string | IAddress) => {
    const q = typeof address !== "string" ? getCompleteAddress(address) : address;
    return new Promise<IApiAddress[]>((resolve, reject) => {
        axiosWithCache
            .get("https://nominatim.openstreetmap.org/search", {
                params: { q, format: "json", polygon: 1, addressdetails: 1, limit: 5 },
            })
            .then((res) => {
                console.log(res.data);

                const addresses = res.data.map(({ address, lat, lon }: any) => {
                    const { postcode, town, country, road, house_number, municipality } = address
                    return ({
                        address_number: house_number,
                        postal_code: postcode,
                        city: town ?? municipality,
                        street_name: road,
                        country,
                        lat: parseFloat(lat),
                        lon: parseFloat(lon),
                    } as IApiAddress)
                })
                addresses
                resolve(addresses);
            })
            .catch((err) => reject(err.data));
    });
};