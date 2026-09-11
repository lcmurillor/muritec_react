import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { migrateLegacyHash, retireFlutterWorker } from "./migration";

migrateLegacyHash();
void retireFlutterWorker();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// React renders after the browser's initial anchor lookup.
if (window.location.hash) {
  requestAnimationFrame(() =>
    requestAnimationFrame(() => {
      document
        .getElementById(window.location.hash.slice(1))
        ?.scrollIntoView({ behavior: "instant" });
    }),
  );
}
