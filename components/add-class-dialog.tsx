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

export function AddClassDialog({ open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Class</DialogTitle>
          <DialogDescription>Enter the class details to create a new IELTS class.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="class-name" className="text-right">
              Class Name
            </Label>
            <Input id="class-name" placeholder="IELTS Advanced - Group D" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="level" className="text-right">
              Level
            </Label>
            <Select>
              <SelectTrigger id="level" className="col-span-3">
                <SelectValue placeholder="Select level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
                <SelectItem value="mixed">Mixed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="teacher" className="text-right">
              Teacher
            </Label>
            <Select>
              <SelectTrigger id="teacher" className="col-span-3">
                <SelectValue placeholder="Select teacher" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="emily">Dr. Emily Chen</SelectItem>
                <SelectItem value="michael">Prof. Michael Brown</SelectItem>
                <SelectItem value="sarah">Sarah Johnson</SelectItem>
                <SelectItem value="james">James Wilson</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="schedule" className="text-right">
              Schedule
            </Label>
            <Input id="schedule" placeholder="Mon, Wed, Fri 9:00-11:00" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="room" className="text-right">
              Room
            </Label>
            <Input id="room" placeholder="Room 101" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="capacity" className="text-right">
              Capacity
            </Label>
            <Input id="capacity" type="number" defaultValue="20" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button type="submit">Create Class</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
