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
import {
  BookOpen,
  ChevronDown,
  Copy,
  Edit,
  FileText,
  Headphones,
  MessageSquare,
  MoreHorizontal,
  Plus,
  Search,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreateExerciseDialog } from "@/components/create-exercise-dialog"

export default function ExercisesPage() {
  const [isCreateExerciseOpen, setIsCreateExerciseOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Exercises</h1>
          <p className="text-muted-foreground">Create and manage IELTS practice exercises</p>
        </div>
        <Button onClick={() => setIsCreateExerciseOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Create Exercise
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <TabsList className="overflow-x-auto pb-1 w-full sm:w-auto">
            <TabsTrigger value="all">All Exercises</TabsTrigger>
            <TabsTrigger value="reading">Reading</TabsTrigger>
            <TabsTrigger value="writing">Writing</TabsTrigger>
            <TabsTrigger value="listening">Listening</TabsTrigger>
            <TabsTrigger value="speaking">Speaking</TabsTrigger>
          </TabsList>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search exercises..."
                className="pl-8 w-full sm:w-[250px] md:w-[300px]"
              />
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
                <DropdownMenuItem>Difficulty</DropdownMenuItem>
                <DropdownMenuItem>Created By</DropdownMenuItem>
                <DropdownMenuItem>Date Created</DropdownMenuItem>
                <DropdownMenuItem>Usage Count</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <TabsContent value="all">
          <Card>
            <CardContent className="pt-6">
              <div className="rounded-md border overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Exercise Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Difficulty</TableHead>
                      <TableHead>Created By</TableHead>
                      <TableHead>Date Created</TableHead>
                      <TableHead>Times Used</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {exercises.map((exercise) => (
                      <TableRow key={exercise.id}>
                        <TableCell className="font-medium">{exercise.name}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            {exercise.type === "Reading" && <BookOpen className="h-4 w-4 text-blue-500" />}
                            {exercise.type === "Writing" && <FileText className="h-4 w-4 text-green-500" />}
                            {exercise.type === "Listening" && <Headphones className="h-4 w-4 text-purple-500" />}
                            {exercise.type === "Speaking" && <MessageSquare className="h-4 w-4 text-orange-500" />}
                            <span>{exercise.type}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              exercise.difficulty === "Easy"
                                ? "outline"
                                : exercise.difficulty === "Medium"
                                  ? "secondary"
                                  : "default"
                            }
                          >
                            {exercise.difficulty}
                          </Badge>
                        </TableCell>
                        <TableCell>{exercise.createdBy}</TableCell>
                        <TableCell>{exercise.dateCreated}</TableCell>
                        <TableCell>{exercise.timesUsed}</TableCell>
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
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit Exercise
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Copy className="mr-2 h-4 w-4" />
                                Duplicate
                              </DropdownMenuItem>
                              <DropdownMenuItem>Preview</DropdownMenuItem>
                              <DropdownMenuItem>Assign to Class</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">Delete Exercise</DropdownMenuItem>
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
        </TabsContent>

        <TabsContent value="reading">
          <Card>
            <CardHeader>
              <CardTitle>Reading Exercises</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Reading-specific exercises will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="writing">
          <Card>
            <CardHeader>
              <CardTitle>Writing Exercises</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Writing-specific exercises will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="listening">
          <Card>
            <CardHeader>
              <CardTitle>Listening Exercises</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Listening-specific exercises will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="speaking">
          <Card>
            <CardHeader>
              <CardTitle>Speaking Exercises</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Speaking-specific exercises will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <CreateExerciseDialog open={isCreateExerciseOpen} onOpenChange={setIsCreateExerciseOpen} />
    </div>
  )
}

// Sample data
const exercises = [
  {
    id: "EX001",
    name: "Academic Reading - Technology and Society",
    type: "Reading",
    difficulty: "Hard",
    createdBy: "Dr. Emily Chen",
    dateCreated: "2023-03-15",
    timesUsed: 45,
  },
  {
    id: "EX002",
    name: "Task 1 - Bar Chart Analysis",
    type: "Writing",
    difficulty: "Medium",
    createdBy: "Prof. Michael Brown",
    dateCreated: "2023-02-20",
    timesUsed: 32,
  },
  {
    id: "EX003",
    name: "Conversation Practice - Travel",
    type: "Listening",
    difficulty: "Easy",
    createdBy: "Sarah Johnson",
    dateCreated: "2023-04-05",
    timesUsed: 28,
  },
  {
    id: "EX004",
    name: "Part 2 - Describe a Person",
    type: "Speaking",
    difficulty: "Medium",
    createdBy: "James Wilson",
    dateCreated: "2023-03-22",
    timesUsed: 19,
  },
  {
    id: "EX005",
    name: "Academic Reading - Environmental Issues",
    type: "Reading",
    difficulty: "Hard",
    createdBy: "Dr. Emily Chen",
    dateCreated: "2023-01-30",
    timesUsed: 37,
  },
]
