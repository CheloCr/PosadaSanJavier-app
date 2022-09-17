import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTgzZTliNmMwZmY0MDIwNTMzNTM2NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzEyNjE0NiwiZXhwIjoxNjYzMjEyNTQ2fQ.acBghY4xrEx9Sw0tVYIve73T2M8JbrXSlxia3RRGsRg"


export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
  });
  