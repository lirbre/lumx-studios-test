import { SideIcon } from './sideicon'

export const SideBar = () => {
  return (
    <div className="fixed top-0 hidden h-screen w-20 flex-col gap-2 bg-[#262338] px-2 pt-[102px] md:flex">
      <SideIcon
        icon="/assets/icons/icn-explore.svg"
        isSelected={true}
        description={'Explore'}
      />
      <SideIcon
        icon="/assets/icons/icn-events.svg"
        isSelected={false}
        description={'Live Events'}
      />
      <SideIcon
        icon="/assets/icons/icn-calendar.svg"
        isSelected={false}
        description={'Calendar'}
      />
      <SideIcon
        icon="/assets/icons/icn-buy.svg"
        isSelected={false}
        description={'Auto Buy'}
      />
      <SideIcon
        icon="/assets/icons/icn-settings.svg"
        isSelected={false}
        description={'Settings'}
      />
    </div>
  )
}
