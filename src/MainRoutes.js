import { Routes, Route } from "react-router-dom";

import MainPg from "./MainPg";
import Signin from "./Signin";
import Visitorpage from "./Visitorpage";
import BusinessAnalyst from "./BusinessAnalyst";
import Maintenance from "./Maintenance";

function MainRoutes() {
  return (
        <Routes>
          <Route path="/" Component={MainPg} />
          <Route path="/Signin" Component={Signin} />
          <Route path="/Visitorpage" Component={Visitorpage} />
          <Route path="/BusinessAnalyst" Component={BusinessAnalyst} />
          <Route path="/Maintenance" Component={Maintenance} />
        </Routes>
  );
}

export default MainRoutes;