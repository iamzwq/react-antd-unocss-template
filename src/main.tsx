import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "virtual:uno.css";
import "~/styles/reset.css";
import "~/styles/keyframes.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
