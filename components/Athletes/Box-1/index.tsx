import HeadingTitle from '@/components/HeadingTitle'

const AthletesBox1 = ({
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
        className={`text-[--text-color] mt-[31px] max-[768px]:mt-[21px] max-[768px]:text-[18px] text-[20px] leading-[28px] max-[625px]:text-[15px] max-[625px]:leading-[18px]`}
      >
        Connect with coaches directly, you can ping coaches to view profile.
      </div>
    </>
  )
}

export default AthletesBox1
