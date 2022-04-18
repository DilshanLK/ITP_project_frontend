import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import UserReducer from "./redux/reducers/userReducers";

const reducer = combineReducers({
  user: UserReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
