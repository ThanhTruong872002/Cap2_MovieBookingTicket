import { Link } from 'react-router-dom'
import { MovieType } from 'src/interfaces/movie.interface'
import Button from '../Button'

const MovieItem = ({ id, img_url, movieName, cats, ageLimit, language, format }: MovieType) => {
  const maxLength = 25
  const truncatedMovieName = movieName.length > maxLength ? `${movieName.substring(0, maxLength)}...` : movieName

  return (
    <div className='text-white flex flex-col gap-12 cursor-grab'>
      <Link to={`/moviedetail/${id}`}>
        <img
          src={img_url}
          alt={movieName}
          className='h-auto w-[90%] ml-[5%] object-contain cursor-pointer hover:scale-105 transition-all'
        />
      </Link>

      <div className='pl-12 flex flex-col gap-6'>
        <Link to={`/moviedetail/${id}`}>
          <p className='font-bold text-2xl cursor-pointer hover:text-red-400'>{truncatedMovieName}</p>
        </Link>
        <div className='flex flex-col gap-5'>
          <span className='text-2xl'>
            Thể loại phim: <br />
            {cats && <p className='hover:underline cursor-pointer hover:text-red-400'>{cats}</p>}
          </span>
          <div className='flex gap-4 text-lg'>
            {ageLimit && (
              <p className='bg-[#FF551F] flex items-center justify-center w-[10%] p-2 font-bold rounded-md border-none'>
                {ageLimit}
              </p>
            )}
            {language && <p className='p-2 border border-[#BD4F44] rounded-md'>{language.toUpperCase()}</p>}
            {format && (
              <p className='bg-[#FF551F] flex items-center justify-center w-[10%] p-2 rounded-md border-none'>
                {format}
              </p>
            )}
          </div>
        </div>
        {cats && format && language ? (
          <div className='flex gap-6 cursor-pointer items-center'>
            <Button to='/' width='130px' height='40px' classnames='bg-orange px-4 '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='white'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='w-10 h-10 mr-4'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z'
                />
              </svg>
              <span className='font-semibold'>Mua vé ngay</span>
            </Button>
            <Link to={`/moviedetail/${id}`}>
              <p className='text-2xl border w-12 h-12 flex items-center justify-center rounded-full font-semibold hover:bg-white hover:text-red-400'>
                i
              </p>
            </Link>
          </div>
        ) : (
          <div className='cursor-pointer items-center justify-center w-[70%]'>
            <Button to={`/moviedetail/${id}`} width='130px' height='40px' classnames='flex gap-5 px-4 '>
              <p className='text-2xl border w-12 h-12 flex items-center justify-center rounded-full font-semibold hover:bg-white hover:text-red-400'>
                i
              </p>
              <span className='font-semibold text-white'>Thông tin chi tiết</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default MovieItem
