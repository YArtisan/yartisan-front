import React from 'react'

const commandeEnCours = [
    {
      id: 1,
      name: "Thomas Kauffmant",
      imageUrl:
        "https://images.unsplash.com/photo-1682687219573-3fd75f982217?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti asperiores eveniet alias ipsam, reiciendis hic ipsum numquam, error repellendus odit fugit recusandae molestiae.",
    },
    {
      id: 2,
      name: "Moeung siweil",
      imageUrl:
        "https://images.unsplash.com/photo-1682687219573-3fd75f982217?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti asperiores eveniet alias ipsam, reiciendis hic ipsum numquam, error repellendus odit fugit recusandae molestiae.",
    },
    {
      id: 3,
      name: "Ludovic Chhay",
      imageUrl:
        "https://images.unsplash.com/photo-1682687219573-3fd75f982217?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti asperiores eveniet alias ipsam, reiciendis hic ipsum numquam, error repellendus odit fugit recusandae molestiae.",
    },
    {
      id: 4,
      name: "francois jean",
      imageUrl:
        "https://images.unsplash.com/photo-1682687219573-3fd75f982217?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti asperiores eveniet alias ipsam, reiciendis hic ipsum numquam, error repellendus odit fugit recusandae molestiae.",
    },
  ];

const ArtisanDashboardOrderInProgress = () => {
  return (
    <div className=" flex flex-col gap-4">
    <h2 className="flex gap-2 text-xl">
      Commande en cours <p>(3)</p>
    </h2>
    <div className="md:grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {commandeEnCours.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-8 justify-center rounded-md bg-card shadow-md p-8"
        >
          <div className="flex gap-3 items-center">
            <img
              className="w-[50px] h-[50px] rounded-full"
              src={item.imageUrl}
              alt=""
            />
            <p className="font-bold">{item.name}</p>
          </div>
          <p>{item.description}</p>
          <div className="flex justify-center w-full">
            <button className="bg-secondary text-white px-3 py-2 rounded-lg">
              Contacter
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default ArtisanDashboardOrderInProgress