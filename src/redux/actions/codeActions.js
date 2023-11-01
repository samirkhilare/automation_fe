import { CODE } from "../constants";
import {
  getAllCodes,
  AddCode,
  updateCode,
  deleteCode,
} from "../../services/codesAPIServices";

export const reqGetAllCodes = () => async (dispatch) => {
  dispatch({ type: CODE.LOADING });
  try {
    const { message, data } = await getAllCodes();
    if (message?.success) dispatch({ type: CODE.SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: CODE.FAILED, payload: e });
  }
};

export const reqToAddCode = (formData, cb) => async (dispatch) => {
  dispatch({ type: CODE.LOADING });
  try {
    const { message } = await AddCode(formData);
    const { data } = await getAllCodes();
    if (message?.success) dispatch({ type: CODE.SUCCESS, payload: data });
    cb(message?.success, message?.message);
  } catch (e) {
    dispatch({ type: CODE.FAILED, payload: e });
  }
};

export const reqToUpdateCode = (formData, cb) => async (dispatch) => {
  dispatch({ type: CODE.LOADING });
  try {
    const { message } = await updateCode(formData);
    const { data } = await getAllCodes();
    if (message?.success) dispatch({ type: CODE.SUCCESS, payload: data });
    cb(message?.success, message?.message);
  } catch (e) {
    dispatch({ type: CODE.FAILED, payload: e });
  }
};

export const reqToDeleteCode = (formData, cb) => async (dispatch) => {
  dispatch({ type: CODE.LOADING });
  try {
    const { message } = await deleteCode(formData);
    const { data } = await getAllCodes();
    if (message?.success) dispatch({ type: CODE.SUCCESS, payload: data });
    cb(message?.success, message?.message);
  } catch (e) {
    dispatch({ type: CODE.FAILED, payload: e });
  }
};
