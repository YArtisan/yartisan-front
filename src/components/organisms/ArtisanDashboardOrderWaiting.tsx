
const ArtisanDashboardOrderWaiting = () => {

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


  return (
    <div className="mt-[40px] flex flex-col gap-4">
    <h2 className="flex gap-2 text-xl">
      Commande en attente <p>(4)</p>
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
          <div className="flex w-full justify-around">
            <button className="bg-green-500 text-white px-3 py-2 rounded-lg">
              Accepter
            </button>
            <button className="bg-red-500 text-white px-3 py-2 rounded-lg">
              Décliner
            </button>
            <button className="bg-secondary text-white px-3 py-2 rounded-lg">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M3 8L8.44992 11.6333C9.73295 12.4886 10.3745 12.9163 11.0678 13.0825C11.6806 13.2293 12.3194 13.2293 12.9322 13.0825C13.6255 12.9163 14.2671 12.4886 15.5501 11.6333L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default ArtisanDashboardOrderWaiting