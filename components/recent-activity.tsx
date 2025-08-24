import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9 mr-3">
            <AvatarImage src={activity.avatar || "/placeholder.svg"} alt={activity.name} />
            <AvatarFallback>{activity.initials}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">{activity.name}</p>
            <p className="text-sm text-muted-foreground">{activity.action}</p>
          </div>
          <div className="ml-auto text-sm text-muted-foreground">{activity.time}</div>
        </div>
      ))}
    </div>
  )
}

const activities = [
  {
    name: "Dr. Emily Chen",
    initials: "EC",
    avatar: "/placeholder-user.jpg",
    action: "Created a new reading exercise",
    time: "2 mins ago",
  },
  {
    name: "Prof. Michael Brown",
    initials: "MB",
    avatar: "/placeholder-user.jpg",
    action: "Added 3 students to IELTS Advanced",
    time: "15 mins ago",
  },
  {
    name: "Sarah Johnson",
    initials: "SJ",
    avatar: "/placeholder-user.jpg",
    action: "Graded 12 writing assignments",
    time: "3 hours ago",
  },
  {
    name: "James Wilson",
    initials: "JW",
    avatar: "/placeholder-user.jpg",
    action: "Created a new speaking class",
    time: "5 hours ago",
  },
]
