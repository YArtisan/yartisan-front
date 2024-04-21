import { TextInputWithLabel } from "@/form/inputs/components/TextInputWithLabel";
import {
  IApiAddress,
  IArtisanFormData,
  IOpeningHours,
} from "@/types/interfaces";
import { UserType } from "@/user/enums/UserType";
import Button from "@atoms/Button";
import { AddressInput, TextAreaInput, TextInput } from "@atoms/Inputs";
import HorairesInput from "@atoms/Inputs/HorairesInput";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface Props {
  onClick: (input: IArtisanFormData) => Promise<void>;
}

const defaultErrorText = "Veuillez remplir correctement ce champ.";

function CompleteArtisanProfileForm ({ onClick }: Props) {
  const { t } = useTranslation("createArtisan");
  const [errors, setErrors] = useState<string[]>([]);
  const [form, setForm] = useState<Partial<IArtisanFormData>>({});

  const handleChange = (slug: keyof IArtisanFormData, value: string) => {
    setForm({ ...form, [slug]: value });
  };

  const checkErrors = () => {
    const errors: string[] = [];
    const keys: Record<string, ((data: any) => boolean) | null> = {
      company_name: null,
      phone_number: null,
      job_description: null,
      average_price: null,
      number_of_employees: null,
      profile_picture: null,
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

  const handleSubmit = async () => {
    const errors = checkErrors();

    console.log(errors);
    

    if (errors.length > 0) return;

    await onClick({
      ...form,
      userFunction: UserType.artisan,
    } as IArtisanFormData);
  };

  return (
    <div className="relative w-full p-2">
      <div className="flex flex-col gap-4 mx-auto w-full max-w-[700px] pb-6">
        <TextInputWithLabel
          label={t("company_name")}
          textInput={{
            className: "w-full",
            placeholder: t("company_name"),
            id: "company_name",
            error: errors.includes("company_name") ? defaultErrorText : "",
            onChange: (value) => handleChange("company_name", value),
            value: form.company_name ?? "",
            required: true,
          }}
        />
        <TextAreaInput
          label={t("job_description")}
          placeholder={t("job_description")}
          id="job_description"
          error={errors.includes("job_description")}
          onChange={(e) => handleChange("job_description", e.target.value)}
          value={form.job_description ?? ""}
          required
        />
        <TextInput
          type="tel"
          label={t("phone_number")}
          placeholder="ex : 0612345678"
          id="phone_number"
          error={errors.includes("phone_number")}
          onChange={(e) => handleChange("phone_number", e.target.value)}
          value={form.phone_number ?? ""}
          required
        />
        <TextInput
          type="tel"
          label={t("profile_picture")}
          id="profile_picture"
          error={errors.includes("profile_picture")}
          onChange={(e) => handleChange("profile_picture", e.target.value)}
          value={form.profile_picture ?? ""}
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
          onChange={(e) => handleChange("average_price", e.target.value)}
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
          onChange={(e) => handleChange("number_of_employees", e.target.value)}
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
        <div className="flex justify-start">
          {t("authentication:haveAccount")}
          <Link to="/login" className="ml-1 text-blue-600">
            {t("authentication:connect")}
          </Link>
        </div>
        <Button
          onClick={handleSubmit}
          template="secondary"
          className="mt-6 w-full mx-auto"
        >
          {t("authentication:register")}
        </Button>
      </div>
    </div>
  );
}

export default CompleteArtisanProfileForm;
