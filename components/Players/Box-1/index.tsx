import HeadingTitle from '@/components/HeadingTitle'
import { descriptionColorOption } from '@/utils/constants'

const PlayersBox1 = ({
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
      <div
        className={`${descriptionColorOption[descriptionColor]} max-[768px]:mt-[21px] max-[768px]:text-[18px] mt-[21px] text-[20px] leading-[28px] max-w-[571px] max-[820px]:max-w-[unset] max-[625px]:text-[15px] max-[625px]:leading-[18px]`}
      >
        Connect with talented athlete directly, you can watch their skills
        through video showreels directly from Surface 1.
      </div>
    </>
  )
}

export default PlayersBox1
