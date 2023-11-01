import { GET_DYNAMIC_NAME } from "../constants";

const initState = {};
const headerReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_DYNAMIC_NAME:
      return {
        ...state,
        title: state.title,
      };
    default:
      return state;
  }
};
export default headerReducer;
