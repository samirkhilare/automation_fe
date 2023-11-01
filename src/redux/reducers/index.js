import { combineReducers } from "redux";
import headerReducer from "./headerReducer";
import { partsReducer } from "./partReducers";
import { codeReducer } from "./codeReducer";
import { modalsReducer } from "./modalReducers";

const rootReducer = combineReducers({
  headerReducer,
  partsReducer,
  codeReducer,
  modalsReducer,
});

export default rootReducer;
