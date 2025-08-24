import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const StudentSchedulePage = () => {
  // Dummy data for the schedule
  const scheduleData = [
    { day: "Monday", time: "9:00 AM", course: "Introduction to React", instructor: "John Doe" },
    { day: "Tuesday", time: "10:00 AM", course: "Data Structures", instructor: "Jane Smith" },
    { day: "Wednesday", time: "11:00 AM", course: "Algorithms", instructor: "David Johnson" },
    { day: "Thursday", time: "2:00 PM", course: "Calculus", instructor: "Emily Brown" },
    { day: "Friday", time: "1:00 PM", course: "Linear Algebra", instructor: "Michael Wilson" },
  ]

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Student Schedule</h1>

      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableCaption>A list of your courses for the week.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Day</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Course</TableHead>
              <TableHead>Instructor</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {scheduleData.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.day}</TableCell>
                <TableCell>{item.time}</TableCell>
                <TableCell>{item.course}</TableCell>
                <TableCell>{item.instructor}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}>{scheduleData.length} Courses</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  )
}

export default StudentSchedulePage
