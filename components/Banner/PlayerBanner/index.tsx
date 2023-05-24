import Image from 'next/image'

const PlayerBanner = () => {
  return (
    <div className='w-[45%] max-[1100px]:w-[40%] max-[820px]:w-[35%] relative max-[625px]:w-[100%] max-[625px]:m-auto'>
      <Image
        src='/images/basketball-desktop.png'
        alt=''
        className='absolute top-[-125px] max-w-[unset] left-[-70px] max-[1100px]:left-[-130px] min-w-[600px] max-[820px]:hidden block'
        width={991}
        height={100}
      />
      <Image
        src='/images/basketball-tablet.png'
        alt=''
        className='absolute top-[-32px] min-w-[300px] max-[820px]:left-[-92px] max-[625px]:hidden max-[820px]:block hidden max-w-[unset]'
        width={691}
        height={100}
      />
      <Image
        src='/images/basketball-mobile.png'
        alt=''
        className='max-[625px]:block hidden max-w-[unset] max-[625px]:relative w-full max-[625px]:m-auto'
        width={498}
        height={100}
        quality={100}
      />
    </div>
  )
}

export default PlayerBanner
