import { AuthResponse } from 'src/types/auth.type'
import http from 'src/utils/http'

export const registerAccount = (body: { fullName: string; email: string; password: string }) =>
  http.post<AuthResponse>('/auth/register', body)

export const loginAccount = (body: { email: string; password: string }) => http.post<AuthResponse>('/auth/login', body)

export const logout = () => http.delete('/auth/logout')
