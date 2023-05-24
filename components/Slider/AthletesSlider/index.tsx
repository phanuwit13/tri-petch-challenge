import AthletesBox1 from '@/components/Athletes/Box-1'
import AthletesBox2 from '@/components/Athletes/Box-2'
import AthletesBox3 from '@/components/Athletes/Box-3'
import Slider from 'react-slick'

const AthletesSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }
  return (
    <Slider {...settings}>
      <div>
        <AthletesBox1
          textColor='black'
          lineColor='primary'
          descriptionColor='black'
        />
      </div>
      <div>
        <AthletesBox2
          textColor='black'
          lineColor='primary'
          descriptionColor='black'
        />
      </div>
      <div>
        <AthletesBox3
          textColor='black'
          lineColor='primary'
          descriptionColor='black'
        />
      </div>
    </Slider>
  )
}

export default AthletesSlider
