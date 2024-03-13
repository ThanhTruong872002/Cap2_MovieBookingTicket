import { useEffect, useState } from 'react'
import MovieItem from '../MovieItem'
import { moviesShowing } from 'src/apis/movie.api'
import Slider from 'react-slick'
import '../../CSS/CustomReactSlick.css'

export default function MoviesShowing() {
  const [movieData, setMovieData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await moviesShowing()
        const data = response.data.data.moviesNowPlaying
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
    nextArrow: <button className='slick-next'></button>,
    prevArrow: <button className='slick-prev'></button>,
    dots: true,
  }

  return (
    <>
      <div className='flex flex-col px-64 py-12 my-10'>
        <h1 className='text-white font-semibold text-3xl text-center pb-12'>Phim Đang Chiếu</h1>
        <Slider {...settings} className='.slick-dots'>
          {movieData.map((movie, index) => (
            <MovieItem
              key={index}
              id={movie._id}
              img_url={movie.image}
              movieName={movie.movieName}
              ageLimit={movie.ageLimit}
              cats={movie.cats.join(', ')}
              format={movie.format}
              language={movie.language.join(', ')}
            />
          ))}
        </Slider>
      </div>
      <div className='h-1 w-full bg-white mt-40' />
    </>
  )
}
