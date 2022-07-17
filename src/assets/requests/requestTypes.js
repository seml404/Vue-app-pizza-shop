import axios from "axios";
import qs from "qs";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
  }
);

export const commonRequest = (props) => {
  const { method, url } = props;
  return axios({
    withCredentials: true,
    url,
    method,
  });
};

export const requestWithParams = (props, params) => {
  const { method, url } = props;
  return axios({
    withCredentials: true,
    url,
    method,
    params,
    paramsSerializer: (params) =>
      qs.stringify(params, { arrayFormat: "brakets" }),
  });
};
