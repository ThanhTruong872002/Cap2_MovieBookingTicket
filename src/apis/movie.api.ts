import { MovieUpCommingResponse } from 'src/types/movieUpcoming.type'
import { MovieShowingResponse } from 'src/types/movieShowing.type'
import { PreSaleTicketResponse } from 'src/types/preSaleTicket.type'
import http from 'src/utils/http'

export const moviesShowing = () => http.get<MovieShowingResponse>('/movie/showing')
export const moviesUpComming = () => http.get<MovieUpCommingResponse>('/movie/upcoming')
export const preSaleTicket = () => http.get<PreSaleTicketResponse>('/movie/presaleticket')
