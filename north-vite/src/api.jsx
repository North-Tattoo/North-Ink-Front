import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        'Authorization': `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqb2huQGRvZS5jb20iLCJpYXQiOjE3MTQ2ODQwMjIsImV4cCI6MTcxODI4NDAyMn0.7aa0xGDJlLQHNBN0O3cKluBbTiUF2n8Mo0UW8mORWSY7hxvBYQsXK-YRurTTrZimAvuvi61HvTnhvB5Jki4x2A"}`
      }
})

export default api;