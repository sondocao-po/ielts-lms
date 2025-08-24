import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"
import Link from "next/link"

export function StudentUpcomingClasses() {
  return (
    <div className="space-y-4">
      {upcomingClasses.map((classItem, index) => (
        <div key={index} className="flex items-start space-x-4 p-4 rounded-lg border">
          <div className="rounded-md bg-primary/10 p-2">
            <Calendar className="h-4 w-4 text-primary" />
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <p className="font-medium">{classItem.title}</p>
              <Badge variant={classItem.status === "Confirmed" ? "default" : "outline"}>{classItem.status}</Badge>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="mr-1 h-4 w-4" />
              <span>{classItem.date}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="mr-1 h-4 w-4" />
              <span>{classItem.time}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="mr-1 h-4 w-4" />
              <span>{classItem.location}</span>
            </div>
          </div>
          <Button size="sm" variant="outline" asChild>
            <Link href="/student/schedule">View</Link>
          </Button>
        </div>
      ))}
    </div>
  )
}

const upcomingClasses = [
  {
    title: "IELTS Advanced - Reading Techniques",
    date: "Today",
    time: "9:00 AM - 11:00 AM",
    location: "Room 101",
    status: "Confirmed",
  },
  {
    title: "Writing Task 2 Workshop",
    date: "Tomorrow",
    time: "2:00 PM - 4:00 PM",
    location: "Room 203",
    status: "Confirmed",
  },
  {
    title: "Speaking Practice - Part 2",
    date: "May 25, 2023",
    time: "10:00 AM - 11:30 AM",
    location: "Room 105",
    status: "Pending",
  },
]
