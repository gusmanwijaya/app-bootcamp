import { GET_DETAIL_PAGE } from "../types";

const initialState = {
  detailEvent: {},
};

const detailPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL_PAGE:
      return {
        ...state,
        detailEvent: action.payload,
      };
    default:
      return state;
  }
};

export default detailPageReducer;
