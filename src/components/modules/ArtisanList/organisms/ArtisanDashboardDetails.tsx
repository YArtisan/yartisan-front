const ArtisanDashboardDetails = () => {
  return (
    <>
      <div>
        <div className="flex justify-between items-center font-bold">
          <p>Status de votre annonce:</p>
          <button className="bg-green-500 px-3 py-2 rounded-md text-white">
            Visible
          </button>
        </div>
      </div>
      <button className="bg-secondary px-3 py-2 rounded-md text-white">
        Modifier Profil
      </button>
      <div className="flex flex-col gap-2">
        <h2>Horaire</h2>
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quis
          incidunt iure sapiente nulla sunt repellat. A, excepturi voluptas
          officia mollitia alias deleniti nisi maiores, eaque quod, deserunt
          fugit praesentium.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h2>Email</h2>
        <p>Ynov@Ynov.com</p>
      </div>
      <div className="flex flex-col gap-2">
        <h2>Téléphone</h2>
        <p>06.52.67.94.35</p>
      </div>
      <div className="flex flex-col gap-2">
        <h2>Tarif moyen</h2>
        <p>250$</p>
      </div>
      <div className="flex flex-col gap-2">
        <h2>Addresse</h2>
        <p>245 rue jean pierre arnault, Lyon 5, FRANCE</p>
        <div className="w-full h-[300px] bg-slate-400 rounded-md"></div>
      </div>
    </>
  );
};

export default ArtisanDashboardDetails;
