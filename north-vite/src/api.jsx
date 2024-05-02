import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        'Authorization': `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtdXJpbG8uc2FtcGFpb0BzcHRlY2giLCJpYXQiOjE3MTQ2MTgwNzMsImV4cCI6MTcxODIxODA3M30.VDUGV31bBL_-sHOPu0uHqB_tm65NZlPD_18VuPQkyK3QuIvlm7nC2gCRX9pocBEgGD0TRcmo7RKBwE9LvyWszQ"}`
      }
})

export default api;