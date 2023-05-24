import HeadingTitle from '@/components/HeadingTitle'

const PlayersBox1 = ({
  textColor,
  lineColor,
  descriptionColor,
}: {
  textColor: string
  lineColor: string
  descriptionColor: string
}) => {
  const style = {
    '--text-color': descriptionColor,
    color:''
  }
  return (
    <>
      <HeadingTitle
        index={1}
        title='CONNECTION'
        lineColor={lineColor}
        textColor={textColor}
      />
      <div
      style={style}
        className={`text-[--text-color] max-[768px]:mt-[21px] max-[768px]:text-[18px] mt-[21px] text-[20px] leading-[28px] max-w-[571px] max-[820px]:max-w-[unset] max-[625px]:text-[15px] max-[625px]:leading-[18px]`}
      >
        Connect with talented athlete directly, you can watch their skills
        through video showreels directly from Surface 1.
      </div>
    </>
  )
}

export default PlayersBox1
