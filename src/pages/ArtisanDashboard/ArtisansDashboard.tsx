import React, { useState } from 'react';
import DashboardBanner from "@molecules/DashboardBanner";
import ArtisanDashboardOrderInProgress from "@organisms/ArtisanDashboardOrderInProgress";
import ArtisanDashboardOrderWaiting from "@organisms/ArtisanDashboardOrderWaiting";
import ArtisanDashboardOrderPassed from "@organisms/ArtisanDashboardOrderPassed";
import ArtisanDashboardDetails from "@organisms/ArtisanDashboardDetails";
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

          {(selectedTab === "Tout" || selectedTab === "Commande en cours") && <ArtisanDashboardOrderInProgress />}
          {(selectedTab === "Tout" || selectedTab === "Commande en attente") && <ArtisanDashboardOrderWaiting />}
          {(selectedTab === "Tout" || selectedTab === "Commande passée") && <ArtisanDashboardOrderPassed />}
        </section>

        <section className="right_column flex flex-col gap-8">
          <ArtisanDashboardDetails />
        </section>
      </div>
    </>
  );
}

export default ArtisanDashboard;
