import { MovieResponse } from 'src/types/movie.type'
import http from 'src/utils/http'

export const moviesShowing = () => http.get<MovieResponse>('/movie/showing')
