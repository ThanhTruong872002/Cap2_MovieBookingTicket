import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import MoviesShowing from 'src/components/MoviesShowing'

export default function Home() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  }
  return (
    <div className='z-10 -translate-y-40'>
      <Slider {...settings}>
        <div>
          <img src='./src/images/wibu.jpg' alt='' className='h-full w-full object-contain ' />
        </div>
        <div>
          <img src='./src/images/hero1.jpg' alt='' className='h-[80%] w-full object-contain ' />
        </div>
      </Slider>
      <MoviesShowing />
    </div>
  )
}
