import { CODE } from "../constants";

const initState = {
  codes: [],
  loading: false,
  error: "",
};

export const codeReducer = (state = initState, action) => {
  switch (action.type) {
    case CODE.LOADING:
      return {
        loading: true,
        codes: [],
      };

    case CODE.SUCCESS:
      return {
        loading: false,
        codes: action.payload,
      };

    case CODE.FAILED:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
