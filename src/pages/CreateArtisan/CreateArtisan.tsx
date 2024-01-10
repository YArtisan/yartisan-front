import { postArtisant as postArtisan } from "@/fetch/artisanActions";
import {
  IAddress,
  IApiAddress,
  IArtisanFormData,
  IHoraire,
} from "@/types/interfaces";
import Button from "@atoms/Button";
import { AddressInput, TextAreaInput, TextInput } from "@atoms/Inputs";
import HorairesInput from "@atoms/Inputs/HorairesInput";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowLeft } from "react-icons/fa";

function CreateArtisan() {
  const { t } = useTranslation("createArtisan");
  const [errors, setErrors] = useState<string[]>([]);
  const [form, setForm] = useState<IArtisanFormData>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const checkErrors = () => {
    const errors: string[] = [];
    const keys: Record<string, ((data: any) => boolean) | null> = {
      compagny_name: null,
      phone: null,
      job_description: null,
      average_price: null,
      number_of_employees: null,
      email: null,
      profile_picture: null,
      address: (data: IApiAddress) => !data.lat || !data.lon,
      horaires: (data: IHoraire[]) =>
        data.length === 0 ||
        data.some(
          ({ closing_time, opening_time }) => !closing_time || !opening_time
        ),
    };

    Object.entries(keys).map(([key, errorFunction]) => {
      const data = form[key as keyof IArtisanFormData];
      if (!data) {
        errors.push(key);
      } else if (errorFunction && errorFunction(data)) {
        errors.push(key);
      }
    });

    setErrors(errors);
    return errors;
  };

  const handleSubmit = () => {
    const errors = checkErrors();

    if (errors.length > 0) return;
    postArtisan(form).then(() => {
      alert(`L'artisan ${form.compagny_name} a été ajouté !`);
      // setForm({});
    });
  };

  return (
    <div className="relative bg-white w-full max-w-[1000px] mx-auto rounded-xl shadow-2xl p-2">
      <h1 className="text-center mb-6">{t("title")}</h1>
      <a href="/profile">
        <FaArrowLeft
          className="absolute top-2 left-2 duration-150 cursor-pointer hover:scale-110"
          size={25}
        />
      </a>
      <div className="flex flex-col gap-4 mx-auto w-full max-w-[700px] pb-6">
        <TextInput
          label={t("compagny_name")}
          placeholder={t("compagny_name")}
          id="compagny_name"
          error={errors.includes("job_description")}
          onChange={handleChange}
          value={form.compagny_name ?? ""}
          required
        />
        <TextAreaInput
          label={t("job_description")}
          placeholder={t("job_description")}
          id="job_description"
          error={errors.includes("job_description")}
          onChange={handleChange}
          value={form.job_description ?? ""}
          required
        />
        <TextInput
          type="tel"
          label={t("phone")}
          placeholder="ex : 0612345678"
          id="phone"
          error={errors.includes("phone")}
          onChange={handleChange}
          value={form.phone ?? ""}
          required
        />
        <TextInput
          type="tel"
          label={t("profile_picture")}
          id="profile_picture"
          error={errors.includes("profile_picture")}
          onChange={handleChange}
          value={form.profile_picture ?? ""}
          required
        />
        <TextInput
          type="email"
          label={t("email")}
          placeholder="ex : example@xyz.com"
          id="email"
          error={errors.includes("email")}
          onChange={handleChange}
          value={form.email ?? ""}
          required
        />
        <AddressInput
          label={t("address")}
          placeholder={t("address")}
          id="address"
          error={errors.includes("address")}
          handleChange={(address) => setForm({ ...form, address })}
          value={form.address}
          required
        />
        <TextInput
          type="number"
          min={0}
          label={t("average_price")}
          placeholder={t("average_price")}
          id="average_price"
          error={errors.includes("average_price")}
          onChange={handleChange}
          value={form.average_price ?? ""}
          required
        />
        <TextInput
          type="number"
          min={0}
          label={t("number_of_employees")}
          placeholder={t("number_of_employees")}
          id="number_of_employees"
          error={errors.includes("number_of_employees")}
          onChange={handleChange}
          value={form.number_of_employees ?? ""}
          required
        />
        <HorairesInput
          label={t("horaires")}
          placeholder={t("horaires")}
          id="horaires"
          error={errors.includes("horaires")}
          handleChange={(horaires) => setForm({ ...form, horaires })}
          value={form.horaires}
          required
        />
        <Button
          onClick={handleSubmit}
          template="secondary"
          className="mt-6 w-52 mx-auto rounded-xl"
        >
          {t("create")}
        </Button>
      </div>
    </div>
  );
}

export default CreateArtisan;
