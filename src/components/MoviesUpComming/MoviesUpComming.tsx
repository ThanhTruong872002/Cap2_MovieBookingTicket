import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { moviesUpComming } from 'src/apis/movie.api'
import MovieItem from '../MovieItem'

export default function MoviesUpComming() {
  const [movieData, setMovieData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await moviesUpComming()
        const data = response.data.data.moviesUpcoming
        setMovieData(data)
      } catch (error) {
        console.error('Error fetch data in :', error)
      }
    }

    fetchData()
  }, [])

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: movieData.length > 5 ? <button className='slick-next'></button> : <></>,
    prevArrow: movieData.length > 5 ? <button className='slick-prev'></button> : <></>,
  }

  return (
    <>
      <div className='flex flex-col px-64 py-12 my-10'>
        <h1 className='text-white font-semibold text-3xl text-center pb-12'>Phim Sắp Chiếu</h1>
        <Slider {...settings} className='.slick-dots'>
          {movieData.map((movie, index) => (
            <MovieItem
              key={index}
              id={movie._id}
              img_url={movie.image}
              movieName={movie.movieName}
              cats={movie.cats.join(', ')}
              ageLimit=''
              format=''
              language=''
            />
          ))}
        </Slider>
      </div>
      <div className='h-1 w-full bg-white mt-40' />
    </>
  )
}
