import HeadingTitle from '@/components/HeadingTitle'
import { descriptionColorOption } from '@/utils/constants'

const PlayersBox3 = ({
  textColor,
  lineColor,
  descriptionColor,
}: {
  textColor: 'primary' | 'white' | 'black'
  lineColor: 'primary' | 'white' | 'black'
  descriptionColor: 'primary' | 'white' | 'black'
}) => {

  return (
    <>
      <HeadingTitle
        index={3}
        title='GROWTH'
        lineColor={lineColor}
        textColor={textColor}
      />
      <div
        className={`${descriptionColorOption[descriptionColor]} max-[768px]:mt-[21px] max-[768px]:text-[18px] mt-[21px] text-[20px] leading-[28px] tracking-[0.93px] max-[625px]:text-[15px] max-[625px]:leading-[18px]`}
      >
       Save your time, recruit proper athlets for your team.
      </div>
    </>
  )
}

export default PlayersBox3
