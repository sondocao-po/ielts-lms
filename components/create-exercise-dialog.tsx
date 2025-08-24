"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, FileText, Headphones, MessageSquare } from "lucide-react"

export function CreateExerciseDialog({ open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Exercise</DialogTitle>
          <DialogDescription>Choose the type of exercise you want to create.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="exercise-name" className="text-right">
              Name
            </Label>
            <Input id="exercise-name" placeholder="Exercise name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="exercise-type" className="text-right">
              Type
            </Label>
            <Select>
              <SelectTrigger id="exercise-type" className="col-span-3">
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
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="difficulty" className="text-right">
              Difficulty
            </Label>
            <Select>
              <SelectTrigger id="difficulty" className="col-span-3">
                <SelectValue placeholder="Select difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              onOpenChange(false)
              window.location.href = "/dashboard/exercise-builder"
            }}
          >
            Continue to Builder
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
