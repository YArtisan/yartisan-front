import React, { useState } from "react";
import { EmailInput } from "@/user/components/form/EmailInput";
import { PasswordInput } from "@/user/components/form/PasswordInput";
import { PhoneInput } from "@/user/components/form/PhoneInput";
import Button from "@atoms/Button";
import { FirstnameInput } from "@/user/components/form/FirstNameInput";
import { LastnameInput } from "@/user/components/form/LastNameInput";
import { RegisterFormInput } from "../types/RegisterFormInput.type";
import { useTranslation } from "react-i18next";
import { UserType } from "@/user/enums/UserType";

interface Props {
  className: string;
  onClick: (input: RegisterFormInput) => Promise<void>;
}

function UserForm({ className, onClick }: Props) {
  const { t } = useTranslation();
  const [email, setEmail] = useState<string>("");
  const [firstname, setfirstname] = useState<string>("");
  const [lastname, setlastname] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <>
      <EmailInput
        {...{ value: email, onChange: setEmail }}
        container={{ className: "mb-5" }}
      />
      <FirstnameInput
        {...{ value: firstname, onChange: setfirstname }}
        container={{ className: "mb-5" }}
      />
      <LastnameInput
        {...{ value: lastname, onChange: setlastname }}
        container={{ className: "mb-5" }}
      />
      <PhoneInput
        {...{ value: phone, onChange: setPhone }}
        container={{ className: "mb-5" }}
      />
      <PasswordInput
        {...{ value: password, onChange: setPassword }}
        container={{ className: "mb-5" }}
      />
      <div className="flex justify-start">
        {t("authentication:haveAccount")}
        <a href="/login" className="ml-1 text-blue-600">
          {t("authentication:connect")}
        </a>
      </div>
      <Button
        {...{
          onClick: async () =>
            await onClick({
              email,
              firstname,
              lastname,
              phone_number: phone,
              password,
              userFunction: UserType.client,
            }),
        }}
        className="mt-6 w-full"
        template="secondary"
      >
        {t("authentication:register")}
      </Button>
    </>
  );
}

export default UserForm;
