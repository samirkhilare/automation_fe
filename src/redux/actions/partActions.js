import { PART } from "../constants";
import {
  getAllParts,
  addPart,
  updatePart,
} from "../../services/partsAPIServices";

export const reqGetAllParts = () => async (dispatch) => {
  dispatch({ type: PART.LOADING });
  try {
    const { message, data } = await getAllParts();
    if (message?.success) dispatch({ type: PART.SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: PART.FAILED, payload: e });
  }
};

export const reqToAddPart = (obj, cb) => async (dispatch) => {
  dispatch({ type: PART.LOADING });
  try {
    const response = await addPart(obj);
    if (response?.message?.success) {
      const { message, data } = await getAllParts();
      if (message?.success) dispatch({ type: PART.SUCCESS, payload: data });
    }
    cb(response?.message?.success, response?.message?.message);
  } catch (e) {
    dispatch({ type: PART.FAILED, payload: e });
  }
};

export const reqUpdateParts = (obj, id, cb) => async (dispatch) => {
  dispatch({ type: PART.LOADING });
  try {
    const response = await updatePart(obj, id);
    if (response?.message?.success) {
      const { message, data } = await getAllParts();
      if (message?.success) dispatch({ type: PART.SUCCESS, payload: data });
    }
  } catch (e) {
    dispatch({ type: PART.FAILED, payload: e });
  }
};
