import { TimeButton } from './timebutton'

export const ScatterDashboard = () => {
  return (
    <div className="mb-6 flex h-[96px] w-11/12 items-center justify-between bg-[#262338] p-6">
      <div className="flex flex-col justify-center gap-0">
        <p className="text-[#FCFCFC]">Sales</p>
        <small className="text-[#6E7191]">Showing 2300 sales.</small>
      </div>
      <div className="flex items-center justify-center">
        <small className="mr-10 text-[#6E7191]">Time:</small>
        <div className="flex items-center justify-center gap-5">
          <TimeButton title="24H" isActive={true} />
          <TimeButton title="7D" isActive={false} />
          <TimeButton title="30D" isActive={false} />
          <TimeButton title="90D" isActive={false} />
          <TimeButton title="6M" isActive={false} />
          <TimeButton title="ALL" isActive={false} />
        </div>
      </div>
    </div>
  )
}
