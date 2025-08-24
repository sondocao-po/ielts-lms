"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", attendance: 88 },
  { month: "Feb", attendance: 85 },
  { month: "Mar", attendance: 90 },
  { month: "Apr", attendance: 92 },
  { month: "May", attendance: 89 },
  { month: "Jun", attendance: 94 },
  { month: "Jul", attendance: 91 },
  { month: "Aug", attendance: 87 },
  { month: "Sep", attendance: 93 },
  { month: "Oct", attendance: 95 },
  { month: "Nov", attendance: 92 },
  { month: "Dec", attendance: 90 },
]

export function AttendanceChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}%`}
          domain={[80, 100]}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--background))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "6px",
          }}
          formatter={(value) => [`${value}%`, "Attendance Rate"]}
          labelFormatter={(label) => `Month: ${label}`}
        />
        <Line
          type="monotone"
          dataKey="attendance"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          dot={{ r: 4, strokeWidth: 2 }}
          activeDot={{ r: 6, strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
