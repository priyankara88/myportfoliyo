import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import AboutMe from "../pages/AboutMe";
import Projects from "../pages/Projects";

const MainRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={MainLayout}>
            <Route index Component={Home} />
            <Route path="/Contact-Us" Component={Contact} />
            <Route path="/About" Component={AboutMe} />
            <Route path="/Projects" Component={Projects} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainRouter;
