import React, { useEffect, useState } from "react";
import { IArtisan } from "@/types/interfaces";
import {
  capitalize,
  getHoraires,
  getLatLonFromAddress,
} from "@utils/functions";
import { days } from "@utils/variables";
import Button from "@atoms/Button";
import { getCompleteAddress } from "@utils/functions";
import Map from "@atoms/Map";
import Ratings from "@molecules/Ratings/Ratings";
import { FaBookmark } from "react-icons/fa";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  artisan: IArtisan;
}

function ArtisanDetails({ artisan, className, ...props }: IProps) {
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(
    null
  );
  const {
    compagny_name,
    ratings,
    profile_picture,
    avg_price,
    job_description,
  } = artisan;
  const address = getCompleteAddress(artisan.address);

  const horaires = getHoraires(artisan.horaires);

  useEffect(() => {
    getLatLonFromAddress(address)
      .then((res) => setCoords(res))
      .catch(() => setCoords(null));
  }, [artisan]);

  return (
    <div
      {...props}
      className={[
        "flex flex-col bg-card rounded-md overflow-hidden h-[620px] sticky top-[90px]",
        className,
      ].join(" ")}
    >
      <img
        src={profile_picture}
        alt={`Bannière de ${compagny_name}`}
        className="h-[150px] object-cover rounded-md"
      />
      <div className="p-5 overflow-y-auto">
        <div className="flex justify-between">
          <p className="text-xl font-bold mb-2">{compagny_name}</p>
          <FaBookmark size={24} />
        </div>
        <div className="flex gap-2 flex-wrap mb-6 text-sm">
          <Button template="secondary" invertColors>
            Contacter
          </Button>
          <Button template="secondary">Réserver</Button>
        </div>
        <p className="text-lg font-bold">Horaires</p>
        <ul className="pl-5 list-disc mb-6">
          {horaires.map(({ opening_time, closing_time, ...horaire }, i) => {
            let text = "";
            const firstDay = days[horaire.days[0] - 1];

            if (horaire.days.length > 1) {
              const lastDay = days[horaire.days[horaire.days.length - 1] - 1];
              text = `Du ${firstDay} au ${lastDay} - ${opening_time} à ${closing_time}`;
            } else {
              text = `${capitalize(
                firstDay
              )} - ${opening_time} à ${closing_time}`;
            }

            return (
              <li key={`artisan-${compagny_name}-horaire-${i}`}>{text}</li>
            );
          })}
        </ul>
        <p className="text-lg font-bold">Informations</p>
        <p className="mb-6">{job_description}</p>
        <p className="text-lg font-bold">Tarif moyen</p>
        <p className="mb-6">{avg_price} €</p>
        <p className="text-lg font-bold">Adresse</p>
        <p className="mb-4">{address}</p>
        {coords && <Map className="mb-4" coords={coords} />}
        <p className="text-lg font-bold">Notes</p>
        <Ratings ratings={ratings} />
      </div>
    </div>
  );
}

export default ArtisanDetails;
