import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/Sidebar/organisms/sidebar";

export function Layout() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
