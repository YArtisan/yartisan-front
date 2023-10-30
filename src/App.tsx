import { BrowserRouter, Routes, Route, RouteProps } from "react-router-dom";
import Home from "./pages/Home/Home";
import DefaultLayout from "./components/layouts/DefaultLayout/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
