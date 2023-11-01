import { MODBUS } from "../constants";

import {
  modbusReadData,
  modbusWriteData,
} from "../../services/modbusAPIServices";

export const reqToWriteModbus = (obj) => async (dispatch) => {
  dispatch({ type: MODBUS.LOADING });
  try {
    const { message, data, status } = await modbusWriteData(obj);
    if (message?.success) dispatch({ type: MODBUS.SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: MODBUS.FAILED, payload: e });
  }
};

export const reqToReadModbus = () => async (dispatch) => {
  dispatch({ type: MODBUS.LOADING });
  try {
    const { message, data, status } = await modbusReadData();
    if (message?.success) dispatch({ type: MODBUS.SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: MODBUS.FAILED, payload: e });
  }
};
