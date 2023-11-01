import { GET_DYNAMIC_NAME } from "../constants";

export const headerDynamicTitle = (val) => {
  return {
    type: GET_DYNAMIC_NAME,
    payload: val,
  };
};
