import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { OverviewPage } from "./components/organisms/overviewPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <OverviewPage />
  </StrictMode>,
);
