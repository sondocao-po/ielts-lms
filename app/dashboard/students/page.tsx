"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, Download, MoreHorizontal, Plus, Search, SlidersHorizontal } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AddStudentDialog } from "@/components/add-student-dialog"

export default function StudentsPage() {
  const [isAddStudentOpen, setIsAddStudentOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Students</h1>
          <p className="text-muted-foreground">Manage your students and their progress</p>
        </div>
        <Button onClick={() => setIsAddStudentOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Student
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Student Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search students..."
                  className="pl-8 w-full sm:w-[250px] md:w-[300px]"
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    Filter
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Status</DropdownMenuItem>
                  <DropdownMenuItem>Class</DropdownMenuItem>
                  <DropdownMenuItem>Score Range</DropdownMenuItem>
                  <DropdownMenuItem>Enrollment Date</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Button variant="outline" size="sm" className="sm:self-end">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>

          <div className="rounded-md border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>ID</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Current Class</TableHead>
                  <TableHead>Latest Score</TableHead>
                  <TableHead>Enrollment Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell className="font-medium">{student.name}</TableCell>
                    <TableCell>{student.id}</TableCell>
                    <TableCell>
                      <Badge variant={student.status === "Active" ? "default" : "outline"}>{student.status}</Badge>
                    </TableCell>
                    <TableCell>{student.currentClass}</TableCell>
                    <TableCell>{student.latestScore}</TableCell>
                    <TableCell>{student.enrollmentDate}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>View Profile</DropdownMenuItem>
                          <DropdownMenuItem>Edit Details</DropdownMenuItem>
                          <DropdownMenuItem>View Progress</DropdownMenuItem>
                          <DropdownMenuItem>Change Class</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">Deactivate</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <AddStudentDialog open={isAddStudentOpen} onOpenChange={setIsAddStudentOpen} />
    </div>
  )
}

// Sample data
const students = [
  {
    id: "STU001",
    name: "Alex Johnson",
    status: "Active",
    currentClass: "IELTS Advanced",
    latestScore: "7.0",
    enrollmentDate: "2023-01-15",
  },
  {
    id: "STU002",
    name: "Maria Garcia",
    status: "Active",
    currentClass: "IELTS Intermediate",
    latestScore: "6.5",
    enrollmentDate: "2023-02-03",
  },
  {
    id: "STU003",
    name: "James Wilson",
    status: "On Hold",
    currentClass: "IELTS Advanced",
    latestScore: "7.5",
    enrollmentDate: "2022-11-20",
  },
  {
    id: "STU004",
    name: "Sarah Ahmed",
    status: "Active",
    currentClass: "IELTS Beginner",
    latestScore: "5.5",
    enrollmentDate: "2023-03-10",
  },
  {
    id: "STU005",
    name: "David Lee",
    status: "Active",
    currentClass: "IELTS Intermediate",
    latestScore: "6.0",
    enrollmentDate: "2023-02-15",
  },
]
