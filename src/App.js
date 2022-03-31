import {Route} from 'react-router-dom'
import {Fragment} from "react";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/mainHeader";
import Login from "./pages/Login/Login";
import CustomerHomePage from './pages/Home/Customer/CustomerHomePage';
import CustomerMyProfile from './pages/MyProfile/CustomerMyProfile';
import RegisterPage from './pages/Register/RegisterPage';

function App() {
  return (
    <Fragment>
        <MainHeader/>
        <Route path="/products">
            <Products/>
        </Route>
      <Route path="/login">
            <Login/>
      </Route>
      <Route path="/register">
            <RegisterPage/>
      </Route>
      <Route path="/home-customer">
            <CustomerHomePage/>
      </Route>
      <Route path="/my-profile">
            <CustomerMyProfile/>
      </Route>
    </Fragment>
  );
}

export default App;
