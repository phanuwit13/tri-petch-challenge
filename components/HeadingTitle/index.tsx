import { lineColorOption, textColorOption } from '@/utils/constants'
import { useMemo } from 'react'

const HeadingTitle = ({
  index,
  title,
  textColor,
  lineColor,
}: {
  index: number
  title: string
  textColor: 'primary' | 'white' | 'black'
  lineColor: 'primary' | 'white' | 'black'
}) => {
  const indexDisplay = useMemo(() => {
    return index < 10 ? `0${index}` : index
  }, [index])

  return (
    <div>
      <div className='flex gap-[10px] items-center'>
        <div className='h-[30px] max-[625px]:h-[22px]'>
          <div
            className={`max-[625px]:text-[14px] max-[625px]:leading-[14px] text-[18px] tracking-[1.5px] leading-[21px] relative after:w-[20px] after:content-[''] after:bottom-[-8px] after:left-[50%] after:translate-x-[-50%]  after:absolute after:h-[5px] after:rounded-lg ${lineColorOption[lineColor]} ${textColorOption[textColor]}`}
          >
            {indexDisplay}
          </div>
          <div className='' />
        </div>
        <h2 className='text-[36px] text-[#C2C2C2] tracking-[1.5px] leading-[42px] max-[625px]:leading-[33px] max-[625px]:text-[28px]'>
          {title}
        </h2>
      </div>
    </div>
  )
}

export default HeadingTitle
