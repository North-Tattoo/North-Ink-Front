import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        'Authorization': `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqb2huQGRvZS5jb20iLCJpYXQiOjE3MTQ2ODQ4NzQsImV4cCI6MTcxODI4NDg3NH0.jsijhYtyM8zCOnqHZyN8Ur_9tgrr6sHEA9Br0CuCG3HXDVlnK_6Gr6oHNmGa3tq0daI_4H9whuQJBc2S5JSbIQ"}`
      }
})

export default api;