import axios from "axios";
let requests = axios.create({
  baseURL: "http://52.253.114.82:8080/api/",
  timeout: 5000,
});
 
requests.interceptors.request.use((config) => {
  return config;
});
 
requests.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    alert(err);
  }
);
export default requests;