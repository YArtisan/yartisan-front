const ArtisanDashboardOrderPassed = () => {
  const data2 = [
    {
      id: 1,
      name: "Thomas Kauffmant",
      imageUrl:
        "https://images.unsplash.com/photo-1682687219573-3fd75f982217?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "12/06/2023",
      montant: "296$",
    },
    {
      id: 2,
      name: "Moeung siweil",
      imageUrl:
        "https://images.unsplash.com/photo-1682687219573-3fd75f982217?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "24/04/2023",
      montant: "245$",
    },
    {
      id: 3,
      name: "Ludovic Chhay",
      imageUrl:
        "https://images.unsplash.com/photo-1682687219573-3fd75f982217?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "24/04/2023",
      montant: "68$",
    },
    {
      id: 4,
      name: "francois jean",
      imageUrl:
        "https://images.unsplash.com/photo-1682687219573-3fd75f982217?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "24/04/2023",
      montant: "157$",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h2 className="flex gap-2 text-xl">
        Commande passée <p>(4)</p>
      </h2>
      <table className="passedOrder">
        <thead className="bg-primary ">
          <tr>
            <th></th>
            <th>Nom</th>
            <th>Date</th>
            <th>Montant</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {data2.map((item) => (
            <tr key={item.id}>
              <td className="flex justify-center">
                <img
                  className="h-[40px] w-[40px] rounded-full"
                  src={item.imageUrl}
                  alt=""
                />
              </td>
              <td>{item.name}</td>
              <td>{item.date}</td>
              <td>{item.montant}</td>
              <td>
                <button className="bg-secondary text-white px-3 py-2 rounded-lg">
                  Contact
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArtisanDashboardOrderPassed;
