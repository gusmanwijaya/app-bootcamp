import { GET_SESSION } from "../types";

const initialState = {
  session: {},
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SESSION:
      return {
        ...state,
        session: {
          ...state.session,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default sessionReducer;
