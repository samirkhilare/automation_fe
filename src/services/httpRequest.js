export const BASE_URL = "http://localhost:8080";
// export const BASE_URL = "https://am-automation-server.onrender.com";

export const header = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const RequestAPI = (url, options) => {
  const headers = new Headers();
  if (!(options.body instanceof FormData)) {
    headers.append("Content-Type", "application/json");
  }
  if (sessionStorage.getItem("accessToken")) {
    headers.append(
      "Authorization",
      "Bearer " + sessionStorage.getItem("accessToken")
    );
    if (options.body instanceof FormData) {
      options.body.append(
        "Authorization",
        "Bearer " + sessionStorage.getItem("accessToken")
      );
    }
  }
  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);
  return fetch(url, options).then((response) =>
    response.json().then((json) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return Promise.resolve(json);
    })
  );
};
