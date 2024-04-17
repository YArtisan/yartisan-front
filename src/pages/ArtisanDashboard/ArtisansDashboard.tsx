import React, { useState } from 'react';
import DashboardBanner from "@components/modules/ArtisanDashboard/atoms/DashboardBanner";
import ArtisanDashboardOrderInProgress from "@components/modules/ArtisanDashboard/molecules/ArtisanDashboardOrderInProgress";
import ArtisanDashboardOrderWaiting from "@components/modules/ArtisanDashboard/molecules/ArtisanDashboardOrderWaiting";
import ArtisanDashboardOrderPassed from "@components/modules/ArtisanDashboard/molecules/ArtisanDashboardOrderPassed";
import ArtisanDashboardDetails from "@components/modules/ArtisanDashboard/molecules/ArtisanDashboardDetails";
import "../ArtisanDashboard/ArtisansDashboard.scss";

function ArtisanDashboard() {
  const [selectedTab, setSelectedTab] = useState("Tout");

  const handleTabClick = (tabName: React.SetStateAction<string>) => {
    setSelectedTab(tabName);
  };

  return (
    <>
      <div className="lg:mx-30 md:mx-10 mx-4 md:grid grid-cols-3 my-[60px] md:gap-6">
        <section className="left_column flex flex-col gap-8 col-span-2">
          <DashboardBanner />

          <ul className="mt-[20px] flex-col sm:flex-row flex flex-wrap items-center justify-between font-bold cursor-pointer">
            <li onClick={() => handleTabClick("Tout")} className={selectedTab === "Tout" ? "selected" : ""}>Tout</li>
            <li onClick={() => handleTabClick("Commande en cours")} className={selectedTab === "Commande en cours" ? "selected" : ""}>Commande en cours</li>
            <li onClick={() => handleTabClick("Commande en attente")} className={selectedTab === "Commande en attente" ? "selected" : ""}>Commande en attente</li>
            <li onClick={() => handleTabClick("Commande passée")} className={selectedTab === "Commande passée" ? "selected" : ""}>Commande passée</li>
          </ul>

          <div className='flex flex-col gap-10'>
            {(selectedTab === "Tout" || selectedTab === "Commande en cours") && <ArtisanDashboardOrderInProgress />}
            {(selectedTab === "Tout" || selectedTab === "Commande en attente") && <ArtisanDashboardOrderWaiting />}
            {(selectedTab === "Tout" || selectedTab === "Commande passée") && <ArtisanDashboardOrderPassed />}
          </div>
        </section>

        <section className="right_column flex flex-col gap-8">
          <ArtisanDashboardDetails />
        </section>
      </div>
    </>
  );
}

export default ArtisanDashboard;
