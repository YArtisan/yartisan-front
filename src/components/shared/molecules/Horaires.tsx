import { IArtisan } from "@/types/interfaces";
import { capitalize, getHoraires } from "@utils/functions";
import { useTranslation } from "react-i18next";

function Horaires({ artisan }: { artisan: IArtisan }) {
  const { t } = useTranslation("artisanDetails");
  const days = t("days:days", { returnObjects: true }) as string[];
  const { company_name, opening_hours } = artisan;

  const horaires = getHoraires(
    Array.isArray(opening_hours) ? opening_hours : [opening_hours]
  );

  return (
    <ul className="mb-6">
      {horaires.map(({ opening_time, closing_time, ...horaire }, i) => {
        let jours = "";
        const firstDay = days[horaire.days[0]];

        if (horaire.days.length > 1) {
          const lastDay = days[horaire.days[horaire.days.length - 1]];
          jours = `${t("from")} ${firstDay} ${t("to")} ${lastDay}`;
        } else {
          jours = `${capitalize(firstDay)}`;
        }

        const heures = `${opening_time} - ${closing_time}`;

        return (
          <li
            className="flex items-center justify-between"
            key={`artisan-${company_name}-horaire-${i}`}
          >
            <span>{jours}</span>
            <span>{heures}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default Horaires;
