import React, { useState } from "react";
import { PhoneInput } from "@/user/components/form/PhoneInput";
import Button from "@atoms/Button";
import { FirstnameInput } from "@/user/components/form/FirstNameInput";
import { LastnameInput } from "@/user/components/form/LastNameInput";
import { useTranslation } from "react-i18next";
import { UserType } from "@/user/enums/UserType";
import { Link } from "react-router-dom";

interface Props {
  onClick: (input: any) => Promise<void>;
}

function CompleteUserProfileForm ({ onClick }: Props) {
  const { t } = useTranslation();
  const [firstname, setfirstname] = useState<string>("");
  const [lastname, setlastname] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  return (
    <>
      <div className="flex">
        <FirstnameInput
          {...{ value: firstname, onChange: setfirstname }}
          container={{ className: "mb-5 w-1/2 mr-1" }}
        />
        <LastnameInput
          {...{ value: lastname, onChange: setlastname }}
          container={{ className: "mb-5 w-1/2 ml-1" }}
        />
      </div>
      <PhoneInput
        {...{ value: phone, onChange: setPhone }}
        container={{ className: "mb-5" }}
      />
      <div className="flex justify-start">
        {t("authentication:haveAccount")}
        <Link to="/login" className="ml-1 text-blue-600">
          {t("authentication:connect")}
        </Link>
      </div>
      <Button
        {...{
          onClick: async () =>
            await onClick({
              firstname,
              lastname,
              phone_number: phone,
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

export default CompleteUserProfileForm;
