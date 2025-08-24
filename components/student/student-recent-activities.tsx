import { BookOpen, FileText, Headphones, MessageSquare } from "lucide-react"

export function StudentRecentActivities() {
  return (
    <div className="space-y-8">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-center">
          <div className="rounded-md bg-primary/10 p-2 mr-3">
            {activity.type === "Reading" && <BookOpen className="h-4 w-4 text-blue-500" />}
            {activity.type === "Writing" && <FileText className="h-4 w-4 text-green-500" />}
            {activity.type === "Listening" && <Headphones className="h-4 w-4 text-purple-500" />}
            {activity.type === "Speaking" && <MessageSquare className="h-4 w-4 text-orange-500" />}
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">{activity.action}</p>
            <p className="text-sm text-muted-foreground">{activity.detail}</p>
          </div>
          <div className="ml-auto text-sm text-muted-foreground">{activity.time}</div>
        </div>
      ))}
    </div>
  )
}

const activities = [
  {
    type: "Reading",
    action: "Completed Reading Exercise",
    detail: "Academic Reading - Technology and Society",
    time: "2 hours ago",
  },
  {
    type: "Writing",
    action: "Submitted Writing Task",
    detail: "Task 2 - Opinion Essay on Environmental Issues",
    time: "Yesterday",
  },
  {
    type: "Listening",
    action: "Started Listening Practice",
    detail: "Section 3 - Academic Discussion",
    time: "Yesterday",
  },
  {
    type: "Speaking",
    action: "Attended Speaking Session",
    detail: "One-on-one practice with instructor",
    time: "2 days ago",
  },
]
