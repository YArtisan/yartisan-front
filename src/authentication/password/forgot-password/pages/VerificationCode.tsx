import { ReactElement } from "react";
import { VerificationCodeForm } from "../components/VerificationCodeForm";
import { useLocation } from "react-router-dom";

export const VerificationCode = (): ReactElement => {
 const location = useLocation();
 const params = location.state ?? {};
 const { email } = params

 return (
  <VerificationCodeForm {...{ email }} />
 )
}