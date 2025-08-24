"use client"

import { Pie, PieChart, ResponsiveContainer, Tooltip, Cell, Legend } from "recharts"

const data = [
  { name: "Completed", value: 78 },
  { name: "In Progress", value: 15 },
  { name: "Not Started", value: 7 },
]

const COLORS = ["hsl(var(--primary))", "#f59e0b", "#ef4444"]

export function CompletionRateChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--background))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "6px",
          }}
          formatter={(value) => [`${value}%`, "Percentage"]}
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}
