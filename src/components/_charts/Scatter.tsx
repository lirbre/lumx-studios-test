import moment from 'moment'
import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

const HOUR_TO_SEC = 60 * 60 * 1000

const data = [
  { timestamp: Date.now() + 2 * HOUR_TO_SEC, pricetag: 0.22 },
  { timestamp: Date.now() + 1.1 * HOUR_TO_SEC, pricetag: 0.21 },
  { timestamp: Date.now() + 3.4 * HOUR_TO_SEC, pricetag: 0.33 },
  { timestamp: Date.now() + 4.6 * HOUR_TO_SEC, pricetag: 0.29 },
  { timestamp: Date.now() + 5.2 * HOUR_TO_SEC, pricetag: 0.11 },
  { timestamp: Date.now() + 0.1 * HOUR_TO_SEC, pricetag: 0.3 },
  { timestamp: Date.now() + 2.2 * HOUR_TO_SEC, pricetag: 0.22 },
  { timestamp: Date.now() + 1.5 * HOUR_TO_SEC, pricetag: 0.36 },
  { timestamp: Date.now() + 3.7 * HOUR_TO_SEC, pricetag: 0.23 },
  { timestamp: Date.now() + 4.9 * HOUR_TO_SEC, pricetag: 0.49 },
  { timestamp: Date.now() + 5.2 * HOUR_TO_SEC, pricetag: 0.5 },
  { timestamp: Date.now() + 0.1 * HOUR_TO_SEC, pricetag: 0.23 },
  { timestamp: Date.now() + 2.6 * HOUR_TO_SEC, pricetag: 0.19 },
  { timestamp: Date.now() + 1.9 * HOUR_TO_SEC, pricetag: 0.27 },
  { timestamp: Date.now() + 3.2 * HOUR_TO_SEC, pricetag: 0.29 },
  { timestamp: Date.now() + 4.1 * HOUR_TO_SEC, pricetag: 0.323 },
  { timestamp: Date.now() + 5.15 * HOUR_TO_SEC, pricetag: 0.44 },
  { timestamp: Date.now() + 0.11 * HOUR_TO_SEC, pricetag: 0.1 },
  { timestamp: Date.now() + 2.4 * HOUR_TO_SEC, pricetag: 0.05 },
  { timestamp: Date.now() + 1.33 * HOUR_TO_SEC, pricetag: 0.123 },
  { timestamp: Date.now() + 3.77 * HOUR_TO_SEC, pricetag: 0.366 },
  { timestamp: Date.now() + 4.232 * HOUR_TO_SEC, pricetag: 0.3232 },
  { timestamp: Date.now() + 5.12 * HOUR_TO_SEC, pricetag: 0.1123 },
  { timestamp: Date.now() + 0.192 * HOUR_TO_SEC, pricetag: 0.32 },
  { timestamp: Date.now() + 2.22 * HOUR_TO_SEC, pricetag: 0.35 },
  { timestamp: Date.now() + 1.9 * HOUR_TO_SEC, pricetag: 0.29 },
  { timestamp: Date.now() + 3.9 * HOUR_TO_SEC, pricetag: 0.21 },
  { timestamp: Date.now() + 4.2 * HOUR_TO_SEC, pricetag: 0.15 },
  { timestamp: Date.now() + 5.3 * HOUR_TO_SEC, pricetag: 0.27 },
  { timestamp: Date.now() + 0.22 * HOUR_TO_SEC, pricetag: 0.13 },
  { timestamp: Date.now() + 12 * HOUR_TO_SEC, pricetag: 0.22 },
  { timestamp: Date.now() + 21.1 * HOUR_TO_SEC, pricetag: 0.21 },
  { timestamp: Date.now() + 13.4 * HOUR_TO_SEC, pricetag: 0.33 },
  { timestamp: Date.now() + 22.6 * HOUR_TO_SEC, pricetag: 0.29 },
  { timestamp: Date.now() + 15.2 * HOUR_TO_SEC, pricetag: 0.11 },
  { timestamp: Date.now() + 10.1 * HOUR_TO_SEC, pricetag: 0.3 },
  { timestamp: Date.now() + 22.2 * HOUR_TO_SEC, pricetag: 0.22 },
  { timestamp: Date.now() + 11.5 * HOUR_TO_SEC, pricetag: 0.36 },
  { timestamp: Date.now() + 23.7 * HOUR_TO_SEC, pricetag: 0.23 },
  { timestamp: Date.now() + 14.9 * HOUR_TO_SEC, pricetag: 0.49 },
  { timestamp: Date.now() + 15.2 * HOUR_TO_SEC, pricetag: 0.5 },
  { timestamp: Date.now() + 10.1 * HOUR_TO_SEC, pricetag: 0.23 },
  { timestamp: Date.now() + 12.6 * HOUR_TO_SEC, pricetag: 0.19 },
  { timestamp: Date.now() + 12.9 * HOUR_TO_SEC, pricetag: 0.27 },
  { timestamp: Date.now() + 13.2 * HOUR_TO_SEC, pricetag: 0.29 },
  { timestamp: Date.now() + 9.1 * HOUR_TO_SEC, pricetag: 0.323 },
  { timestamp: Date.now() + 8.15 * HOUR_TO_SEC, pricetag: 0.44 },
  { timestamp: Date.now() + 7.11 * HOUR_TO_SEC, pricetag: 0.1 },
  { timestamp: Date.now() + 11.4 * HOUR_TO_SEC, pricetag: 0.05 },
  { timestamp: Date.now() + 8.33 * HOUR_TO_SEC, pricetag: 0.123 },
  { timestamp: Date.now() + 6.77 * HOUR_TO_SEC, pricetag: 0.366 },
  { timestamp: Date.now() + 12.232 * HOUR_TO_SEC, pricetag: 0.3232 },
  { timestamp: Date.now() + 9.12 * HOUR_TO_SEC, pricetag: 0.1123 },
  { timestamp: Date.now() + 11.192 * HOUR_TO_SEC, pricetag: 0.32 },
  { timestamp: Date.now() + 12.22 * HOUR_TO_SEC, pricetag: 0.35 },
  { timestamp: Date.now() + 8.9 * HOUR_TO_SEC, pricetag: 0.29 },
  { timestamp: Date.now() + 8.9 * HOUR_TO_SEC, pricetag: 0.21 },
  { timestamp: Date.now() + 7.2 * HOUR_TO_SEC, pricetag: 0.15 },
  { timestamp: Date.now() + 8.3 * HOUR_TO_SEC, pricetag: 0.27 },
  { timestamp: Date.now() + 9.22 * HOUR_TO_SEC, pricetag: 0.13 },
  { timestamp: Date.now() + 12.33 * HOUR_TO_SEC, pricetag: 0.123 },
  { timestamp: Date.now() + 9.77 * HOUR_TO_SEC, pricetag: 0.366 },
  { timestamp: Date.now() + 16.232 * HOUR_TO_SEC, pricetag: 0.3232 },
  { timestamp: Date.now() + 17.12 * HOUR_TO_SEC, pricetag: 0.1123 },
  { timestamp: Date.now() + 18.192 * HOUR_TO_SEC, pricetag: 0.32 },
  { timestamp: Date.now() + 19.22 * HOUR_TO_SEC, pricetag: 0.35 },
  { timestamp: Date.now() + 21.9 * HOUR_TO_SEC, pricetag: 0.29 },
  { timestamp: Date.now() + 18.9 * HOUR_TO_SEC, pricetag: 0.21 },
  { timestamp: Date.now() + 17.2 * HOUR_TO_SEC, pricetag: 0.15 },
  { timestamp: Date.now() + 21.3 * HOUR_TO_SEC, pricetag: 0.27 },
  { timestamp: Date.now() + 18.22 * HOUR_TO_SEC, pricetag: 0.13 },
  { timestamp: Date.now() + 12.33 * HOUR_TO_SEC, pricetag: 0.423 },
  { timestamp: Date.now() + 9.77 * HOUR_TO_SEC, pricetag: 0.276 },
  { timestamp: Date.now() + 16.232 * HOUR_TO_SEC, pricetag: 0.3232 },
  { timestamp: Date.now() + 17.12 * HOUR_TO_SEC, pricetag: 0.223 },
  { timestamp: Date.now() + 18.192 * HOUR_TO_SEC, pricetag: 0.12 },
  { timestamp: Date.now() + 19.22 * HOUR_TO_SEC, pricetag: 0.25 },
  { timestamp: Date.now() + 21.9 * HOUR_TO_SEC, pricetag: 0.13 },
  { timestamp: Date.now() + 18.9 * HOUR_TO_SEC, pricetag: 0.1 },
  { timestamp: Date.now() + 17.2 * HOUR_TO_SEC, pricetag: 0.4 },
  { timestamp: Date.now() + 21.3 * HOUR_TO_SEC, pricetag: 0.36 },
  { timestamp: Date.now() + 18.22 * HOUR_TO_SEC, pricetag: 0.122 }
]

const domain = [Date.now(), Date.now() + 23 * HOUR_TO_SEC]

export const ComponentScatter = () => {
  return (
    <ResponsiveContainer
      width={'100%'}
      height={438}
      className="max-w-[1216px] bg-[#262338]"
    >
      <ScatterChart
        width={400}
        height={400}
        margin={{
          top: 50,
          right: 50,
          bottom: 50,
          left: 50
        }}
      >
        <CartesianGrid xHeight={0.5} vertical={false} />
        <XAxis
          dataKey="timestamp"
          domain={domain}
          name="Hour"
          tickFormatter={(unixTime) => `${moment(unixTime).format('HH')}:00`}
          type="number"
          tickCount={24}
          markerHeight={10}
          fontSize={'13px'}
          dx={12}
          dy={12}
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
            border: 'none'
          }}
          cursor={{ strokeDasharray: '3 3' }}
          formatter={(name: string, value: string | number) => {
            console.log(name, value)
            if (value !== 'Hour') return `${name} ETH`

            return `${moment(name).format('HH')}:00`
          }}
        />
        <Scatter name="A school" data={data} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  )
}
