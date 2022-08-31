import moment from 'moment'
import { useMemo } from 'react'
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

import { ScatterDashboard } from '../scatterdashboard'
import { linesData, linesDomain } from './data'
import { LinesLegend } from './LinesLegend'

export const ComponentLines = () => {
  return (
    <>
      <ScatterDashboard />
      <div className="mb-[54px] w-11/12 rounded-t-[2px] bg-[#262338] pb-2 md:pb-0">
        <div className="flex h-[28px] w-full items-center justify-between bg-[#262338] px-6 pt-4">
          <small className="text-[#6E7191]">PRICE IN ETH</small>
          <div className="flex items-center justify-center gap-3">
            <small className="text-[#6E7191]">Outliers:</small>
            <label
              htmlFor="lines-outlier"
              className="relative flex cursor-pointer items-center"
            >
              <input type="checkbox" id="lines-outlier" className="sr-only" />
              <div className="toggle-bg h-6 w-20 border-[#EFF0F6] bg-[#4E4B66] " />
            </label>
          </div>
        </div>
        <ResponsiveContainer
          width={'100%'}
          height={338}
          className="h-[294px] w-full rounded-b-[2px] bg-[#262338] md:h-[358px]"
        >
          {useMemo(
            () => (
              <LineChart
                width={1200}
                height={400}
                margin={{
                  top: 44,
                  right: 34,
                  bottom: 34,
                  left: -6
                }}
                data={linesData}
                className="lines-recharts"
              >
                <CartesianGrid
                  color="#262338"
                  xHeight={24}
                  vertical={false}
                  strokeWidth={0.2}
                  stroke="#6E7191"
                />
                <YAxis
                  dataKey="name"
                  type="number"
                  name="Price"
                  axisLine={false}
                  tickLine={false}
                  domain={[19, 24]}
                  tickCount={6}
                  fontSize={'14px'}
                  stroke="#6E7191"
                  strokeWidth={0.2}
                  fontWeight={700}
                />
                <XAxis
                  strokeWidth={0.2}
                  stroke="#6E7191"
                  dataKey="timestamp"
                  name="Hour"
                  domain={linesDomain}
                  tickFormatter={(unixTime) =>
                    `${moment(unixTime).format('HH')}:00`
                  }
                  type="number"
                  tickCount={14}
                  markerHeight={10}
                  fontSize={'13px'}
                  dy={12}
                />
                <Tooltip
                  labelClassName="hidden"
                  wrapperClassName="rounded-lg shadow-lg"
                  itemStyle={{
                    color: '#f2f2f2'
                  }}
                  contentStyle={{
                    background: 'rgba(00, 00, 00, 0.2)',
                    backdropFilter: 'blur(4px)',
                    border: 'none',
                    padding: '.6rem 1.2rem'
                  }}
                  cursor={{ strokeDasharray: '3 3' }}
                  formatter={(name: string, value: string | number) => {
                    if (value !== 'Hour') return `${name} ETH`

                    return `${moment(name).format('HH')}:00`
                  }}
                />
                <Legend content={LinesLegend} />
                <Line
                  type="monotone"
                  dataKey="Average Price"
                  stroke="#80CCF4"
                  activeDot={{ r: 8 }}
                  strokeDasharray="8 8 8"
                />
                <Line type="monotone" dataKey="Floor Price" stroke="#8775D0" />{' '}
              </LineChart>
            ),
            []
          )}
        </ResponsiveContainer>
        <div className="h-0 w-full rounded-b-[2px] bg-[#262338] md:h-6"></div>
      </div>
    </>
  )
}
