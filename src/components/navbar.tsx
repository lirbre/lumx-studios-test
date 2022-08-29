import Image from 'next/image'

export const Navbar = () => {
  return (
    <div className="fixed z-10 flex h-[73px] w-full justify-between border-b-[1.5px] border-[#4E4B66]/20 bg-[#262338]">
      <div className="flex">
        <div className="flex h-[73px] w-20 items-center justify-center border-r-0 border-[#4E4B66]/20 md:border-r-[1.5px]">
          <Image src="/assets/icons/icn-info.svg" width={24} height={24} />
        </div>
        <input
          className="input-icon my-2 ml-8 hidden h-14 w-[384px] p-4 pr-2.5 pl-12 text-sm placeholder:relative placeholder:bottom-[1px] placeholder:text-[16px] placeholder:font-normal placeholder:leading-6 placeholder:text-[#6E7191] md:block"
          placeholder="Search collections"
          type="text"
        />
      </div>
      <div className="mr-auto flex items-center justify-center md:mr-28">
        <small className="flex items-end justify-center text-[#6E7191]">
          <span className="mr-1.5 text-[#FCFCFC]">71</span> GWEI
        </small>
        <div className="mx-11 mt-1 hidden h-[20px] w-[1px] bg-[#4E4B66] md:block" />
        <small className="mt-1 hidden items-center gap-3 text-[#FCFCFC] md:flex">
          Hi, 02a...2837{' '}
          <Image src="/assets/icons/icn-sidemenu.svg" width={20} height={20} />
        </small>
      </div>
      <div className="mr-6 flex items-center justify-center gap-6 md:hidden">
        <Image src="/assets/icons/icn-search-md.svg" width={20} height={20} />
        <Image src="/assets/icons/icn-menu.svg" width={20} height={20} />
      </div>
    </div>
  )
}
