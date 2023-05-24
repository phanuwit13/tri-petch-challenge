import PlayersBox1 from '@/components/Players/Box-1'
import PlayersBox2 from '@/components/Players/Box-2'
import PlayersBox3 from '@/components/Players/Box-3'
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
        <PlayersBox1
          textColor='black'
          lineColor='#603EBE'
          descriptionColor='black'
        />
      </div>
      <div>
        <PlayersBox2
          textColor='black'
          lineColor='#603EBE'
          descriptionColor='black'
        />
      </div>
      <div>
        <PlayersBox3
          textColor='black'
          lineColor='#603EBE'
          descriptionColor='black'
        />
      </div>
    </Slider>
  )
}

export default AthletesSlider
