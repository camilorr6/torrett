import axios from 'axios';

export const axiosIns = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:4000/api' : 'https://torre-tech-test.herokuapp.com/',
    withCredentials: true,
  })