import { postArtisant as postArtisan } from "@/fetch/artisanActions";
import {
  IApiAddress,
  IArtisanFormData,
  IOpeningHours,
} from "@/types/interfaces";
import Button from "@atoms/Button";
import { AddressInput, TextAreaInput, TextInput } from "@atoms/Inputs";
import HorairesInput from "@atoms/Inputs/HorairesInput";
import { useState } from "react";
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
      company_name: null,
      phone_number: null,
      job_description: null,
      average_price: null,
      number_of_employees: null,
      email: null,
      profile_picture: null,
      password: null,
      address: (data: IApiAddress) => !data.lat || !data.lon,
      opening_hours: (data: IOpeningHours[]) =>
        data.length === 0 ||
        data.some(
          ({ closing_time, opening_time: opening_hours }) =>
            !closing_time || !opening_hours
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
    console.log("form", form);

    postArtisan(form)
      .then(() => {
        alert(`L'artisan ${form.company_name} a été ajouté !`);
        // setForm({});
      })
      .catch((err) => {
        console.log("error", err);
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
          label={t("company_name")}
          placeholder={t("company_name")}
          id="company_name"
          error={errors.includes("company_name")}
          onChange={handleChange}
          value={form.company_name ?? ""}
          required
        />
        <TextInput
          label={t("password")}
          placeholder={t("password")}
          id="password"
          type="password"
          error={errors.includes("password")}
          onChange={handleChange}
          value={form.password ?? ""}
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
          label={t("phone_number")}
          placeholder="ex : 0612345678"
          id="phone_number"
          error={errors.includes("phone_number")}
          onChange={handleChange}
          value={form.phone_number ?? ""}
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
          label={t("opening_hours")}
          placeholder={t("opening_hours")}
          id="opening_hours"
          error={errors.includes("opening_hours")}
          handleChange={(opening_hours) => setForm({ ...form, opening_hours })}
          value={form.opening_hours}
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
