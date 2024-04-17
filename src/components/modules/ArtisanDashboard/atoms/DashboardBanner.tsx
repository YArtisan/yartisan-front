import { useAuthState } from "@/user/components/UserProvider";
import { ArtisanUser } from "@/user/types/User";
import React from "react";

const DashboardBanner = () => {
  const authState = useAuthState();
  const user: ArtisanUser | undefined = authState.connectedUser as ArtisanUser;

  return (
    <div className="bg-primary flex items-center h-[150px] lg:h-[200px] rounded-md px-10 gap-4">
      <img
        className="w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] rounded-full object-cover"
        src={user?.profile_picture}
        alt=""
      />
      <h1 className="text-2xl lg:text-4xl">{user?.company_name}</h1>
    </div>
  );
};

export default DashboardBanner;
