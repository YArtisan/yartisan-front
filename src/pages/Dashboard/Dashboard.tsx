import React, { useEffect, useState } from "react";
import DashboardBanner from "@components/modules/ArtisanDashboard/atoms/DashboardBanner";
import ArtisanDashboardDetails from "@components/modules/ArtisanDashboard/molecules/ArtisanDashboardDetails";
import "../Dashboard/Dashboard.scss";
import axios from "@/api/service/axios";
import { useAuthState } from "@/user/components/UserProvider";
import Button from "@atoms/Button";

interface IOrder {
  _id: string;
  user_id: string;
  artisan_id: string;
  title: string;
  description: string;
  price: number;
  url: string;
  status: string; // paid, waiting, cancelled
  createdAt: string;
}

function Dashboard() {
  const { connectedUser } = useAuthState();
  const [selectedTab, setSelectedTab] = useState("all");
  const [orders, setOrders] = useState<IOrder[]>([]);

  const tabs = [
    { value: "all", label: "Toutes les commandes" },
    { value: "waiting", label: "Commandes en cours" },
    { value: "shipping", label: "Commandes en cours de livraison" },
    { value: "cancelled", label: "Commandes annulées" },
    { value: "paid", label: "Commandes payées" },
    { value: "refunded", label: "Commandes remboursées" },
    { value: "done", label: "Commandes terminées" },
  ];

  useEffect(() => {
    if (!connectedUser) return;
    const url = `/order/all-${connectedUser.userFunction}-order`;
    axios.get(url).then((res) => {
      setOrders(res.data.data);
    });
  }, [connectedUser]);

  const handleUpdate = (id: string, data: Partial<IOrder>) => {
    axios
      .put("/order/" + id, data)
      .then((res) => {
        alert("La commande a été modifiée.");
        setOrders((old) =>
          old.map((e) => {
            if (e._id !== id) return e;
            return { ...e, ...data };
          })
        );
      })
      .catch((err) => {
        console.log(err);
        alert("Une erreur est survenue.");
      });
  };

  const addRating = (order: IOrder) => {
    const score = prompt("Laissez une note entre 1 et 5 à l'artisan");
    if (
      !score ||
      Number.isNaN(score) ||
      parseInt(score) > 5 ||
      parseInt(score) < 1
    ) {
      return alert("La note doit être un chiffre entre 1 et 5.");
    }

    const avis = prompt(
      'Vous pouvez laisser un commentaire à l\'artisan si vous le souhaitez, sinon appuyez sur "OK"'
    );

    axios
      .post("/rating/new", {
        user_id: order.user_id,
        artisant_id: order.artisan_id,
        score,
        avis,
      })
      .then(() => {
        alert("Votre avis a été ajouté !");
      })
      .catch((err) => {
        console.log(err);
        alert("Une erreur est survenue.");
      });
  };

  if (!connectedUser)
    return (
      <div className="flex flex-col items-center absolute right-1/2 top-1/2 translate-x-1/2 w-fit">
        <p className="font-bold mb-4 text-xl">Vous n'êtes pas connecté</p>
        <a href="/">
          <Button template="secondary">Retour à l'accueil</Button>
        </a>
      </div>
    );

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "waiting":
        return { label: "En attente de paiement", className: "bg-orange-500" };
      case "paid":
        return { label: "Payée", className: "bg-blue-500" };
      case "shipping":
        return { label: "En livraison", className: "bg-yellow-500" };
      case "cancelled":
        return { label: "Annulée", className: "bg-red-500" };
      case "refunded":
        return { label: "Remboursée", className: "bg-red-500" };
      case "done":
        return { label: "Terminée", className: "bg-green-500" };

      default:
        return { label: "", className: "" };
    }
  };

  return (
    <>
      <div className="mt-16 p-10 flex gap-10 max-[1000px]:flex-col ">
        <div className="flex-1 flex flex-col gap-10 ">
          <DashboardBanner />

          <section className="bg-white rounded p-2 max-full overflow-auto">
            <select
              className="mb-2 outline-none border-b-2 border-b-secondary"
              onChange={(e) => setSelectedTab(e.target.value)}
            >
              {tabs.map(({ value, label }) => (
                <option
                  key={`tab-${value}`}
                  value={value}
                  onClick={() => setSelectedTab(value)}
                >
                  {label}
                </option>
              ))}
            </select>

            <div className="flex flex-col gap-10">
              <table className="passedOrder">
                <thead className="bg-secondary">
                  <tr>
                    <th></th>
                    <th>Nom</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Montant</th>
                    <th>Statut</th>
                    <th>Opération</th>
                  </tr>
                </thead>
                <tbody>
                  {orders
                    .filter(
                      ({ status }) =>
                        selectedTab === "all" || selectedTab === status
                    )
                    .map((order) => {
                      const {
                        _id,
                        title,
                        price,
                        description,
                        createdAt,
                        url,
                        status,
                      } = order;
                      const { label, className } = getStatusLabel(status);
                      return (
                        <tr key={_id}>
                          <td>
                            <img
                              className="h-[40px] w-[40px] aspect-square rounded-full"
                              src={"/images/user.jpg"}
                              alt=""
                            />
                          </td>
                          <td>{title}</td>
                          <td>{description}</td>
                          <td>{new Date(createdAt).toLocaleDateString()}</td>
                          <td>{price} €</td>
                          <td>
                            <p
                              className={`rounded w-fit p-1 bg-opacity-70 text-center ${className}`}
                            >
                              {label}
                            </p>
                          </td>
                          {(() => {
                            if (connectedUser.userFunction === "user") {
                              switch (status) {
                                case "waiting":
                                  return (
                                    <td>
                                      <a href={url} target="_blank">
                                        <Button
                                          template="secondary"
                                          className="text-sm"
                                        >
                                          Cliquez pour payer
                                        </Button>
                                      </a>
                                    </td>
                                  );
                                case "done":
                                  return (
                                    <td>
                                      <Button
                                        template="secondary"
                                        className="text-sm"
                                        onClick={() => addRating(order)}
                                      >
                                        Ajouter un avis
                                      </Button>
                                    </td>
                                  );
                                default:
                                  break;
                              }
                            }

                            if (connectedUser.userFunction === "artisan") {
                              switch (status) {
                                case "paid":
                                  return (
                                    <td>
                                      <Button
                                        template="secondary"
                                        className="text-sm"
                                        onClick={() =>
                                          handleUpdate(_id, {
                                            status: "shipping",
                                          })
                                        }
                                      >
                                        Lancer la livraison
                                      </Button>
                                    </td>
                                  );
                                case "shipping":
                                  return (
                                    <td>
                                      <Button
                                        template="secondary"
                                        className="text-sm"
                                        onClick={() =>
                                          handleUpdate(_id, {
                                            status: "done",
                                          })
                                        }
                                      >
                                        Livraison terminée
                                      </Button>
                                    </td>
                                  );
                                default:
                                  break;
                              }
                            }

                            return <td></td>;
                          })()}
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <section className="bg-white rounded p-2">
          <ArtisanDashboardDetails />
        </section>
      </div>
    </>
  );
}

export default Dashboard;
