import { GET_LANDING_PAGE } from "../types";

const initialState = {
  event: [],
};

const landingPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LANDING_PAGE:
      return {
        ...state,
        event: action.payload,
      };
    default:
      return state;
  }
};

export default landingPageReducer;
