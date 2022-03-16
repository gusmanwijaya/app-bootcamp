import { GET_LANDING_PAGE } from "../types";
import { getLandingPage } from "../../services/landingPage";

export const setLandingPage = () => async (dispatch) => {
  const response = await getLandingPage();
  if (response?.data?.status === 200)
    return dispatch({
      type: GET_LANDING_PAGE,
      payload: response?.data?.data,
    });
};
