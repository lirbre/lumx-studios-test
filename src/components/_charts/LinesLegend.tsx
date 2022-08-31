export const LinesLegend = () => {
  return (
    <div className="relative top-6 left-4 flex w-full items-center justify-center gap-10 md:left-0">
      <div className="flex items-center justify-center gap-3">
        <span className="h-0.5 w-5 bg-[#8775D0]" />
        <small className="text-[#fff]">Floor Price</small>
      </div>
      <div className="flex items-center justify-center gap-3">
        <span className="h-[1px] w-5 border-[1px] border-dashed border-[#80CCF4]" />
        <small className="text-[#fff]">Average Price</small>
      </div>
    </div>
  )
}
