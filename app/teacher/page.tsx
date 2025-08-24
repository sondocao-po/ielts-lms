import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  BookOpen,
  Calendar,
  Clock,
  GraduationCap,
  MessageSquare,
  TrendingUp,
  Users,
  CheckCircle,
  AlertCircle,
  FileText,
} from "lucide-react"

export default function TeacherDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Welcome back, John!</h1>
          <p className="text-muted-foreground mt-1">Here's what's happening with your classes today.</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <Button>
            <Calendar className="mr-2 h-4 w-4" />
            View Schedule
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-muted-foreground">+12 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Classes</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">3 classes today</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Grades</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">Due this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7.2</div>
            <p className="text-xs text-muted-foreground">+0.3 from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Today's Schedule */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Today's Schedule
            </CardTitle>
            <CardDescription>Your classes for today</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <p className="font-medium">IELTS Prep - Intermediate</p>
                  <p className="text-sm text-muted-foreground">Room 201 • 15 students</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">9:00 AM</p>
                <Badge variant="secondary">In Progress</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div>
                  <p className="font-medium">Speaking Practice</p>
                  <p className="text-sm text-muted-foreground">Room 105 • 8 students</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">2:00 PM</p>
                <Badge variant="outline">Upcoming</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div>
                  <p className="font-medium">Writing Workshop</p>
                  <p className="text-sm text-muted-foreground">Room 303 • 12 students</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">4:30 PM</p>
                <Badge variant="outline">Upcoming</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>Latest updates from your classes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium">Sarah Johnson submitted Writing Task 1</p>
                <p className="text-xs text-muted-foreground">IELTS Prep - Intermediate • 2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MessageSquare className="h-5 w-5 text-blue-500 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium">New message from Mike Chen</p>
                <p className="text-xs text-muted-foreground">Question about Speaking Part 2 • 3 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium">Assignment deadline reminder</p>
                <p className="text-xs text-muted-foreground">Reading Task due tomorrow • 5 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium">Emma Wilson completed Listening Test</p>
                <p className="text-xs text-muted-foreground">Score: 8.5/9.0 • 6 hours ago</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Class Performance Overview */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Class Performance Overview</CardTitle>
            <CardDescription>Average scores by skill for your classes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Listening</span>
                <span>7.8/9.0</span>
              </div>
              <Progress value={87} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Reading</span>
                <span>7.2/9.0</span>
              </div>
              <Progress value={80} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Writing</span>
                <span>6.8/9.0</span>
              </div>
              <Progress value={76} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Speaking</span>
                <span>7.1/9.0</span>
              </div>
              <Progress value={79} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <BookOpen className="mr-2 h-4 w-4" />
              Create Lesson Plan
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Grade Assignments
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <MessageSquare className="mr-2 h-4 w-4" />
              Message Students
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Users className="mr-2 h-4 w-4" />
              View Student Progress
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
