import { RequestAPI, BASE_URL } from "./httpRequest";

export function getAllCodes(obj) {
  return RequestAPI(BASE_URL + "/code/", {
    method: "GET",
    body: JSON.stringify(obj),
  });
}

export function AddCode(obj) {
  return RequestAPI(BASE_URL + "/code/add", {
    method: "POST",
    body: JSON.stringify(obj),
  });
}

export function updateCode(obj) {
  return RequestAPI(BASE_URL + `/code/update/${obj?.docId}`, {
    method: "PATCH",
    body: JSON.stringify(obj),
  });
}

export function deleteCode(obj) {
  return RequestAPI(BASE_URL + `/code/delete/${obj?.docId}`, {
    method: "DELETE",
    // body: JSON.stringify(obj),
  });
}
