import { CompleteProfile } from "@/authentication/completeProfile/pages/CompleteProfile";
import { Login } from "@/authentication/login/pages/Login";
import { ForgotPassword } from "@/authentication/password/forgot-password/pages/ForgotPassword";
import { VerificationCode } from "@/authentication/password/forgot-password/pages/VerificationCode";
import { ResetPassword } from "@/authentication/password/reset-password/pages/ResetPassword";
import { Register } from "@/authentication/register/pages/Register";
import { RegisterRedirection } from "@/authentication/register/pages/RegisterRediction";
import { AuthenticationLayout } from "@/authentication/shared/components/AuthenticationLayout";
import { WelcomingLayout } from "@/welcoming/components/WelcomingLayout";
import DefaultLayout from "@components/layouts/DefaultLayout/DefaultLayout";
import Chat from "@pages/Chat/Chat";
import Dashboard from "@pages/Dashboard/Dashboard";
import Home from "@pages/Home/Home";
import { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";

export const AppRoutes = (): ReactElement => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        }
      />
      <Route
        path="/chat"
        element={
          <DefaultLayout bgBlue>
            <Chat />
          </DefaultLayout>
        }
      />
      <Route
        path="/login"
        element={
          <AuthenticationLayout>
            <WelcomingLayout>
              <Login />
            </WelcomingLayout>
          </AuthenticationLayout>
        }
      />
      <Route
        path="/register"
        element={
          <AuthenticationLayout>
            <WelcomingLayout>
              <Register />
            </WelcomingLayout>
          </AuthenticationLayout>
        }
      />
      <Route
        path="/register-redirection"
        element={
          <AuthenticationLayout>
            <RegisterRedirection />
          </AuthenticationLayout>
        }
      />
      <Route
        path="/complete-profile"
        element={
          <AuthenticationLayout>
            <WelcomingLayout>
              <CompleteProfile />
            </WelcomingLayout>
          </AuthenticationLayout>
        }
      />
      <Route
        path="/forgot-password"
        element={
          <AuthenticationLayout>
            <ForgotPassword />
          </AuthenticationLayout>
        }
      />
      <Route
        path="/forgot-password/code-verification"
        element={
          <AuthenticationLayout>
            <VerificationCode />
          </AuthenticationLayout>
        }
      />
      <Route
        path="/reset-password"
        element={
          <AuthenticationLayout>
            <ResetPassword />
          </AuthenticationLayout>
        }
      />
      <Route
        path="/register-redirection"
        element={
          <AuthenticationLayout>
            <RegisterRedirection />
          </AuthenticationLayout>
        }
      />
      <Route
        path="/dashboard"
        element={
          <AuthenticationLayout>
            <Dashboard />
          </AuthenticationLayout>
        }
      />
    </Routes>
  );
};
