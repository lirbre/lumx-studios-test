import { TimeButton } from './timebutton'

export const ScatterDashboard = () => {
  return (
    <div className="mb-6 flex w-11/12 flex-col items-center justify-between gap-[18px] bg-[#262338] p-6 md:h-[96px] md:flex-row md:gap-0">
      <div className="flex w-full flex-row justify-between gap-0 md:w-auto md:flex-col md:justify-center">
        <p className="text-[#FCFCFC]">Sales</p>
        <small className="text-[#6E7191]">Showing 2300 sales.</small>
      </div>
      <div className="flex w-full items-center justify-between md:w-auto md:justify-center">
        <small className="mr-10 text-[#6E7191]">Time:</small>
        <div className="flex items-center justify-center gap-5">
          <TimeButton title="24H" isActive={true} />
          <TimeButton title="7D" isActive={false} />
          <div className="hidden gap-5 md:flex">
            <TimeButton title="30D" isActive={false} />
            <TimeButton title="90D" isActive={false} />
            <TimeButton title="6M" isActive={false} />
            <TimeButton title="ALL" isActive={false} />
          </div>
        </div>
      </div>
    </div>
  )
}
