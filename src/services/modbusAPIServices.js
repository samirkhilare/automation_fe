import { RequestAPI, BASE_URL } from "./httpRequest";

export function modbusWriteData(obj) {
  return RequestAPI(BASE_URL + "/modbus/write", {
    method: "POST",
    body: JSON.stringify(obj),
  });
}

export function modbusReadData(obj) {
  return RequestAPI(BASE_URL + "/modbus/read", {
    method: "GET",
    body: JSON.stringify(obj),
  });
}
