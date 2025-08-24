"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Download, MapPin, User, X } from "lucide-react"

export function StudentClassDetails({ classData, onClose }) {
  return (
    <Card>
      <CardHeader className="relative">
        <Button variant="ghost" size="icon" className="absolute right-2 top-2" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
        <CardTitle>{classData.title}</CardTitle>
        <CardDescription>Class details and materials</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Schedule Information</h3>
            <div className="space-y-1">
              <div className="flex items-center text-sm">
                <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>
                  {new Date(classData.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center text-sm">
                <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>{classData.time}</span>
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>{classData.location}</span>
              </div>
              <div className="flex items-center text-sm">
                <User className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>{classData.teacher}</span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Class Description</h3>
            <p className="text-sm">{classData.description}</p>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Class Materials</h3>
          <div className="grid gap-2 md:grid-cols-2">
            {classData.materials.map((material, index) => (
              <div key={index} className="flex items-center justify-between rounded-lg border p-3">
                <span className="text-sm">{material}</span>
                <Button size="sm" variant="ghost">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Add to Calendar</Button>
        <Button variant="outline" className="text-destructive border-destructive hover:bg-destructive/10">
          Request Reschedule
        </Button>
      </CardFooter>
    </Card>
  )
}
