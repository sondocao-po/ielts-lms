import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, BookOpen, Calendar, Clock, FileText, Headphones, MessageSquare } from "lucide-react"
import { StudentProgressChart } from "@/components/student/student-progress-chart"
import { StudentUpcomingClasses } from "@/components/student/student-upcoming-classes"
import { StudentRecentActivities } from "@/components/student/student-recent-activities"
import Link from "next/link"

export default function StudentDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Student Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, Alex! Track your progress and continue your IELTS journey.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Score</CardTitle>
            <Badge>Latest Test</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6.5</div>
            <p className="text-xs text-muted-foreground">+0.5 from previous test</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Exercises</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24/30</div>
            <p className="text-xs text-muted-foreground">80% completion rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Class Attendance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">95%</div>
            <p className="text-xs text-muted-foreground">19 out of 20 classes</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42h</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-6">
        <Card className="col-span-6 md:col-span-4">
          <CardHeader>
            <CardTitle>Your Progress</CardTitle>
            <CardDescription>Track your IELTS score improvement over time</CardDescription>
          </CardHeader>
          <CardContent>
            <StudentProgressChart />
          </CardContent>
        </Card>
        <Card className="col-span-6 md:col-span-2">
          <CardHeader>
            <CardTitle>Skill Breakdown</CardTitle>
            <CardDescription>Your latest test scores by skill</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <BookOpen className="mr-2 h-4 w-4 text-blue-500" />
                  <span>Reading</span>
                </div>
                <Badge variant="outline">6.5</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="mr-2 h-4 w-4 text-green-500" />
                  <span>Writing</span>
                </div>
                <Badge variant="outline">6.0</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Headphones className="mr-2 h-4 w-4 text-purple-500" />
                  <span>Listening</span>
                </div>
                <Badge variant="outline">7.0</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <MessageSquare className="mr-2 h-4 w-4 text-orange-500" />
                  <span>Speaking</span>
                </div>
                <Badge variant="outline">6.5</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="upcoming">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Classes</TabsTrigger>
          <TabsTrigger value="activities">Recent Activities</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Upcoming Classes</CardTitle>
                <CardDescription>Your scheduled classes for the next 7 days</CardDescription>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href="/student/schedule">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <StudentUpcomingClasses />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="activities">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>Your recent learning activities</CardDescription>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href="/student/activities">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <StudentRecentActivities />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recommended Practice</CardTitle>
            <CardDescription>Exercises tailored to improve your skills</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recommendedPractice.map((practice, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="rounded-md bg-primary/10 p-2">
                    {practice.type === "Reading" && <BookOpen className="h-4 w-4 text-blue-500" />}
                    {practice.type === "Writing" && <FileText className="h-4 w-4 text-green-500" />}
                    {practice.type === "Listening" && <Headphones className="h-4 w-4 text-purple-500" />}
                    {practice.type === "Speaking" && <MessageSquare className="h-4 w-4 text-orange-500" />}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">{practice.title}</p>
                    <p className="text-sm text-muted-foreground">{practice.description}</p>
                    <div className="flex items-center pt-2">
                      <Clock className="mr-1 h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{practice.duration}</span>
                      <Badge variant="outline" className="ml-2">
                        {practice.difficulty}
                      </Badge>
                    </div>
                  </div>
                  <Button size="sm" asChild>
                    <Link href={`/student/materials/${practice.id}`}>Start</Link>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
            <CardDescription>Assignments and tests due soon</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingDeadlines.map((deadline, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="rounded-md bg-primary/10 p-2">
                    {deadline.type === "Assignment" && <FileText className="h-4 w-4 text-primary" />}
                    {deadline.type === "Test" && <BookOpen className="h-4 w-4 text-primary" />}
                    {deadline.type === "Class" && <Calendar className="h-4 w-4 text-primary" />}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">{deadline.title}</p>
                    <p className="text-sm text-muted-foreground">{deadline.description}</p>
                    <div className="flex items-center pt-2">
                      <Calendar className="mr-1 h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{deadline.dueDate}</span>
                      <Badge
                        className="ml-2"
                        variant={
                          deadline.status === "Urgent"
                            ? "destructive"
                            : deadline.status === "Upcoming"
                              ? "outline"
                              : "default"
                        }
                      >
                        {deadline.status}
                      </Badge>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" asChild>
                    <Link href={`/student/assignments/${deadline.id}`}>View</Link>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

const recommendedPractice = [
  {
    id: "rp1",
    type: "Writing",
    title: "Task 1 - Bar Chart Analysis",
    description: "Practice describing bar charts for IELTS Writing Task 1",
    duration: "30 minutes",
    difficulty: "Medium",
  },
  {
    id: "rp2",
    type: "Listening",
    title: "Section 3 - Academic Discussion",
    description: "Practice listening to academic discussions between students",
    duration: "25 minutes",
    difficulty: "Hard",
  },
  {
    id: "rp3",
    type: "Reading",
    title: "Matching Headings Exercise",
    description: "Practice matching headings to paragraphs in academic texts",
    duration: "20 minutes",
    difficulty: "Medium",
  },
]

const upcomingDeadlines = [
  {
    id: "dl1",
    type: "Assignment",
    title: "Writing Task 2 Essay",
    description: "Submit your essay on environmental issues",
    dueDate: "Tomorrow, 11:59 PM",
    status: "Urgent",
  },
  {
    id: "dl2",
    type: "Test",
    title: "Mock IELTS Test",
    description: "Complete full-length practice test",
    dueDate: "May 25, 2023",
    status: "Upcoming",
  },
  {
    id: "dl3",
    type: "Class",
    title: "Speaking Practice Session",
    description: "One-on-one speaking practice with instructor",
    dueDate: "May 27, 2023, 3:00 PM",
    status: "Scheduled",
  },
]
