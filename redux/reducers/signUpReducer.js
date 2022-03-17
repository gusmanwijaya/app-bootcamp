import { SET_FORM_SIGN_UP } from "../types";

const initialState = {
  data: {},
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM_SIGN_UP:
      return {
        ...state,
        data: {
          ...state.data,
          [action.formType]: action.formValue,
        },
      };
    default:
      return state;
  }
};

export default signUpReducer;
