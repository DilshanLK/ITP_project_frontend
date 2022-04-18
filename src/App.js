import {Route} from 'react-router-dom'
import {Fragment} from "react";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/mainHeader";
import Login from "./pages/Login/Login";
import CustomerHomePage from './pages/Home/Customer/CustomerHomePage';
import CustomerMyProfile from './pages/MyProfile/CustomerMyProfile';
import RegisterPage from './pages/Register/RegisterPage';
import {
  Switch,
  useLocation,
  BrowserRouter as Router,
  withRouter,
} from "react-router-dom";
import { authRoutes, userRoutes } from "./routes/allRoutes";
import Authmiddleware from "./routes/middleware/Authmiddleware";
import NonAuthLayout from "./layouts/NonAuthLayout";
import AuthLayout from "./layouts/AuthLayout";


function App() {
  return (
    <Fragment>
      <Switch>
        {authRoutes.map((route, idx) => (
          <Authmiddleware
            path={route.path}
            layout={NonAuthLayout}
            component={route.component}
            key={idx}
            isAuthProtected={false}
            type={"ALL"}
          />
        ))}

        {userRoutes.map((route, idx) => (
          <Authmiddleware
            path={route.path}
            layout={AuthLayout}
            component={route.component}
            key={idx}
            isAuthProtected={false}
            type={"USER"}
            exact
          />
        ))}
      </Switch>
    </Fragment>
  );
}

export default App;
