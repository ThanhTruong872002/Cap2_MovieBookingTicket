import { SuccessResponse } from './utils.type'

export type MovieUpCommingResponse = SuccessResponse<{
  moviesUpcoming: any
  _id: string
  image: string
  movieName: string
  cats: string
}>
