import Image from 'next/image'

export const Dashboard = () => {
  return (
    <div className="mb-16 flex w-11/12 max-w-[1] flex-col rounded-[2px] bg-[#262338] lg:flex-row lg:gap-0">
      <div className="flex justify-between p-6">
        <div className="flex gap-2 md:gap-6">
          <div className="flex w-[50px] items-center justify-center md:w-[60px] xl:w-full">
            <Image
              src={'/assets/images/bored-logo.png'}
              width={72}
              height={72}
              objectFit={'contain'}
            />
          </div>
          <div className="flex min-w-fit flex-col justify-center gap-1">
            <p className="text-[11px] text-[#FCFCFC] sm:text-sm xl:text-base">
              Bored Ape Yacht Club
            </p>
            <span className="flex items-center justify-between gap-1">
              <small className="text-[11px] sm:text-sm xl:text-[1.05rem]">
                0x6080b4.s01993825...
              </small>
              <Image
                src={'/assets/icons/icn-copy.svg'}
                width={20}
                height={20}
                onClick={() => {
                  navigator.clipboard.writeText(
                    '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d'
                  )
                }}
                className="cursor-pointer"
              />
            </span>
          </div>
        </div>
        <div className="flex w-[100px] items-center justify-center gap-1.5 pl-4 sm:w-auto xl:pl-12">
          <a
            href="https://boredapeyachtclub.com/#/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center rounded-full"
          >
            <Image
              src="/assets/icons/icn-monitor-list.svg"
              width={34}
              height={34}
            />
          </a>
          <a
            href="https://opensea.io/collection/boredapeyachtclub"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center rounded-full"
          >
            <Image
              src="/assets/icons/icn-opensea-list.svg"
              width={34}
              height={34}
            />
          </a>
          <a
            href="https://etherscan.io/address/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center rounded-full"
          >
            <Image
              src="/assets/icons/icon-etherscan-list.svg"
              width={34}
              height={34}
            />
          </a>
        </div>
      </div>
      <div className="ml-0 grid grid-cols-3 items-start gap-4 border-t border-[#4E4B66] p-6 md:grid-cols-6 lg:ml-auto lg:border-none xl:flex xl:gap-8 2xl:gap-[62px]">
        <div className="flex flex-col items-center justify-center gap-1">
          <small className="text-[#6E7191]">LIFETIME</small>
          <p className="text-[#fcfcfc]">453d</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <small className="text-[#6E7191]">ITEMS</small>
          <p className="text-[#fcfcfc]">10k</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <small className="text-[#6E7191]">FLOOR</small>
          <p className="flex items-center justify-center gap-1 text-[#fcfcfc]">
            <Image
              src={'/assets/icons/icn-dashes.svg'}
              height={13}
              width={13}
            />{' '}
            145
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <small className="text-[#6E7191]">ROYALTIES</small>
          <p className="flex items-center justify-center text-[#fcfcfc]">
            7.5%
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <small className="text-[#6E7191]">VOL 24H</small>
          <p className="flex items-center justify-center gap-1 text-[#fcfcfc]">
            <Image
              src={'/assets/icons/icn-dashes.svg'}
              height={13}
              width={13}
            />{' '}
            1.581K
          </p>
          <div className="flex gap-1 text-[#4DBC19]">
            <Image src={'/assets/icons/icn-up.svg'} height={10} width={10} />
            <small>12,02%</small>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <small className="text-[#6E7191]">VOL 7D</small>
          <p className="flex items-center justify-center gap-1 text-[#fcfcfc]">
            <Image
              src={'/assets/icons/icn-dashes.svg'}
              height={13}
              width={13}
            />{' '}
            12.9K
          </p>
          <div className="flex gap-1 text-[#D03025]">
            <Image src={'/assets/icons/icn-down.svg'} height={10} width={10} />
            <small>1,29%</small>
          </div>
        </div>
      </div>
    </div>
  )
}
