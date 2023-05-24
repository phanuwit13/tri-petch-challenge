import HeadingTitle from '@/components/HeadingTitle'

const AthletesBox2 = ({
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
        index={2}
        title='COLLABORATION'
        lineColor={lineColor}
        textColor={textColor}
      />
      <div style={style} className={`text-[--text-color] mt-[21px] text-[20px] leading-[28px] tracking-[0.93px] max-[768px]:tracking-[0.84px] max-[768px]:text-[18px] max-[625px]:text-[15px] max-[625px]:leading-[18px]`}>
        Work with other student athletes to  increase visability. When you share
        and like other players videos it will increase your visability as a
        player. This is the team work aspect to Surface 1.
      </div>
    </>
  )
}

export default AthletesBox2
