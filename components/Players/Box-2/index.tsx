import HeadingTitle from '@/components/HeadingTitle'

const PlayersBox2 = ({
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
      <div style={style} className={`text-[--text-color] max-[768px]:mt-[21px] max-[768px]:text-[18px] mt-[21px] text-[20px] leading-[28px] tracking-[0.93px] max-[625px]:text-[15px] max-[625px]:leading-[18px]`}>
      Work with recruiter to increase your chances of finding talented
                athlete.
      </div>
    </>
  )
}

export default PlayersBox2
