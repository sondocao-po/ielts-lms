import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function PerformanceTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Student</TableHead>
          <TableHead>Initial Score</TableHead>
          <TableHead>Current Score</TableHead>
          <TableHead>Improvement</TableHead>
          <TableHead>Class</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {topStudents.map((student) => (
          <TableRow key={student.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                  <AvatarFallback>{student.initials}</AvatarFallback>
                </Avatar>
                <span className="font-medium">{student.name}</span>
              </div>
            </TableCell>
            <TableCell>{student.initialScore}</TableCell>
            <TableCell>{student.currentScore}</TableCell>
            <TableCell className="text-green-600">+{student.improvement}</TableCell>
            <TableCell>{student.class}</TableCell>
            <TableCell>
              <Badge variant={student.status === "Active" ? "default" : "outline"}>{student.status}</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

const topStudents = [
  {
    id: 1,
    name: "Sarah Ahmed",
    initials: "SA",
    avatar: "/placeholder.svg",
    initialScore: "5.5",
    currentScore: "7.0",
    improvement: "1.5",
    class: "IELTS Advanced",
    status: "Active",
  },
  {
    id: 2,
    name: "David Lee",
    initials: "DL",
    avatar: "/placeholder.svg",
    initialScore: "6.0",
    currentScore: "7.5",
    improvement: "1.5",
    class: "IELTS Advanced",
    status: "Active",
  },
  {
    id: 3,
    name: "Maria Garcia",
    initials: "MG",
    avatar: "/placeholder.svg",
    initialScore: "5.0",
    currentScore: "6.5",
    improvement: "1.5",
    class: "IELTS Intermediate",
    status: "Active",
  },
  {
    id: 4,
    name: "James Wilson",
    initials: "JW",
    avatar: "/placeholder.svg",
    initialScore: "6.5",
    currentScore: "8.0",
    improvement: "1.5",
    class: "IELTS Advanced",
    status: "Active",
  },
  {
    id: 5,
    name: "Aisha Khan",
    initials: "AK",
    avatar: "/placeholder.svg",
    initialScore: "5.5",
    currentScore: "7.0",
    improvement: "1.5",
    class: "IELTS Intermediate",
    status: "Active",
  },
]
