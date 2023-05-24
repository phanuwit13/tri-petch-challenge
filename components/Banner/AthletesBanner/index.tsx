import Image from 'next/image'

const AthletesBanner = () => {
  return (
    <div className='w-[53%] max-[1100px]:w-[40%] max-[820px]:w-[35%] relative max-[625px]:w-[68%] max-[625px]:m-auto'>
      <Image
        src='/images/footballer-desktop.png'
        alt=''
        className='absolute top-[10px] left-[0px] max-[1100px]:left-[-220px] min-w-[600px] max-[820px]:hidden block'
        width={678}
        height={100}
      />
      <Image
        src='/images/footballer-tablet.png'
        alt=''
        className='absolute top-[10px] right-[-52px] min-w-[300px] max-[625px]:hidden max-[820px]:block hidden max-w-[unset]'
        width={498}
        height={100}
      />
      <Image
        src='/images/footballer-mobile.png'
        alt=''
        className='max-[625px]:block hidden max-w-[unset] max-[625px]:relative w-full max-[625px]:m-auto'
        width={498}
        height={100}
        quality={100}
      />
    </div>
  )
}

export default AthletesBanner
