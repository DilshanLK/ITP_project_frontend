import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get } from "../../helpers/api_helper";
import { updateUserInfo } from "../../redux/actions/userActions";

const Authmiddleware = ({
                          component: Component,
                          layout: Layout,
                          isAuthProtected,
                          type,
                          ...rest
                        }) => {
  //   const user = useSelector((state) => state.Auth.user);
  const user = {};

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    let token = localStorage.getItem("TOKEN");

    console.log("token", token);
    console.log("isAuthProtected", isAuthProtected);
    console.log("isPeotectedededededededededededede");
    if (isAuthProtected && !token) {
      window.location.replace("/login");

      return;
    }

    if (isAuthProtected) {
      validateAccessForRoute();
    }
  }, [user]);

  useEffect(() => {
    updateUserDetails();
  }, [location]);

  const updateUserDetails = async () => {
    try {
      let res = await get("user/me");

      dispatch(updateUserInfo(res.data));
    } catch (err) {
      localStorage.removeItem("TOKEN");
    }
  };

  const validateAccessForRoute = async () => {
    if (type === "USER" && user.type !== "USER") {
      return resetUserByType();
    }

    if (type === "ADMIN" && user.type !== "ADMIN") {
      return resetUserByType();
    }
  };

  const resetUserByType = () => {
    if (user.type === "USER") {
      return window.location.replace("/login");
    }

    if (user.type === "ADMIN") {
      return window.location.replace("/admin/login");
    }

    if (user.type === "CUSTOMER") {
      return window.location.replace("/products");
    }
  };

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthProtected && !localStorage.getItem("TOKEN")) {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }

        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
};

Authmiddleware.propTypes = {
  isAuthProtected: PropTypes.bool,
  component: PropTypes.any,
  location: PropTypes.object,
  layout: PropTypes.any,
};

export default Authmiddleware;
