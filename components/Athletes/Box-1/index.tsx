import HeadingTitle from '@/components/HeadingTitle'
import { descriptionColorOption } from '@/utils/constants'

const AthletesBox1 = ({
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
        index={1}
        title='CONNECTION'
        lineColor={lineColor}
        textColor={textColor}
      />
      <div className={`${descriptionColorOption[descriptionColor]} mt-[31px] max-[768px]:mt-[21px] max-[768px]:text-[18px] text-[20px] leading-[28px] max-[625px]:text-[15px] max-[625px]:leading-[18px]`}>
        Connect with coaches directly, you can ping coaches to view profile.
      </div>
    </>
  )
}

export default AthletesBox1
