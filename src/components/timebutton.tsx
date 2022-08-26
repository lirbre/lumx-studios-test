interface TimeButtonProps {
  title: string
  isActive: boolean
}

export const TimeButton = ({ isActive, title }: TimeButtonProps) => {
  return (
    <div
      className={`flex h-[30px] cursor-pointer items-center justify-center rounded-[2px] px-1.5 py-4 ${
        isActive ? 'bg-[#4E4B66]' : 'bg-[#262338]'
      }`}
    >
      <small className={`${isActive ? 'text-[#EFF0F6]' : 'text-[#6E7191]'}`}>
        {title}
      </small>
    </div>
  )
}
