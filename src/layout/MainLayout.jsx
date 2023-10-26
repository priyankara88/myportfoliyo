import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import { AnimatePresence, motion } from "framer-motion";
import Transition from "./Transition";

const MainLayout = () => {
  const router = useLocation();
  console.log("router", router);
  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.pathname} className="h-full">
        <Transition />
        <Outlet />
        <Header />
      </motion.div>
    </AnimatePresence>
  );
};

export default MainLayout;
