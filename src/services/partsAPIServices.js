import { RequestAPI, BASE_URL } from "./httpRequest";

export function getAllParts(obj) {
  return RequestAPI(BASE_URL + "/part/get", {
    method: "GET",
  });
}

export function addPart(obj) {
  return RequestAPI(BASE_URL + "/part/add", {
    method: "POST",
    body: obj,
  });
}

export function updatePart(obj, id) {
  console.log("OBJ : ", obj);
  return RequestAPI(BASE_URL + `/part/update/${id}`, {
    method: "PUT",
    body: obj,
  });
}
