import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

export function StudentTestHistory() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Test Date</TableHead>
          <TableHead>Test Name</TableHead>
          <TableHead>Overall</TableHead>
          <TableHead>Reading</TableHead>
          <TableHead>Writing</TableHead>
          <TableHead>Listening</TableHead>
          <TableHead>Speaking</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {testHistory.map((test, index) => (
          <TableRow key={index}>
            <TableCell>{test.date}</TableCell>
            <TableCell>{test.name}</TableCell>
            <TableCell>
              <Badge variant={getBadgeVariant(test.overall)}>{test.overall}</Badge>
            </TableCell>
            <TableCell>{test.reading}</TableCell>
            <TableCell>{test.writing}</TableCell>
            <TableCell>{test.listening}</TableCell>
            <TableCell>{test.speaking}</TableCell>
            <TableCell className="text-right">
              <Button size="sm" variant="outline" asChild>
                <Link href={`/student/practice-tests/${test.id}/results`}>View</Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

function getBadgeVariant(score) {
  if (score >= 7.0) return "default"
  if (score >= 6.0) return "secondary"
  return "outline"
}

const testHistory = [
  {
    id: "test1",
    date: "May 10, 2023",
    name: "IELTS Academic Practice Test 3",
    overall: 6.5,
    reading: 7.0,
    writing: 6.0,
    listening: 7.0,
    speaking: 6.5,
  },
  {
    id: "test2",
    date: "Apr 20, 2023",
    name: "IELTS Academic Practice Test 2",
    overall: 6.5,
    reading: 7.0,
    writing: 6.0,
    listening: 7.0,
    speaking: 6.5,
  },
  {
    id: "test3",
    date: "Apr 01, 2023",
    name: "IELTS Academic Practice Test 1",
    overall: 6.0,
    reading: 6.5,
    writing: 5.5,
    listening: 6.5,
    speaking: 6.0,
  },
  {
    id: "test4",
    date: "Mar 05, 2023",
    name: "IELTS General Training Practice Test",
    overall: 6.0,
    reading: 6.0,
    writing: 5.5,
    listening: 6.5,
    speaking: 6.0,
  },
  {
    id: "test5",
    date: "Feb 10, 2023",
    name: "IELTS Diagnostic Test",
    overall: 5.5,
    reading: 5.5,
    writing: 5.0,
    listening: 6.0,
    speaking: 6.0,
  },
]
