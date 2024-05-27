import Button from "@atoms/Button";
import { t } from "i18next";
import { useState } from "react";
import axios from "@/api/service/axios";
import { IConversation } from "@/types/interfaces";
import { TextInput } from "@/form/inputs/components/TextInput";
import { useTranslation } from "react-i18next";

interface StripeCheckoutDto {
  name: string;
  description: string;
  price: string;
}

function OfferForm({
  conversation,
  submit,
}: {
  conversation: IConversation;
  submit: (data: StripeCheckoutDto) => void;
}) {
  const { t } = useTranslation("conversation");
  const [propositionErrors, setPropositionErrors] = useState<string[]>([]);
  const [propositionData, setPropositionData] = useState<
    Partial<StripeCheckoutDto>
  >({});

  const handleSubmitProposition = () => {
    const { name, description, price } = propositionData;
    const errors = [];
    if (!name) errors.push("productName");
    if (!description) errors.push("productDescription");
    if (!price) errors.push("productPrice");
    if (errors.length > 0) return setPropositionErrors(errors);
    setPropositionErrors([]);

    axios
      .post("/create-checkout-session", {
        ...propositionData,
        price: Math.floor(parseFloat(price!) * 100),
        user_id: conversation.user._id,
        artisan_id: conversation.artisan._id,
      })
      .then(() => {
        submit(propositionData as StripeCheckoutDto);
        setPropositionData({});
      });
  };

  return (
    <div className="flex-1 flex flex-col overflow-auto px-4 gap-2 w-full">
      <p className="text-lg font-bold">{t("offer.title")}</p>
      <TextInput
        type="text"
        placeholder={t("offer.name")}
        className={`${
          propositionErrors.includes("productName")
            ? "border-red-500 placeholder:text-red-500"
            : ""
        } `}
        value={propositionData.name}
        onChange={(e) => {
          if (propositionErrors.includes("productName"))
            setPropositionErrors(
              propositionErrors.filter((e) => e !== "productName")
            );
          setPropositionData({ ...propositionData, name: e });
        }}
      />
      <TextInput
        type="text"
        placeholder={t("offer.description")}
        className={`${
          propositionErrors.includes("productDescription")
            ? "border-red-500 placeholder:text-red-500"
            : ""
        } `}
        value={propositionData.description}
        onChange={(e) => {
          if (propositionErrors.includes("productDescription"))
            setPropositionErrors(
              propositionErrors.filter((e) => e !== "productDescription")
            );
          setPropositionData({ ...propositionData, description: e });
        }}
      />
      <TextInput
        type="number"
        placeholder={t("offer.price")}
        className={`${
          propositionErrors.includes("productPrice")
            ? "border-red-500 placeholder:text-red-500"
            : ""
        } `}
        value={propositionData.price}
        onChange={(e) => {
          if (propositionErrors.includes("productPrice"))
            setPropositionErrors(
              propositionErrors.filter((e) => e !== "productPrice")
            );
          setPropositionData({
            ...propositionData,
            price: e,
          });
        }}
      />{" "}
      <Button
        template="secondary"
        onClick={handleSubmitProposition}
        className="w-fit mx-auto"
      >
        {t("offer.submit")}
      </Button>
    </div>
  );
}

export default OfferForm;
