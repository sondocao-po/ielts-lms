"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", reading: 5.8, writing: 5.5, listening: 6.0, speaking: 5.7 },
  { month: "Feb", reading: 5.9, writing: 5.6, listening: 6.1, speaking: 5.8 },
  { month: "Mar", reading: 6.1, writing: 5.8, listening: 6.3, speaking: 6.0 },
  { month: "Apr", reading: 6.3, writing: 6.0, listening: 6.5, speaking: 6.2 },
  { month: "May", reading: 6.5, writing: 6.2, listening: 6.7, speaking: 6.4 },
  { month: "Jun", reading: 6.7, writing: 6.4, listening: 6.9, speaking: 6.6 },
]

export function ProgressChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} domain={[5, 7]} tickCount={5} />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--background))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "6px",
          }}
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
