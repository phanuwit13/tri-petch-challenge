import AthletesBox1 from '@/components/Athletes/Box-1'
import AthletesBox2 from '@/components/Athletes/Box-2'
import AthletesBox3 from '@/components/Athletes/Box-3'
import AthletesBanner from '@/components/Banner/AthletesBanner'
import PlayerBanner from '@/components/Banner/PlayerBanner'
import PlayersBox1 from '@/components/Players/Box-1'
import PlayersBox2 from '@/components/Players/Box-2'
import PlayersBox3 from '@/components/Players/Box-3'
import AthletesSlider from '@/components/Slider/AthletesSlider'
import PlayerSlider from '@/components/Slider/PlayerSlider'

const HomePage = () => {

  return (
    <div>
      <div className=''>
        <div className='bg-white'>
          <div className='banner-title flex justify-end max-w-[1600px] m-auto pt-[24px] px-[30px] max-[820px]:pt-[81px] max-[625px]:flex-col-reverse max-[625px]:px-[19px] max-[625px]:pt-[0px] max-[625px]:gap-[11px] max-[625px]:mb-[-50px]'>
            <AthletesBanner />
            <div className='w-[47%] max-[1100px]:w-[60%] max-[820px]:w-[65%] flex items-center px-[6px] '>
              <h1 className='capitalize text-[90px] leading-[105px] text-[#E7E7E7] max-[625px]:text-[50px] max-[625px]:leading-[59px]'>
                ATHLETS
              </h1>
            </div>
          </div>
        </div>
        <div className='bg-white max-[625px]:hidden'>
          <div className='banner-title flex justify-end max-w-[1600px] m-auto py-[58px] px-[30px] max-[768px]:py-[30px]'>
            <div className='w-[47%] max-[1100px]:w-[60%] max-[820px]:w-[65%] px-[4px]'>
              <AthletesBox1 textColor="black" lineColor="#603EBE" descriptionColor='black' />
            </div>
          </div>
        </div>
        <div className='bg-[#F5F4F9]'>
          <div className='banner-title flex max-[625px]:flex-col justify-end max-w-[1600px] m-auto py-[52px] px-[30px] max-[768px]:py-[30px] max-[625px]:py-[72px]  max-[625px]:px-[19px]'>
            <div className='w-[47%] max-[625px]:hidden max-[1100px]:w-[60%] max-[820px]:w-[65%] px-[4px]'>
              <AthletesBox2 textColor="black" lineColor="#603EBE" descriptionColor='black' />
            </div>
            <div className='max-[625px]:block hidden'>
             <AthletesSlider />
            </div>
          </div>
        </div>
        <div className='bg-[#5E3DB3] max-[625px]:hidden'>
          <div className='banner-title flex justify-end max-w-[1600px] m-auto py-[85px] px-[30px] max-[768px]:py-[30px]'>
            <div className='w-[47%] max-[1100px]:w-[60%] max-[820px]:w-[65%] px-[4px]'>
              <AthletesBox3 textColor="black" lineColor="white" descriptionColor='black' />
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className='bg-white'>
          <div className='banner-title flex justify-start max-w-[1540px] m-auto pt-[126px] max-[820px]:pt-[51px] max-[625px]:flex-col max-[625px]:px-[19px] max-[625px]:pt-[0px] max-[625px]:gap-[11px] max-[625px]:mb-[-30px]'>
            <div className='w-[55%] flex items-center px-[6px] pl-[140px] max-[1100px]:pl-[31px]  max-[625px]:pl-[6px]'>
              <h1 className='capitalize text-[90px] leading-[105px] text-[#E7E7E7] max-[625px]:text-[50px]  max-[625px]:leading-[59px]'>
                PLAYERS
              </h1>
            </div>
            <PlayerBanner />
          </div>
        </div>
        <div className='bg-white max-[625px]:hidden'>
          <div className='banner-title flex justify-start max-w-[1600px] m-auto py-[69px] max-[820px]:pb-[10px] max-[820px]:pt-[35px]'>
            <div className='w-[55%] max-[820px]:w-[66%]  px-[4px] pl-[140px] max-[1100px]:pl-[31px]'>
              <PlayersBox1 textColor="black" lineColor="#603EBE" descriptionColor='black' />
            </div>
          </div>
        </div>
        <div className='bg-[#F5F4F9]'>
          <div className='banner-title flex max-[625px]:flex-col justify-start max-w-[1600px] m-auto pt-[52px] pb-[102px] max-[820px]:py-[51px] max-[820px]:pb-[65px]  max-[768px]:py-[30px] max-[625px]:py-[72px]  max-[625px]:px-[19px]'>
            <div className='w-[55%] max-[820px]:w-[66%] max-[625px]:hidden px-[4px] pl-[140px] max-[1100px]:pl-[31px]'>
              <PlayersBox2 textColor="black" lineColor="#603EBE" descriptionColor='black' />
            </div>
            <div className='max-[625px]:block hidden'>
              <PlayerSlider />
            </div>
          </div>
        </div>
        <div className='bg-[#090C35] max-[625px]:hidden'>
          <div className='banner-title flex justify-start max-w-[1600px] m-auto pt-[87px] pb-[66px] max-[820px]:py-[44px]'>
            <div className='w-[55%] max-[820px]:w-[66%] px-[4px] pl-[140px] max-[1100px]:pl-[31px]'>
              <PlayersBox3 textColor="#603EBE" lineColor="white" descriptionColor='white' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
