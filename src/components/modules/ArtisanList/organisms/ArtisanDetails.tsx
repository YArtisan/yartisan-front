import React, { useEffect, useState } from "react";
import { IArtisan } from "@/types/interfaces";
import { capitalize, getHoraires, isValidUrl } from "@utils/functions";
import Button from "@atoms/Button";
import { getCompleteAddress } from "@utils/functions";
import Map from "@atoms/Map";
import Ratings from "@molecules/Ratings/Ratings";
import { FaPlus, FaRegBookmark } from "react-icons/fa";
import { getLatLonFromAddress } from "@/fetch/addressActions";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { createConversation } from "@/fetch/conversationActions";
import { useAuthState } from "@/user/components/UserProvider";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  artisan: IArtisan;
}

function ArtisanDetails({ artisan, className, ...props }: IProps) {
  const { connectedUser } = useAuthState();
  const { t } = useTranslation("artisanDetails");
  const days = t("days:days", { returnObjects: true }) as string[];
  const [height, _setHeight] = useState(() => window.innerHeight - 100);
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null);
  const {
    company_name,
    ratings,
    profile_picture,
    average_price,
    job_description,
  } = artisan;
  const address = getCompleteAddress(artisan.address);
  const horaires = getHoraires(artisan.opening_hours);
  const navigate = useNavigate();

  useEffect(() => {
    getLatLonFromAddress(address)
      .then((res) => setCoords(res))
      .catch(() => setCoords(null));
  }, [artisan]);

  const handleContact = () => {
    if (!connectedUser) return navigate("/login");
    createConversation(connectedUser._id, artisan._id).then(() => {
      navigate("/chat");
    });
  };

  return (
    <div
      {...props}
      style={{ height: `${height}px` }}
      className={[
        "flex flex-col bg-card rounded-md overflow-hidden h-[620px] sticky top-[90px]",
        className,
      ].join(" ")}
    >
      {isValidUrl(profile_picture) && (
        <img
          src={profile_picture}
          alt={t("banner", { companyName: company_name })}
          className="h-[150px] object-cover rounded-md"
        />
      )}
      <div className="p-8 overflow-y-auto">
        <div className="flex justify-between">
          <p className="text-xl font-bold mb-2">{company_name}</p>
          <FaRegBookmark size={24} />
        </div>
        <div className="flex gap-2 flex-wrap mb-6 text-sm">
          <Button template="secondary" invertColors onClick={handleContact}>
            {t("contact")}
          </Button>
        </div>
        <p className="text-lg font-bold">{t("openingHours")}</p>
        <ul className="mb-6">
          {horaires.map(({ opening_time, closing_time, ...horaire }, i) => {
            let jours = "";
            const firstDay = days[horaire.days[0]];

            if (horaire.days.length > 1) {
              const lastDay = days[horaire.days[horaire.days.length - 1]];
              jours = `${t("from")} ${firstDay} ${t("to")} ${lastDay}`;
            } else {
              jours = `${capitalize(firstDay)}`;
            }

            const heures = `${opening_time} ${t("to")} ${closing_time}`;

            return (
              <li
                className="flex items-center justify-between"
                key={`artisan-${company_name}-horaire-${i}`}
              >
                <span>{jours}</span>
                <span>{heures}</span>
              </li>
            );
          })}
        </ul>
        <p className="text-lg font-bold">{t("information")}</p>
        <p className="mb-6">{job_description}</p>
        <p className="text-lg font-bold">{t("averagePrice")}</p>
        <p className="mb-6">{average_price} €</p>
        <p className="text-lg font-bold">{t("address")}</p>
        <p className="mb-4">{address}</p>
        {coords && <Map className="mb-4" coords={coords} />}
        <Ratings ratings={ratings} />
      </div>
    </div>
  );
}

export default ArtisanDetails;
