import axios from "axios";

const methods = ["get", "post", "put", "delete"];

const baseURL = process.env.NEXT_PUBLIC_API_URL

function request(method, url, data, options) {
  const token = "emre";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    ...options,
  };
  if (methods.includes(method)) {
    if (url.startsWith("https://") || url.startsWith("http://")) {
        return axios({ method, url, data, headers });
    }
    const newURL = `${baseURL}` + `${url}`;
    return axios({ method, url: newURL, data, headers });
  }
  return console.error(`${url} servisi ${method} tipinde olamaz!!!`);
}

function requestWithoutToken(method, url, data, options) {
  const headers = {
    "Content-Type": "application/json",
    ...options,
  };
  if (methods.includes(method)) {
    if (url.startsWith("https://") || url.startsWith("http://")) {
        return axios({ method, url, data, headers });
    }
    const newURL = `${baseURL}` + `${url}`;
    return axios({ method, url: newURL, data, headers });
  }
  return console.error(`${url} servisi ${method} tipinde olamaz!!!`);
}

export const ApiHelper = {
  request,
  requestWithoutToken,
};