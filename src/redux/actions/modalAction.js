import { MODAL } from "../constants";
import {
  addVideoFile,
  addModal,
  getAllModals,
  updateModal,
} from "../../services/modalServices";

export const reqToAddModal = (obj, fd, cb) => async (dispatch) => {
  dispatch({ type: MODAL.LOADING });
  try {
    const response = await addVideoFile(fd);
    if (response?.success) {
      const { message, data } = await addModal({
        ...obj,
        video: response.filename,
      });
      if (message?.success) {
        const { message, data } = await getAllModals();
        if (message?.success) dispatch({ type: MODAL.SUCCESS, payload: data });
      }
    }
    cb(response?.message?.success, response?.message?.message);
  } catch (e) {
    dispatch({ type: MODAL.FAILED, payload: e });
  }
};

export const reqGetAllModal = () => async (dispatch) => {
  dispatch({ type: MODAL.LOADING });
  try {
    const { message, data } = await getAllModals();
    if (message?.success) dispatch({ type: MODAL.SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: MODAL.FAILED, payload: e });
  }
};
