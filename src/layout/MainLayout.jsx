import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import { AnimatePresence, motion } from "framer-motion";
import Transition from "./Transition";

const MainLayout = () => {
  const router = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div className="h-full w-full">
        <Transition key={router.pathname} />
        <Outlet />
        <Header />
      </motion.div>
    </AnimatePresence>
  );
};

export default MainLayout;
