import { IAddress } from "@/types/interfaces";
import { AdressInput, TextAreaInput, TextInput } from "@atoms/Inputs";
import { useState } from "react";

interface IFormData {
  compagny_name?: string;
  phone?: string;
  // profile_picture? : string;
  job_description?: string;
  average_price?: number;
  address?: IAddress;
  // number_of_employees ?: number;
}

function CreateArtisan() {
  const [form, setForm] = useState<IFormData>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  return (
    <div className="bg-white w-full max-w-[1000px] mx-auto rounded-xl shadow-2xl">
      <h1 className="text-center">Information de l'entreprise</h1>
      <div className="flex flex-col gap-2 mx-auto w-full max-w-[700px] pb-6">
        <TextInput
          label="Nom de l'entreprise"
          placeholder="Nom de l'entreprise"
          id="compagny_name"
          onChange={handleChange}
          value={form.compagny_name}
        />
        <TextAreaInput
          label="Description"
          placeholder="Description"
          id="job_description"
          onChange={handleChange}
          value={form.job_description}
        />
        <AdressInput
          label="Adresse"
          placeholder="Adresse"
          id="address"
          handleChange={(address) => setForm({ ...form, address })}
          value={form.address}
        />
      </div>
    </div>
  );
}

export default CreateArtisan;
