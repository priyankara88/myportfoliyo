import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainLayout = () => {
  return (
    <div className="w-screen h-screen">
      <Outlet />
      <Header />
    </div>
  );
};

export default MainLayout;
