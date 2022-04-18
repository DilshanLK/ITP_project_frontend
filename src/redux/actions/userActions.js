import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_FAIL,
  UPDATE_USER_DATA,
} from "../constants/userConstants";
import { post } from "../../helpers/api_helper";
import history from "../../routes/history";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

export const register = (name, email, password, phone, address, birthday) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const { data } = await post("user/signup", {
      name,
      email,
      password,
      phone,
      address,
      birthday
    });

    console.log("data", data);

    toastr.success("Registration successfully.", "Success!");

    // dispatch({
    //   type: USER_REGISTER_SUCCESS,
    //   payload: data,
    // });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
    localStorage.setItem("TOKEN", data.token);

    return history.push("/login");

  } catch (e) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};

export const login = (email, password, fromRoute) => async (dispatch) => {
  try {
    const { data } = await post("user/login", {
      email,
      password,
    });

    console.log("data", data);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("TOKEN", data.token);

    toastr.success("Welcome back!", "Hey!");

    if (data.user.isAdmin === false) {
      return history.push("/home-customer");
    }

    return history.push("/");
  } catch (e) {
    toastr.error("Invalid credentials. Please try again!");
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};

// export const loginToCheckout = (email, password, cartId) => async (dispatch) => {
//   console.log('actionHit')
//   console.log('actionHitVal', cartId)
//   try {
//     const { data } = await post("user/login", {
//       email,
//       password,
//     });
//
//     console.log("data", data);
//
//     if (data.user.type === "CUSTOMER") {
//       if (!data.user.emailVerified) {
//         return history.push("/verify");
//       }
//     }
//
//     toastr.success("Welcome back!", "Hey!");
//
//     //post to cart
//     //set cart id for route
//
//     dispatch({
//       type: USER_LOGIN_SUCCESS,
//       payload: data,
//     });
//
//     localStorage.setItem("TOKEN", data.token);
//
//     return history.push(`/checkout/${cartId}`);
//   } catch (e) {
//     toastr.error("Login error!");
//     dispatch({
//       type: USER_LOGIN_FAIL,
//       payload:
//         e.response && e.response.data.message
//           ? e.response.data.message
//           : e.message,
//     });
//   }
// };

export const updateUserInfo = (data) => async (dispatch) => {
  dispatch({
    type: UPDATE_USER_DATA,
    payload: data,
  });
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("TOKEN");
  localStorage.removeItem("userInfo");
  history.push("/login");

  dispatch({
    type: UPDATE_USER_DATA,
    payload: { user: {} },
  });
};
