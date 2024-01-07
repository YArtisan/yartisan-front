import { BrowserRouter } from "react-router-dom";
import Providers from "@atoms/Providers";
import { AppRoutes } from "./navigation/components/Routes";
import { ApiProvider } from "./api/components/ApiProvider";

function App () {
  return (
    <BrowserRouter>
      <Providers>
        <ApiProvider>
          <AppRoutes />
        </ApiProvider>
      </Providers>
    </BrowserRouter>
  );
}

export default App;
