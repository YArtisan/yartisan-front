import { AuthenticationFormCard } from "@/authentication/shared/components/AuthenticationFormCard";
import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { RadioSwitchFunctionGroupInputWithLabel } from "./RadioSwitchFunctionGroupInputWithLabel";
import { RegisterFormInput } from "../types/RegisterFormInput.type";
import { Title } from "@/text/components/Title";
import { UserType } from "@/user/enums/UserType";
import UserForm from "./UserForm";
import ArtisanForm from "./ArtisanForm";
import { IArtisanFormData } from "@/types/interfaces";

interface Props {
  className: string;
  onClick: (input: RegisterFormInput | IArtisanFormData) => Promise<void>;
}

export const RegisterForm = ({ className, onClick }: Props): ReactElement => {
  const { t } = useTranslation();
  const [userFunction, setUserFunction] = useState<string>(UserType.client);

  return (
    <AuthenticationFormCard {...{ className, cardClassName: "w-2/3" }}>
      <Title>{t("authentication:registering")}</Title>
      <RadioSwitchFunctionGroupInputWithLabel
        container={{ className: "mt-8" }}
        className="mb-5"
        selectedValue={userFunction}
        setSelectedValue={setUserFunction}
      />
      <div className="overflow-y-auto max-h-[900px]">
        {userFunction === UserType.client && (
          <UserForm className={className} onClick={onClick} />
        )}
        {userFunction === UserType.artisan && <ArtisanForm onClick={onClick} />}
      </div>
    </AuthenticationFormCard>
  );
};
