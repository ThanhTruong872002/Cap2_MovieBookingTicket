import axios, { AxiosError, type AxiosInstance } from 'axios'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'
import { toast } from 'react-toastify'
import { AuthResponse } from 'src/types/auth.type'
import { clearAccessTokenFromLS, getAccessTokenFromLS, saveAccesTokenToLS } from './auth'

class Http {
  instance: AxiosInstance
  private accessToken: string
  constructor() {
    this.accessToken = getAccessTokenFromLS()
    this.instance = axios.create({
      baseURL: 'http://localhost:5000/api/v1',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    this.instance.interceptors.request.use((config) => {
      if(this.accessToken && config.headers) {
        config.headers.authorization = `Bearer ${this.accessToken}`
        return config
      }
      return config
    }, (error) => {
      return Promise.reject(error)
    })
    //nó như một bức tường lửa cho phép bạn kiểm tra, thêm vào hoặc thay đổi các header, param hoặc data của request và response.
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        if (url === '/auth/login' || url === '/auth/register') {
          this.accessToken = (response.data as AuthResponse).data.accessToken
          saveAccesTokenToLS(this.accessToken)
        } else if(url === '/auth/logout') {
          this.accessToken = ''
          clearAccessTokenFromLS()
        }
        return response
      },
      function (error: AxiosError) {
        if (error.response?.status !== HttpStatusCode.BadRequest) {
          const data: any | undefined = error.response?.data
          const message = data.message || error.message
          toast.error(message)
        }
        return Promise.reject(error)
      },
    )
  }
}

const http = new Http().instance

export default http
