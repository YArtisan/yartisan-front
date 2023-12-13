import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import DefaultLayout from "./components/layouts/DefaultLayout/DefaultLayout";
import Providers from "@atoms/Providers";

function App() {
  return (
    <BrowserRouter>
        <Providers>
      <Routes>
          <Route
            path="/"
            element={
              <DefaultLayout>
                <Home />
              </DefaultLayout>
            }
          />
      </Routes>
        </Providers>
    </BrowserRouter>
  );
}

export default App;
