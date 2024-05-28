import { getLatLonFromAddress } from "@/fetch/addressActions";
import { getArtisanByID } from "@/fetch/artisanActions";
import { IArtisan } from "@/types/interfaces";
import { useAuthState } from "@/user/components/UserProvider";
import { ArtisanUser } from "@/user/types/User";
import Map from "@atoms/Map";
import Horaires from "@molecules/Horaires";
import { getCompleteAddress } from "@utils/functions";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const ArtisanDashboardDetails = () => {
  const { t } = useTranslation();
  const { connectedUser } = useAuthState();
  const user = connectedUser as ArtisanUser;
  const [artisan, setArtisan] = useState<IArtisan | undefined>();
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(
    null
  );

  useEffect(() => {
    if (user && user.userFunction === "artisan") {
      getArtisanByID(user._id).then((artisan) => {
        setArtisan(artisan);

        getLatLonFromAddress(artisan.address)
          .then((res) => setCoords(res))
          .catch(() => setCoords(null));
      });
    }
  }, [user]);

  return (
    <>
      {/* <button className="bg-secondary px-3 py-2 rounded-md text-white">
        Modifier Profil
      </button> */}
      {artisan && (
        <div className="flex flex-col mb-2">
          <h2 className="font-bold text-lg">
            {t("artisanDetails:openingHours")}
          </h2>
          <Horaires artisan={artisan} />
        </div>
      )}
      <div className="flex flex-col mb-2">
        <h2 className="font-bold text-lg">Informations</h2>
        <p>{user?.job_description}</p>
      </div>
      <div className="flex flex-col mb-2">
        <h2 className="font-bold text-lg">Email</h2>
        <p>{user?.email}</p>
      </div>
      <div className="flex flex-col mb-2">
        <h2 className="font-bold text-lg">{t("createArtisan:phone_number")}</h2>
        <p>{user?.phone_number}</p>
      </div>
      <div className="flex flex-col mb-2">
        <h2 className="font-bold text-lg">
          {t("createArtisan:average_price")}
        </h2>
        <p>{user?.average_price}€ </p>
      </div>
      {artisan && (
        <div className="flex flex-col mb-2">
          <h2 className="font-bold text-lg">{t("createArtisan:address")}</h2>
          <p>{getCompleteAddress(artisan.address)}</p>
          {coords && (
            <div className="w-full h-[300px] bg-slate-400 rounded-md overflow-hidden">
              <Map coords={coords} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ArtisanDashboardDetails;
