import { ReactElement } from "react";
import { RegisterForm } from "../components/RegisterForm";
import { useRegister } from "../hooks/useRegister";
import { useNavigate } from "react-router-dom";
import { UserType } from "@/user/enums/UserType";
import { postArtisan } from "@/fetch/artisanActions";

export const Register = (): ReactElement => {
  const { register } = useRegister();
  const navigate = useNavigate();

  return (
    <RegisterForm
      onClick={async (data) => {
        try {
          const registerFunction =
            data.userFunction === UserType.artisan ? postArtisan : register;
          await registerFunction(data as any).then(() =>
            navigate("/register-redirection")
          );
        } catch (error : any) {
          alert(error?.message ?? "Une erreur est survenue.");
        }
      }}
      className="w-1/2"
    />
  );
};
