import { useAuthState } from "@/user/components/UserProvider";
import { ArtisanUser } from "@/user/types/User";
import React from "react";

const DashboardBanner = () => {
  const { connectedUser } = useAuthState();
  const user = connectedUser;

  if (!user) return null;

  const imgUrl =
    user.userFunction === "artisan"
      ? (user as ArtisanUser).profile_picture
      : "/images/user.jpg";
  const name =
    user.userFunction === "artisan"
      ? (user as ArtisanUser).company_name
      : user.email;

  return (
    <div className="bg-white flex items-center h-[150px] lg:h-[200px] rounded-md px-10 gap-4">
      <img
        className="w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] rounded-full object-cover"
        src={imgUrl}
        alt=""
      />
      <h1 className="text-2xl lg:text-4xl break-all">{name}</h1>
    </div>
  );
};

export default DashboardBanner;
