import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function UpcomingClasses() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Class</TableHead>
          <TableHead>Teacher</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Room</TableHead>
          <TableHead>Students</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {upcomingClasses.map((classItem) => (
          <TableRow key={classItem.id}>
            <TableCell className="font-medium">{classItem.name}</TableCell>
            <TableCell>{classItem.teacher}</TableCell>
            <TableCell>{classItem.time}</TableCell>
            <TableCell>{classItem.room}</TableCell>
            <TableCell>{classItem.students}</TableCell>
            <TableCell className="text-right">
              <Badge variant={classItem.status === "Confirmed" ? "default" : "outline"}>{classItem.status}</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

const upcomingClasses = [
  {
    id: 1,
    name: "IELTS Advanced - Group A",
    teacher: "Dr. Emily Chen",
    time: "Today, 9:00-11:00",
    room: "Room 101",
    students: 15,
    status: "Confirmed",
  },
  {
    id: 2,
    name: "IELTS Intermediate - Group B",
    teacher: "Prof. Michael Brown",
    time: "Today, 14:00-16:30",
    room: "Room 203",
    students: 18,
    status: "Confirmed",
  },
  {
    id: 3,
    name: "IELTS Speaking Intensive",
    teacher: "James Wilson",
    time: "Tomorrow, 10:00-13:00",
    room: "Room 105",
    students: 10,
    status: "Pending",
  },
  {
    id: 4,
    name: "IELTS Beginner - Group C",
    teacher: "Sarah Johnson",
    time: "Tomorrow, 18:00-20:00",
    room: "Room 302",
    students: 12,
    status: "Confirmed",
  },
]
