"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, FileText, Headphones, MessageSquare, Plus, Save, Trash2 } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"

export default function ExerciseBuilderPage() {
  const [exerciseType, setExerciseType] = useState("reading")
  const [questions, setQuestions] = useState([
    { id: 1, type: "multiple-choice", text: "", options: ["", "", "", ""], answer: 0 },
  ])

  const addQuestion = (type) => {
    const newQuestion = {
      id: questions.length + 1,
      type,
      text: "",
      options: type === "multiple-choice" ? ["", "", "", ""] : [],
      answer: type === "multiple-choice" ? 0 : "",
    }
    setQuestions([...questions, newQuestion])
  }

  const removeQuestion = (id) => {
    setQuestions(questions.filter((q) => q.id !== id))
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Exercise Builder</h1>
        <p className="text-muted-foreground">Create custom IELTS practice exercises</p>
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Card>
            <CardHeader>
              <CardTitle>Create New Exercise</CardTitle>
              <CardDescription>Fill in the details and add questions to your exercise</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="exercise-name">Exercise Name</Label>
                  <Input id="exercise-name" placeholder="Enter exercise name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="exercise-type">Exercise Type</Label>
                  <Select defaultValue={exerciseType} onValueChange={setExerciseType}>
                    <SelectTrigger id="exercise-type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="reading">
                        <div className="flex items-center">
                          <BookOpen className="mr-2 h-4 w-4 text-blue-500" />
                          Reading
                        </div>
                      </SelectItem>
                      <SelectItem value="writing">
                        <div className="flex items-center">
                          <FileText className="mr-2 h-4 w-4 text-green-500" />
                          Writing
                        </div>
                      </SelectItem>
                      <SelectItem value="listening">
                        <div className="flex items-center">
                          <Headphones className="mr-2 h-4 w-4 text-purple-500" />
                          Listening
                        </div>
                      </SelectItem>
                      <SelectItem value="speaking">
                        <div className="flex items-center">
                          <MessageSquare className="mr-2 h-4 w-4 text-orange-500" />
                          Speaking
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="difficulty">Difficulty Level</Label>
                  <Select defaultValue="medium">
                    <SelectTrigger id="difficulty">
                      <SelectValue placeholder="Select difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="easy">Easy</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="hard">Hard</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time-limit">Time Limit (minutes)</Label>
                  <Input id="time-limit" type="number" defaultValue="30" />
                </div>
              </div>

              {exerciseType === "reading" && (
                <div className="space-y-2">
                  <Label htmlFor="reading-passage">Reading Passage</Label>
                  <Textarea
                    id="reading-passage"
                    placeholder="Enter the reading passage here..."
                    className="min-h-[200px]"
                  />
                </div>
              )}

              {exerciseType === "listening" && (
                <div className="space-y-2">
                  <Label htmlFor="audio-file">Audio File</Label>
                  <Input id="audio-file" type="file" />
                  <p className="text-sm text-muted-foreground">Upload an MP3 or WAV file (max 10MB)</p>
                </div>
              )}

              {exerciseType === "writing" && (
                <div className="space-y-2">
                  <Label htmlFor="writing-prompt">Writing Prompt</Label>
                  <Textarea
                    id="writing-prompt"
                    placeholder="Enter the writing prompt here..."
                    className="min-h-[100px]"
                  />
                  <div className="pt-2">
                    <Label htmlFor="writing-type">Writing Task Type</Label>
                    <Select defaultValue="task1">
                      <SelectTrigger id="writing-type">
                        <SelectValue placeholder="Select task type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="task1">Task 1 (Graph/Chart Description)</SelectItem>
                        <SelectItem value="task2">Task 2 (Essay)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {exerciseType === "speaking" && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="speaking-part">Speaking Part</Label>
                    <Select defaultValue="part1">
                      <SelectTrigger id="speaking-part">
                        <SelectValue placeholder="Select speaking part" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="part1">Part 1 (Introduction)</SelectItem>
                        <SelectItem value="part2">Part 2 (Long Turn)</SelectItem>
                        <SelectItem value="part3">Part 3 (Discussion)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="speaking-prompt">Speaking Prompt</Label>
                    <Textarea
                      id="speaking-prompt"
                      placeholder="Enter the speaking prompt here..."
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
              )}

              <Separator />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Questions</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => addQuestion("multiple-choice")}>
                      <Plus className="mr-2 h-4 w-4" />
                      Multiple Choice
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => addQuestion("short-answer")}>
                      <Plus className="mr-2 h-4 w-4" />
                      Short Answer
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => addQuestion("true-false")}>
                      <Plus className="mr-2 h-4 w-4" />
                      True/False
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  {questions.map((question, index) => (
                    <Card key={question.id}>
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base">Question {index + 1}</CardTitle>
                          <Button variant="ghost" size="sm" onClick={() => removeQuestion(question.id)}>
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                        <CardDescription>
                          {question.type === "multiple-choice" && "Multiple Choice Question"}
                          {question.type === "short-answer" && "Short Answer Question"}
                          {question.type === "true-false" && "True/False Question"}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label>Question Text</Label>
                            <Textarea placeholder="Enter your question" />
                          </div>

                          {question.type === "multiple-choice" && (
                            <div className="space-y-2">
                              <Label>Options</Label>
                              <RadioGroup defaultValue="0">
                                {[0, 1, 2, 3].map((optionIndex) => (
                                  <div key={optionIndex} className="flex items-center space-x-2">
                                    <RadioGroupItem
                                      value={optionIndex.toString()}
                                      id={`q${question.id}-option-${optionIndex}`}
                                    />
                                    <Input placeholder={`Option ${optionIndex + 1}`} className="flex-1" />
                                  </div>
                                ))}
                              </RadioGroup>
                            </div>
                          )}

                          {question.type === "short-answer" && (
                            <div className="space-y-2">
                              <Label>Correct Answer</Label>
                              <Input placeholder="Enter the correct answer" />
                              <p className="text-sm text-muted-foreground">
                                For short answer questions, you can specify multiple acceptable answers separated by
                                commas.
                              </p>
                            </div>
                          )}

                          {question.type === "true-false" && (
                            <div className="space-y-2">
                              <Label>Correct Answer</Label>
                              <RadioGroup defaultValue="true">
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="true" id={`q${question.id}-true`} />
                                  <Label htmlFor={`q${question.id}-true`}>True</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="false" id={`q${question.id}-false`} />
                                  <Label htmlFor={`q${question.id}-false`}>False</Label>
                                </div>
                              </RadioGroup>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save Exercise
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-4">
          <Card>
            <CardHeader>
              <CardTitle>Exercise Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Visibility</Label>
                <Select defaultValue="private">
                  <SelectTrigger>
                    <SelectValue placeholder="Select visibility" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="private">Private (Only Me)</SelectItem>
                    <SelectItem value="teachers">All Teachers</SelectItem>
                    <SelectItem value="public">Public (All Users)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Tags</Label>
                <Input placeholder="Add tags separated by commas" />
                <p className="text-xs text-muted-foreground">E.g., academic, environment, technology</p>
              </div>

              <div className="space-y-2">
                <Label>Additional Settings</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="shuffle" />
                    <Label htmlFor="shuffle">Shuffle questions</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="show-answers" />
                    <Label htmlFor="show-answers">Show answers after submission</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="time-limit" />
                    <Label htmlFor="time-limit">Enforce time limit</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Assign to Classes</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select classes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cls001">IELTS Advanced - Group A</SelectItem>
                    <SelectItem value="cls002">IELTS Intermediate - Group B</SelectItem>
                    <SelectItem value="cls003">IELTS Beginner - Group C</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Preview Exercise
              </Button>
              <p className="text-sm text-muted-foreground mt-2">See how your exercise will appear to students</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
