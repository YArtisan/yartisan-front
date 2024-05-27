import React, { useEffect, useState } from "react";
import DashboardBanner from "@components/modules/ArtisanDashboard/atoms/DashboardBanner";
import ArtisanDashboardDetails from "@components/modules/ArtisanDashboard/molecules/ArtisanDashboardDetails";
import "../Dashboard/Dashboard.scss";
import axios from "@/api/service/axios";
import { useAuthState } from "@/user/components/UserProvider";
import Button from "@atoms/Button";
import NotAuth from "@atoms/NotAuth";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation("dashboard");
  const { connectedUser } = useAuthState();
  const [selectedTab, setSelectedTab] = useState("all");
  const [orders, setOrders] = useState<IOrder[]>([]);

  const options = [
    { value: "all", label: t("options.all") },
    { value: "waiting", label: t("options.waiting") },
    { value: "shipping", label: t("options.shipping") },
    { value: "cancelled", label: t("options.cancelled") },
    { value: "paid", label: t("options.paid") },
    { value: "refunded", label: t("options.refunded") },
    { value: "done", label: t("options.done") },
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
      .then(() => {
        alert(t("orderUpdated"));
        setOrders((old) =>
          old.map((e) => {
            if (e._id !== id) return e;
            return { ...e, ...data };
          })
        );
      })
      .catch((err) => {
        console.log(err);
        alert(t("error"));
      });
  };

  const addRating = (order: IOrder) => {
    const score = prompt(t("note"));
    if (
      !score ||
      Number.isNaN(score) ||
      parseInt(score) > 5 ||
      parseInt(score) < 1
    ) {
      return alert("noteRequirement");
    }

    const avis = prompt(t("comment"));

    axios
      .post("/rating/new", {
        user_id: order.user_id,
        artisant_id: order.artisan_id,
        score,
        avis,
      })
      .then(() => {
        alert(t("added"));
      })
      .catch((err) => {
        console.log(err);
        alert(t("error"));
      });
  };

  if (!connectedUser) return <NotAuth />;

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "waiting":
        return { label: t("status." + status), className: "bg-orange-500" };
      case "paid":
        return { label: t("status." + status), className: "bg-blue-500" };
      case "shipping":
        return { label: t("status." + status), className: "bg-yellow-500" };
      case "cancelled":
        return { label: t("status." + status), className: "bg-red-500" };
      case "refunded":
        return { label: t("status." + status), className: "bg-red-500" };
      case "done":
        return { label: t("status." + status), className: "bg-green-500" };
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
              {options.map(({ value, label }) => (
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
                    <td>{t("headers.customer")}</td>
                    <td>{t("headers.name")}</td>
                    <td>{t("headers.description")}</td>
                    <td>{t("headers.date")}</td>
                    <td>{t("headers.amount")}</td>
                    <td>{t("headers.status")}</td>
                    <td>{t("headers.operation")}</td>
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
