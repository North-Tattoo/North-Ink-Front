import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080",
    // headers: {
    //     'Authorization': `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqb2huQGRvZS5jb20iLCJpYXQiOjE3MTQ2OTU4NzUsImV4cCI6MTcxODI5NTg3NX0.jrufxj1DNGG-qE0Avjm4nBPgTKrN0H8QRkUH8sAgbJBzQfjVw7nJ9lO6HeWX0LH0C2gV7vUhLZK0GkqbHX1XAw"}`
    //   }
})

export default api;