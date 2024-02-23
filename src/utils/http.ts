import axios, { type AxiosInstance } from 'axios'


class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:5000/api/v1',
      timeout: 10000,
      headers: {
        'Content-Type' : 'application/json'
      }
    })
  }
}

const http = new Http().instance

export default http