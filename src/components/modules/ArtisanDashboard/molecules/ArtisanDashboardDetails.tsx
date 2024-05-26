import axios from "@/api/service/axios";
import { useAuthState } from "@/user/components/UserProvider";
import { ArtisanUser } from "@/user/types/User";
import Map from "@atoms/Map";
import { useEffect, useState } from "react";

const ArtisanDashboardDetails = () => {
  const { connectedUser } = useAuthState();
  const user = connectedUser as ArtisanUser;
  const [openingHours, setOpeningHours] = useState<any[]>([]);
  console.log("user", user);

  useEffect(() => {
    // if (user && user.userFunction === "artisan")
  }, [user]);

  return (
    <>
      <button className="bg-secondary px-3 py-2 rounded-md text-white">
        Modifier Profil
      </button>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold">Horaires</h2>
        <div className="px-8">
          <div className="flex justify-between">
            <p>lundi</p>
            <p>-</p>
            <p>9h à 18h</p>
          </div>
          <div className="flex justify-between">
            <p>lundi</p>
            <p>-</p>
            <p>9h à 18h</p>
          </div>
          <div className="flex justify-between">
            <p>lundi</p>
            <p>-</p>
            <p>9h à 18h</p>
          </div>
          <div className="flex justify-between">
            <p>lundi</p>
            <p>-</p>
            <p>9h à 18h</p>
          </div>
          <div className="flex justify-between">
            <p>lundi</p>
            <p>-</p>
            <p>9h à 18h</p>
          </div>
          <div className="flex justify-between">
            <p>lundi</p>
            <p>-</p>
            <p>9h à 18h</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2>Informations</h2>
        <p>{user?.job_description}</p>
      </div>
      <div className="flex flex-col gap-2">
        <h2>Email</h2>
        <p>{user?.email}</p>
      </div>
      <div className="flex flex-col gap-2">
        <h2>Téléphone</h2>
        <p>{user?.phone_number}</p>
      </div>
      <div className="flex flex-col gap-2">
        <h2>Tarif moyen</h2>
        <p>{user?.average_price}€ </p>
      </div>
      <div className="flex flex-col gap-2">
        <h2>Addresse</h2>
        <p>245 rue jean pierre arnault, Lyon 5, FRANCE</p>
        <div className="w-full h-[300px] bg-slate-400 rounded-md overflow-hidden">
          <Map coords={{ lat: 300, lon: 0 }} />
        </div>
      </div>
    </>
  );
};

export default ArtisanDashboardDetails;
