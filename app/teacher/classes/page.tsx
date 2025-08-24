import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Users, Search, Plus, MoreHorizontal, BookOpen, TrendingUp } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function TeacherClasses() {
  const activeClasses = [
    {
      id: 1,
      name: "IELTS Prep - Intermediate",
      level: "Intermediate",
      students: 15,
      room: "Room 201",
      schedule: "Mon, Wed, Fri - 9:00 AM",
      nextClass: "Today, 9:00 AM",
      progress: 65,
      avgScore: 7.2,
      status: "active",
    },
    {
      id: 2,
      name: "Speaking Practice",
      level: "All Levels",
      students: 8,
      room: "Room 105",
      schedule: "Tue, Thu - 2:00 PM",
      nextClass: "Today, 2:00 PM",
      progress: 45,
      avgScore: 7.1,
      status: "active",
    },
    {
      id: 3,
      name: "Writing Workshop",
      level: "Advanced",
      students: 12,
      room: "Room 303",
      schedule: "Mon, Wed - 4:30 PM",
      nextClass: "Today, 4:30 PM",
      progress: 80,
      avgScore: 7.8,
      status: "active",
    },
    {
      id: 4,
      name: "IELTS Prep - Beginner",
      level: "Beginner",
      students: 20,
      room: "Room 102",
      schedule: "Tue, Thu, Sat - 10:00 AM",
      nextClass: "Tomorrow, 10:00 AM",
      progress: 30,
      avgScore: 6.5,
      status: "active",
    },
  ]

  const completedClasses = [
    {
      id: 5,
      name: "IELTS Intensive Course",
      level: "Intermediate",
      students: 18,
      completedDate: "Dec 15, 2023",
      finalAvgScore: 7.5,
      status: "completed",
    },
    {
      id: 6,
      name: "Speaking Masterclass",
      level: "Advanced",
      students: 10,
      completedDate: "Nov 30, 2023",
      finalAvgScore: 8.1,
      status: "completed",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">My Classes</h1>
          <p className="text-muted-foreground mt-1">Manage your IELTS classes and track student progress</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Class
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input placeholder="Search classes..." className="pl-10" />
        </div>
      </div>

      {/* Classes Tabs */}
      <Tabs defaultValue="active" className="space-y-6">
        <TabsList>
          <TabsTrigger value="active">Active Classes ({activeClasses.length})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({completedClasses.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {activeClasses.map((classItem) => (
              <Card key={classItem.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{classItem.name}</CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <Badge variant="secondary" className="mr-2">
                          {classItem.level}
                        </Badge>
                        <Users className="h-4 w-4 mr-1" />
                        {classItem.students} students
                      </CardDescription>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit Class</DropdownMenuItem>
                        <DropdownMenuItem>View Students</DropdownMenuItem>
                        <DropdownMenuItem>Class Analytics</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      {classItem.room}
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2 text-muted-foreground" />
                      Avg: {classItem.avgScore}/9.0
                    </div>
                    <div className="flex items-center col-span-2">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      {classItem.schedule}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Course Progress</span>
                      <span>{classItem.progress}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all"
                        style={{ width: `${classItem.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      Next: {classItem.nextClass}
                    </div>
                    <Button size="sm" variant="outline">
                      <BookOpen className="h-4 w-4 mr-1" />
                      Manage
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {completedClasses.map((classItem) => (
              <Card key={classItem.id}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{classItem.name}</CardTitle>
                  <CardDescription className="flex items-center">
                    <Badge variant="outline" className="mr-2">
                      {classItem.level}
                    </Badge>
                    <Users className="h-4 w-4 mr-1" />
                    {classItem.students} students
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Completed:</span>
                      <span>{classItem.completedDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Final Avg Score:</span>
                      <span className="font-medium">{classItem.finalAvgScore}/9.0</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    View Report
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
