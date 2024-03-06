import "flag-icons/css/flag-icons.min.css";
import { BrowserRouter } from "react-router-dom";
import Providers from "@atoms/Providers";
import { AppRoutes } from "./navigation/components/Routes";
import { ApiProvider } from "./api/components/ApiProvider";
import { UserProvider } from "./user/components/UserProvider";
import { AuthProvider } from "./authentication/login/components/AuthProvider";

function App () {
  return (
    <BrowserRouter>
      <Providers>
        <ApiProvider>
          <UserProvider>
            <AuthProvider>
              <AppRoutes />
            </AuthProvider>
          </UserProvider>
        </ApiProvider>
      </Providers>
    </BrowserRouter>
  );
}

export default App;
