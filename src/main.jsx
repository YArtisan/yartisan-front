import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";

import "../src/translations/i18n";

//@ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
