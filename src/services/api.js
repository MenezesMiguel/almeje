import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3333"
});

// const requestHandler = (request) => {
//     const token = sessionStorage.getItem('@atlas-Token');
//     if (token) {
//       const user = JSON.parse(token);
//       request.headers.Authorization = `Bearer ${user.acessToken}`;
//     }
//     return request;
//   };

// api.interceptors.request.use((request) => requestHandler(request));

export default api;