"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Download, Calendar } from "lucide-react"
import { ScoreDistributionChart } from "@/components/analytics/score-distribution-chart"
import { AttendanceChart } from "@/components/analytics/attendance-chart"
import { ProgressChart } from "@/components/analytics/progress-chart"
import { CompletionRateChart } from "@/components/analytics/completion-rate-chart"
import { PerformanceTable } from "@/components/analytics/performance-table"

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">Track student performance and center metrics</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Select defaultValue="last30days">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last7days">Last 7 days</SelectItem>
              <SelectItem value="last30days">Last 30 days</SelectItem>
              <SelectItem value="last3months">Last 3 months</SelectItem>
              <SelectItem value="last6months">Last 6 months</SelectItem>
              <SelectItem value="lastyear">Last year</SelectItem>
              <SelectItem value="custom">Custom range</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Calendar className="h-4 w-4" />
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average IELTS Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6.8</div>
            <p className="text-xs text-muted-foreground">+0.3 from previous period</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Class Attendance Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">+2% from previous period</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Exercise Completion</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">+5% from previous period</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Target Achievement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <p className="text-xs text-muted-foreground">+12% from previous period</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview">
        <TabsList className="overflow-x-auto pb-1">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="scores">Score Analysis</TabsTrigger>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="progress">Progress Tracking</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Score Distribution</CardTitle>
                <CardDescription>IELTS score distribution across all students</CardDescription>
              </CardHeader>
              <CardContent>
                <ScoreDistributionChart />
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Attendance Trends</CardTitle>
                <CardDescription>Class attendance over time</CardDescription>
              </CardHeader>
              <CardContent>
                <AttendanceChart />
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Top Performing Students</CardTitle>
              <CardDescription>Students with the highest improvement</CardDescription>
            </CardHeader>
            <CardContent>
              <PerformanceTable />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scores" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Score Analysis</CardTitle>
              <CardDescription>Detailed breakdown of student scores by skill area</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <div className="flex items-center justify-center h-full">
                <p className="text-muted-foreground">Detailed score analysis charts will be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="attendance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Tracking</CardTitle>
              <CardDescription>Detailed attendance records by class and student</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <div className="flex items-center justify-center h-full">
                <p className="text-muted-foreground">Detailed attendance tracking data will be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="progress" className="space-y-4">
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Student Progress</CardTitle>
                <CardDescription>Average score improvement over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ProgressChart />
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Exercise Completion Rate</CardTitle>
                <CardDescription>Percentage of assigned exercises completed</CardDescription>
              </CardHeader>
              <CardContent>
                <CompletionRateChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
