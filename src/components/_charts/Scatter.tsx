import moment from 'moment'
import { useMemo } from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

import { barsData, scatterData, scatterDomain } from './data'

export const ComponentScatter = () => {
  return (
    <div className="h-[294px] w-11/12 rounded-t-[2px] bg-[#262338] md:h-[428px] md:max-w-[1216px]">
      <div className="flex h-[28px] w-full items-center justify-between bg-[#262338] px-6 pt-4">
        <small className="text-[#6E7191]">PRICE IN ETH</small>
        <div className="flex items-center justify-center gap-3">
          <small className="text-[#6E7191]">Outliers:</small>
          <label
            htmlFor="outlier"
            className="relative flex cursor-pointer items-center"
          >
            <input type="checkbox" id="outlier" className="sr-only" />
            <div className="toggle-bg h-6 w-20 border-[#EFF0F6] bg-[#4E4B66] " />
          </label>
        </div>
      </div>
      <ResponsiveContainer
        width={'100%'}
        height={338}
        className="h-[294px] w-full rounded-b-[2px] bg-[#262338] md:h-[358px] md:max-w-[1216px]"
      >
        {useMemo(
          () => (
            <ScatterChart
              width={1200}
              height={400}
              margin={{
                top: 44,
                right: 64,
                bottom: 34,
                left: 0
              }}
            >
              <CartesianGrid
                color="#262338"
                xHeight={0.5}
                vertical={false}
                strokeWidth={0.2}
              />
              <YAxis
                dataKey="pricetag"
                type="number"
                name="Price"
                axisLine={false}
                tickLine={false}
                domain={[0, 0.5]}
                tickCount={6}
                fontSize={'14px'}
                stroke="#6E7191"
                fontWeight={700}
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
              <Scatter name="A school" data={scatterData} fill="#8884d8" />
            </ScatterChart>
          ),
          []
        )}
      </ResponsiveContainer>
      <ResponsiveContainer
        width={'100%'}
        height={48}
        className="h-[294px] w-full bg-[#262338] md:h-[358px] md:max-w-[1216px]"
      >
        {useMemo(
          () => (
            <BarChart
              width={500}
              height={300}
              data={barsData}
              margin={{
                top: 0,
                right: 64,
                bottom: 0,
                left: 0
              }}
              barSize={4}
              className="bar-recharts"
            >
              <XAxis
                dataKey="timestamp"
                domain={scatterDomain}
                name="Hour"
                tickFormatter={(unixTime) =>
                  `${moment(unixTime).format('HH')}:00`
                }
                type="number"
                tickCount={24}
                markerHeight={10}
                fontSize={'13px'}
                dy={8}
                stroke="#6E7191"
                strokeWidth={0.2}
              />{' '}
              <YAxis
                type="number"
                name="Quantity"
                dataKey="quantity"
                axisLine={false}
                tickLine={false}
                domain={[0, 0.5]}
                fontSize={'0'}
                fontWeight={700}
              />{' '}
              <Bar dataKey="quantity" fill="#6E7191" />
            </BarChart>
          ),
          []
        )}
      </ResponsiveContainer>
      <div className="h-0 w-full rounded-b-[2px] bg-[#262338] md:h-6"></div>
    </div>
  )
}
