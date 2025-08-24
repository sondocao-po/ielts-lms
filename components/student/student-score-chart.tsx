"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { date: "Jan 15", score: 5.5 },
  { date: "Feb 10", score: 5.5 },
  { date: "Mar 05", score: 6.0 },
  { date: "Apr 01", score: 6.0 },
  { date: "Apr 20", score: 6.5 },
  { date: "May 10", score: 6.5 },
]

export function StudentScoreChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          domain={[4, 9]}
          ticks={[4, 5, 6, 7, 8, 9]}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--background))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "6px",
          }}
          formatter={(value) => [`${value}`, "Overall Score"]}
          labelFormatter={(label) => `Date: ${label}`}
        />
        <Line
          type="monotone"
          dataKey="score"
          stroke="hsl(var(--primary))"
          strokeWidth={3}
          dot={{ r: 6, strokeWidth: 3 }}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
