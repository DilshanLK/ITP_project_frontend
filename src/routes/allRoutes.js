import React from "react";
import { Redirect } from "react-router-dom";

//Admin
// import AdminPayments from "../pages/Admin/Payments/Payments";

//Vendor
// import ProductDetailedView from "../pages/Vendor/Products/ProductDetailedView";

// Authentication related pages
import Register from "../pages/Register/RegisterPage";
import Login from "../pages/Login/Login";
import CustomerHome from "../pages/Home/Customer/CustomerHomePage"
import CustomerProfile from "../pages/MyProfile/CustomerMyProfile"
import LandingPage from "../pages/LandingPage"


// const adminRoutes = [
//   { path: "/admin/update-product/:productId", component: AdminUpdateProduct },
// ];

const userRoutes = [
  { path: "/home-customer", component: CustomerHome },
  { path: "/customer-my-profile", component: CustomerProfile },
  // { path: "/home", exact: true, component: () => <Redirect to="/dashboard" /> },
];

const authRoutes = [
  // { path: "/", component: LandingPage },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
];

export { userRoutes, authRoutes };
