import { ForgotPasswordLink } from "@/authentication/password/forgot-password/components/ForgotPasswordLink";
import { SsoRegisterForm } from "@/authentication/register/components/SsoRegisterForm";
import { AuthenticationFormCard } from "@/authentication/shared/components/AuthenticationFormCard";
import { Title } from "@/text/components/Title";
import { EmailInput } from "@/user/components/form/EmailInput";
import { PasswordInput } from "@/user/components/form/PasswordInput";
import Button from "@atoms/Button";
import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
  onClick: (email: string, password: string) => Promise<void>;
}

export const RegisterForm = ({ className, onClick }: Props): ReactElement => {
  const { t } = useTranslation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleErrorMessage = (error: any) => {
    const code = { ...error };
    console.log("code", code);

    switch (code) {
      case "auth/email-already-in-use":
        return "Cet e-mail est déjà utilisé.";
      case "auth/invalid-email":
        return "Cet e-mail est invalide.";
      case "auth/weak-password":
        return "Le mot de passe doit contenir au moins 6 caractères.";

      default:
        return error.message ?? "Une erreur est survenue.";
    }
  };

  const handleRegister = async () => {
    onClick(email, password).catch((error) => {
      console.log("here", error);

      setErrorMessage(handleErrorMessage(error));
    });
  };

  return (
    <AuthenticationFormCard {...{ className, cardClassName: "w-2/3" }}>
      <Title>{t("authentication:registering")}</Title>
      <EmailInput
        {...{ onChange: setEmail, value: email }}
        container={{ className: "mt-16" }}
      />
      <PasswordInput
        {...{ onChange: setPassword, value: password }}
        container={{ className: "mt-8 mb-3" }}
      />
      {errorMessage && <p className="text-red-500 mb-3">{errorMessage}</p>}
      <Button
        className="my-5 w-full"
        template="secondary"
        {...{ onClick: handleRegister }}
      >
        {t("authentication:register")}
      </Button>
      <SsoRegisterForm />
      <div className="flex justify-between items-center mt-10 flex-col md:flex-row">
        <div className="flex justify-center items-between flex-row sm:flex-col">
          {t("authentication:haveAccount")}
          <Link to="/login" className="ml-1 md:ml-0 text-blue-600">
            {t("authentication:connect")}
          </Link>
        </div>
        <ForgotPasswordLink />
      </div>
    </AuthenticationFormCard>
  );
};
