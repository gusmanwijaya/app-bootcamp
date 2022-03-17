import { combineReducers } from "redux";
import landingPageReducer from "./landingPageReducer";
import detailPageReducer from "./detailPageReducer";
import signUpReducer from "./signUpReducer";
import sessionReducer from "./sessionReducer";

const reducers = combineReducers({
  landingPageReducer,
  detailPageReducer,
  signUpReducer,
  sessionReducer,
});

export default reducers;
