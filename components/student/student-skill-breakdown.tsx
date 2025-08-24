"use client"

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const currentData = [
  { skill: "Reading", score: 7.0 },
  { skill: "Writing", score: 6.0 },
  { skill: "Listening", score: 7.0 },
  { skill: "Speaking", score: 6.5 },
]

const historyData = [
  {
    date: "Jan 15",
    reading: 5.0,
    writing: 5.0,
    listening: 6.0,
    speaking: 6.0,
  },
  {
    date: "Feb 10",
    reading: 5.5,
    writing: 5.0,
    listening: 6.0,
    speaking: 6.0,
  },
  {
    date: "Mar 05",
    reading: 6.0,
    writing: 5.5,
    listening: 6.5,
    speaking: 6.0,
  },
  {
    date: "Apr 01",
    reading: 6.5,
    writing: 5.5,
    listening: 6.5,
    speaking: 6.0,
  },
  {
    date: "Apr 20",
    reading: 7.0,
    writing: 6.0,
    listening: 7.0,
    speaking: 6.5,
  },
]

export function StudentSkillBreakdown() {
  return (
    <Tabs defaultValue="current">
      <TabsList className="mb-4">
        <TabsTrigger value="current">Current Scores</TabsTrigger>
        <TabsTrigger value="history">Score History</TabsTrigger>
      </TabsList>
      <TabsContent value="current">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={currentData}>
            <XAxis dataKey="skill" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              domain={[0, 9]}
              ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--background))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "6px",
              }}
              formatter={(value) => [`${value}`, "Score"]}
            />
            <Bar dataKey="score" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} barSize={60} />
          </BarChart>
        </ResponsiveContainer>
      </TabsContent>
      <TabsContent value="history">
        <div className="grid gap-4 grid-cols-2">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Reading</CardTitle>
              <CardDescription>Score history</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={150}>
                <BarChart data={historyData}>
                  <XAxis dataKey="date" stroke="#888888" fontSize={10} tickLine={false} axisLine={false} />
                  <YAxis
                    stroke="#888888"
                    fontSize={10}
                    tickLine={false}
                    axisLine={false}
                    domain={[0, 9]}
                    ticks={[0, 3, 6, 9]}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "6px",
                    }}
                  />
                  <Bar dataKey="reading" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Writing</CardTitle>
              <CardDescription>Score history</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={150}>
                <BarChart data={historyData}>
                  <XAxis dataKey="date" stroke="#888888" fontSize={10} tickLine={false} axisLine={false} />
                  <YAxis
                    stroke="#888888"
                    fontSize={10}
                    tickLine={false}
                    axisLine={false}
                    domain={[0, 9]}
                    ticks={[0, 3, 6, 9]}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "6px",
                    }}
                  />
                  <Bar dataKey="writing" fill="#10b981" radius={[4, 4, 0, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Listening</CardTitle>
              <CardDescription>Score history</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={150}>
                <BarChart data={historyData}>
                  <XAxis dataKey="date" stroke="#888888" fontSize={10} tickLine={false} axisLine={false} />
                  <YAxis
                    stroke="#888888"
                    fontSize={10}
                    tickLine={false}
                    axisLine={false}
                    domain={[0, 9]}
                    ticks={[0, 3, 6, 9]}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "6px",
                    }}
                  />
                  <Bar dataKey="listening" fill="#8b5cf6" radius={[4, 4, 0, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Speaking</CardTitle>
              <CardDescription>Score history</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={150}>
                <BarChart data={historyData}>
                  <XAxis dataKey="date" stroke="#888888" fontSize={10} tickLine={false} axisLine={false} />
                  <YAxis
                    stroke="#888888"
                    fontSize={10}
                    tickLine={false}
                    axisLine={false}
                    domain={[0, 9]}
                    ticks={[0, 3, 6, 9]}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "6px",
                    }}
                  />
                  <Bar dataKey="speaking" fill="#f97316" radius={[4, 4, 0, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  )
}
