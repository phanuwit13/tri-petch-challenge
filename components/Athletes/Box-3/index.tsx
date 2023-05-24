import HeadingTitle from '@/components/HeadingTitle'
import { descriptionColorOption } from '@/utils/constants'

const AthletesBox3 = ({
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
        className={`${descriptionColorOption[descriptionColor]} mt-[21px] text-[20px] leading-[28px] tracking-[0.93px] max-[768px]:tracking-[0.84px] max-[768px]:text-[18px] max-[625px]:text-[15px] max-[625px]:leading-[18px]`}
      >
        Resources and tools for you to get better as a student Athelte. Access
        to training classes, tutor sessions, etc
      </div>
    </>
  )
}

export default AthletesBox3
