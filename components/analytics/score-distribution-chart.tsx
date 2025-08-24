"use client"

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { score: "4.0", count: 5 },
  { score: "4.5", count: 8 },
  { score: "5.0", count: 12 },
  { score: "5.5", count: 18 },
  { score: "6.0", count: 25 },
  { score: "6.5", count: 35 },
  { score: "7.0", count: 28 },
  { score: "7.5", count: 20 },
  { score: "8.0", count: 15 },
  { score: "8.5", count: 7 },
  { score: "9.0", count: 3 },
]

export function ScoreDistributionChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="score" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--background))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "6px",
          }}
          formatter={(value) => [`${value} students`, "Count"]}
          labelFormatter={(label) => `Score: ${label}`}
        />
        <Bar dataKey="count" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
