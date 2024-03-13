import { SuccessResponse } from './utils.type'

export type PreSaleTicketResponse = SuccessResponse<{
  moviesPreSaleTicket: any
  _id: string
  image: string
  movieName: string
  cats: string
}>
