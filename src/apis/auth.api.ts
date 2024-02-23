import http from 'src/utils/http'

export const registerAccount = (body: { fullName: string; email: string; password: string }) =>
  http.post('/auth/register', body)
