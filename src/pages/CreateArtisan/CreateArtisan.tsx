import { IFormAddress } from "@/types/interfaces";
import { AddressInput, TextAreaInput, TextInput } from "@atoms/Inputs";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface IFormData {
  compagny_name?: string;
  phone?: string;
  // profile_picture? : string;
  job_description?: string;
  average_price?: number;
  address?: IFormAddress;
  // number_of_employees ?: number;
}

function CreateArtisan() {
  const { t } = useTranslation("createArtisan");

  const [form, setForm] = useState<IFormData>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  return (
    <div className="bg-white w-full max-w-[1000px] mx-auto rounded-xl shadow-2xl">
      <h1 className="text-center">{t("title")}</h1>
      <div className="flex flex-col gap-2 mx-auto w-full max-w-[700px] pb-6">
        <TextInput
          label={t("compagny_name")}
          placeholder={t("compagny_name")}
          id="compagny_name"
          onChange={handleChange}
          value={form.compagny_name}
        />
        <TextAreaInput
          label={t("job_description")}
          placeholder={t("job_description")}
          id="job_description"
          onChange={handleChange}
          value={form.job_description}
        />
        <AddressInput
          label={t("address")}
          placeholder={t("address")}
          id="address"
          handleChange={(address) => setForm({ ...form, address })}
          value={form.address}
        />
      </div>
    </div>
  );
}

export default CreateArtisan;
