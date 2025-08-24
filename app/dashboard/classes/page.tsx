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
import { Calendar, ChevronDown, MoreHorizontal, Plus, Search, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AddClassDialog } from "@/components/add-class-dialog"

export default function ClassesPage() {
  const [isAddClassOpen, setIsAddClassOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Classes</h1>
          <p className="text-muted-foreground">Manage your IELTS classes and schedules</p>
        </div>
        <Button onClick={() => setIsAddClassOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Create Class
        </Button>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Classes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">18 active, 6 completed</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Students Enrolled</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245</div>
            <p className="text-xs text-muted-foreground">Across all classes</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Class Size</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14</div>
            <p className="text-xs text-muted-foreground">Students per class</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Class Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search classes..." className="pl-8 w-full sm:w-[250px] md:w-[300px]" />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <ChevronDown className="ml-2 h-4 w-4" />
                  Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Status</DropdownMenuItem>
                <DropdownMenuItem>Level</DropdownMenuItem>
                <DropdownMenuItem>Teacher</DropdownMenuItem>
                <DropdownMenuItem>Start Date</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="rounded-md border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Class Name</TableHead>
                  <TableHead>Level</TableHead>
                  <TableHead>Teacher</TableHead>
                  <TableHead>Students</TableHead>
                  <TableHead>Schedule</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {classes.map((classItem) => (
                  <TableRow key={classItem.id}>
                    <TableCell className="font-medium">{classItem.name}</TableCell>
                    <TableCell>{classItem.level}</TableCell>
                    <TableCell>{classItem.teacher}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{classItem.students}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{classItem.schedule}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          classItem.status === "Active"
                            ? "default"
                            : classItem.status === "Completed"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {classItem.status}
                      </Badge>
                    </TableCell>
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
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit Class</DropdownMenuItem>
                          <DropdownMenuItem>Manage Students</DropdownMenuItem>
                          <DropdownMenuItem>View Schedule</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Mark as Completed</DropdownMenuItem>
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

      <AddClassDialog open={isAddClassOpen} onOpenChange={setIsAddClassOpen} />
    </div>
  )
}

// Sample data
const classes = [
  {
    id: "CLS001",
    name: "IELTS Advanced - Group A",
    level: "Advanced",
    teacher: "Dr. Emily Chen",
    students: 15,
    schedule: "Mon, Wed, Fri 9:00-11:00",
    status: "Active",
  },
  {
    id: "CLS002",
    name: "IELTS Intermediate - Group B",
    level: "Intermediate",
    teacher: "Prof. Michael Brown",
    students: 18,
    schedule: "Tue, Thu 14:00-16:30",
    status: "Active",
  },
  {
    id: "CLS003",
    name: "IELTS Beginner - Group C",
    level: "Beginner",
    teacher: "Sarah Johnson",
    students: 12,
    schedule: "Mon, Wed 18:00-20:00",
    status: "Active",
  },
  {
    id: "CLS004",
    name: "IELTS Speaking Intensive",
    level: "Mixed",
    teacher: "James Wilson",
    students: 10,
    schedule: "Sat 10:00-13:00",
    status: "Active",
  },
  {
    id: "CLS005",
    name: "IELTS Writing Workshop",
    level: "Advanced",
    teacher: "Dr. Emily Chen",
    students: 8,
    schedule: "Fri 15:00-17:00",
    status: "Completed",
  },
]
