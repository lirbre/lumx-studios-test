import Image from 'next/image'

interface SideIconProps {
  icon: string
  isSelected: boolean
  description: string
}

export const SideIcon = ({ icon, isSelected, description }: SideIconProps) => {
  return (
    <div
      className={`${
        isSelected ? 'bg-[#4E4B66]' : ''
      } flex flex-col items-center justify-center gap-1.5 rounded-[2px] py-1.5`}
    >
      <Image src={icon} height={23} width={23} objectFit={'contain'} />
      <small
        className={`${
          isSelected ? 'text-[#EFF0F7]' : 'text-[#6E7191]'
        } text-center font-semibold`}
      >
        {description}
      </small>
    </div>
  )
}
