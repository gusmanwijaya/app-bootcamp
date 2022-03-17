import { GET_DETAIL_PAGE } from "../types";
import { getDetailPage } from "../../services/detailPage";

export const setDetailPage = (id) => async (dispatch) => {
  const response = await getDetailPage(id);
  if (response?.data?.status === 200)
    return dispatch({
      type: GET_DETAIL_PAGE,
      payload: response?.data?.data,
    });
};
