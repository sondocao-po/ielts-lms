import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Search, MessageSquare, TrendingUp, TrendingDown, Calendar, BookOpen, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TeacherStudents() {
  const students = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      class: "IELTS Prep - Intermediate",
      currentScore: 7.2,
      targetScore: 8.0,
      progress: 75,
      lastActivity: "2 hours ago",
      trend: "up",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "active",
    },
    {
      id: 2,
      name: "Mike Chen",
      email: "mike.chen@email.com",
      class: "Speaking Practice",
      currentScore: 6.8,
      targetScore: 7.5,
      progress: 60,
      lastActivity: "1 day ago",
      trend: "up",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "active",
    },
    {
      id: 3,
      name: "Emma Wilson",
      email: "emma.w@email.com",
      class: "Writing Workshop",
      currentScore: 8.1,
      targetScore: 8.5,
      progress: 90,
      lastActivity: "3 hours ago",
      trend: "up",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "active",
    },
    {
      id: 4,
      name: "David Rodriguez",
      email: "david.r@email.com",
      class: "IELTS Prep - Beginner",
      currentScore: 5.9,
      targetScore: 7.0,
      progress: 45,
      lastActivity: "5 days ago",
      trend: "down",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "inactive",
    },
    {
      id: 5,
      name: "Lisa Park",
      email: "lisa.park@email.com",
      class: "IELTS Prep - Intermediate",
      currentScore: 7.5,
      targetScore: 8.0,
      progress: 85,
      lastActivity: "1 hour ago",
      trend: "up",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "active",
    },
    {
      id: 6,
      name: "Ahmed Hassan",
      email: "ahmed.h@email.com",
      class: "Speaking Practice",
      currentScore: 6.5,
      targetScore: 7.5,
      progress: 55,
      lastActivity: "2 days ago",
      trend: "up",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "active",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">My Students</h1>
          <p className="text-muted-foreground mt-1">Track progress and manage your students</p>
        </div>
        <div className="mt-4 sm:mt-0 flex gap-2">
          <Button variant="outline">
            <MessageSquare className="mr-2 h-4 w-4" />
            Message All
          </Button>
          <Button>
            <BookOpen className="mr-2 h-4 w-4" />
            Assign Task
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input placeholder="Search students..." className="pl-10" />
        </div>
        <Select>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by class" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Classes</SelectItem>
            <SelectItem value="intermediate">IELTS Prep - Intermediate</SelectItem>
            <SelectItem value="beginner">IELTS Prep - Beginner</SelectItem>
            <SelectItem value="speaking">Speaking Practice</SelectItem>
            <SelectItem value="writing">Writing Workshop</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Students</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Students Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {students.map((student) => (
          <Card key={student.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                    <AvatarFallback>
                      {student.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{student.name}</CardTitle>
                    <CardDescription>{student.email}</CardDescription>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Profile</DropdownMenuItem>
                    <DropdownMenuItem>Send Message</DropdownMenuItem>
                    <DropdownMenuItem>View Progress</DropdownMenuItem>
                    <DropdownMenuItem>Assign Task</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Class:</span>
                  <Badge variant="secondary">{student.class}</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Current Score:</span>
                  <div className="flex items-center">
                    <span className="font-medium">{student.currentScore}/9.0</span>
                    {student.trend === "up" ? (
                      <TrendingUp className="h-4 w-4 ml-1 text-green-500" />
                    ) : (
                      <TrendingDown className="h-4 w-4 ml-1 text-red-500" />
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Target Score:</span>
                  <span>{student.targetScore}/9.0</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress to Target</span>
                  <span>{student.progress}%</span>
                </div>
                <Progress value={student.progress} className="h-2" />
              </div>

              <div className="flex items-center justify-between pt-2 border-t">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  {student.lastActivity}
                </div>
                <Badge variant={student.status === "active" ? "default" : "secondary"}>{student.status}</Badge>
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  Message
                </Button>
                <Button size="sm" className="flex-1">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{students.length}</div>
            <p className="text-xs text-muted-foreground">
              {students.filter((s) => s.status === "active").length} active
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {(students.reduce((acc, s) => acc + s.currentScore, 0) / students.length).toFixed(1)}
            </div>
            <p className="text-xs text-muted-foreground">Out of 9.0</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">On Track</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{students.filter((s) => s.progress >= 70).length}</div>
            <p className="text-xs text-muted-foreground">Students above 70%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Need Attention</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {students.filter((s) => s.progress < 50 || s.status === "inactive").length}
            </div>
            <p className="text-xs text-muted-foreground">Require follow-up</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
