import { RequestAPI, BASE_URL } from "./httpRequest";

export function getAllModals(obj) {
  return RequestAPI(BASE_URL + "/modal/", {
    method: "GET",
  });
}

export function addModal(obj) {
  return RequestAPI(BASE_URL + "/modal/add", {
    method: "POST",
    body: JSON.stringify(obj),
  });
}

export function addVideoFile(obj) {
  return RequestAPI(BASE_URL + "/modal/video", {
    method: "POST",
    body: obj,
  });
}

export function updateModal(obj, id) {
  console.log("OBJ : ", obj);
  return RequestAPI(BASE_URL + `/modal/update/${id}`, {
    method: "PUT",
    body: obj,
  });
}

export function getDayProduction(obj) {
  console.log("OBJ : ", obj);
  return RequestAPI(BASE_URL + `/modal/production/shift`, {
    method: "GET",
  });
}

export function getMonthProduction(obj) {
  const { mm, yy } = obj;
  return RequestAPI(BASE_URL + `/modal/production/${mm}/${yy}`, {
    method: "GET",
  });
}

export function getYearProduction(obj) {
  const { yy } = obj;
  return RequestAPI(BASE_URL + `/modal/production/${yy}`, {
    method: "GET",
  });
}
