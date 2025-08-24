"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { date: "Jan 15", overall: 5.5, reading: 5.0, writing: 5.0, listening: 6.0, speaking: 6.0 },
  { date: "Feb 10", overall: 5.5, reading: 5.5, writing: 5.0, listening: 6.0, speaking: 6.0 },
  { date: "Mar 05", overall: 6.0, reading: 6.0, writing: 5.5, listening: 6.5, speaking: 6.0 },
  { date: "Apr 01", overall: 6.0, reading: 6.5, writing: 5.5, listening: 6.5, speaking: 6.0 },
  { date: "Apr 20", overall: 6.5, reading: 7.0, writing: 6.0, listening: 7.0, speaking: 6.5 },
  { date: "May 10", overall: 6.5, reading: 7.0, writing: 6.0, listening: 7.0, speaking: 6.5 },
]

export function StudentProgressChart() {
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
        />
        <Line
          type="monotone"
          dataKey="overall"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          dot={{ r: 4, strokeWidth: 2 }}
          name="Overall"
        />
        <Line
          type="monotone"
          dataKey="reading"
          stroke="#3b82f6"
          strokeWidth={2}
          dot={{ r: 4, strokeWidth: 2 }}
          name="Reading"
        />
        <Line
          type="monotone"
          dataKey="writing"
          stroke="#10b981"
          strokeWidth={2}
          dot={{ r: 4, strokeWidth: 2 }}
          name="Writing"
        />
        <Line
          type="monotone"
          dataKey="listening"
          stroke="#8b5cf6"
          strokeWidth={2}
          dot={{ r: 4, strokeWidth: 2 }}
          name="Listening"
        />
        <Line
          type="monotone"
          dataKey="speaking"
          stroke="#f97316"
          strokeWidth={2}
          dot={{ r: 4, strokeWidth: 2 }}
          name="Speaking"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
