import { SuccessResponse } from './utils.type'

export type MovieResponse = SuccessResponse<{
  moviesNowPlaying: any
  _id: string
  image: string
  movieName: string
  cats: string
  ageLimit: string
  language: string
  format: string
}>
