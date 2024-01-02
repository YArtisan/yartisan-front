import { Login } from "@/authentication/login/pages/Login";
import { Register } from "@/authentication/register/pages/Register";
import { AuthenticationLayout } from "@/authentication/shared/components/AuthenticationLayout";
import { WelcomingLayout } from "@/welcoming/components/WelcomingLayout";
import DefaultLayout from "@components/layouts/DefaultLayout/DefaultLayout";
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
  </Routes>
 )
}