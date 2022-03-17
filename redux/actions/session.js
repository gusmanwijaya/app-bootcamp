import { GET_SESSION } from "../types";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

export const setSession = () => (dispatch) => {
  const tkn = Cookies.get("tkn");
  if (tkn) {
    const token = jwt.decode(Buffer.from(tkn, "base64").toString("utf-8"));
    return dispatch({
      type: GET_SESSION,
      payload: token,
    });
  }
};
