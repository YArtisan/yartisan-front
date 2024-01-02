import { BrowserRouter } from "react-router-dom";
import Providers from "@atoms/Providers";
import { AppRoutes } from "./navigation/components/Routes";

function App () {
  return (
    <BrowserRouter>
      <Providers>
        <AppRoutes />
      </Providers>
    </BrowserRouter>
  );
}

export default App;
