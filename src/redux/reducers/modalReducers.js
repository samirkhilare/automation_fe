import { MODAL } from "../constants";

const initState = {
  modals: [],
  loading: false,
  error: "",
};

export const modalsReducer = (state = initState, action) => {
  switch (action.type) {
    case MODAL.LOADING:
      return {
        loading: true,
        modals: [],
      };

    case MODAL.SUCCESS:
      return {
        loading: false,
        modals: action.payload,
      };

    case MODAL.FAILED:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
