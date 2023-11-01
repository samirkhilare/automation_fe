import { PART } from "../constants";

const initState = {
  parts: [],
  loading: false,
  error: "",
};

export const partsReducer = (state = initState, action) => {
  switch (action.type) {
    case PART.LOADING:
      return {
        loading: true,
        parts: [],
      };

    case PART.SUCCESS:
      return {
        loading: false,
        parts: action.payload,
      };

    case PART.FAILED:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
