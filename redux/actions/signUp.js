import { SET_FORM_SIGN_UP } from "../types";

export const setDataSignUp = (formType, formValue) => {
  return {
    type: SET_FORM_SIGN_UP,
    formType,
    formValue,
  };
};
