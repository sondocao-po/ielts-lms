import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpen, FileText, Headphones, MessageSquare } from "lucide-react"
import Link from "next/link"

export function StudentWeaknesses() {
  return (
    <div className="space-y-6">
      {weaknesses.map((weakness, index) => (
        <div key={index} className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {weakness.skill === "Reading" && <BookOpen className="mr-2 h-4 w-4 text-blue-500" />}
              {weakness.skill === "Writing" && <FileText className="mr-2 h-4 w-4 text-green-500" />}
              {weakness.skill === "Listening" && <Headphones className="mr-2 h-4 w-4 text-purple-500" />}
              {weakness.skill === "Speaking" && <MessageSquare className="mr-2 h-4 w-4 text-orange-500" />}
              <h3 className="font-medium">
                {weakness.skill}: {weakness.area}
              </h3>
            </div>
            <span className="text-sm text-muted-foreground">Current: {weakness.currentLevel}/9</span>
          </div>
          <Progress value={weakness.currentLevel * 11.11} className="h-2" />
          <p className="text-sm text-muted-foreground">{weakness.description}</p>
          <div className="pt-1">
            <h4 className="text-sm font-medium mb-2">Recommended Practice:</h4>
            <div className="grid gap-2 md:grid-cols-2">
              {weakness.recommendedPractice.map((practice, practiceIndex) => (
                <div key={practiceIndex} className="flex items-center justify-between rounded-lg border p-3">
                  <div>
                    <p className="text-sm font-medium">{practice.title}</p>
                    <p className="text-xs text-muted-foreground">{practice.duration}</p>
                  </div>
                  <Button size="sm" asChild>
                    <Link href={`/student/materials/${practice.id}`}>Start</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const weaknesses = [
  {
    skill: "Writing",
    area: "Task 2 Essay Structure",
    currentLevel: 6.0,
    description:
      "Your essays need more coherent organization and clearer paragraph structure. Work on developing your main ideas with better supporting examples.",
    recommendedPractice: [
      {
        id: "wp1",
        title: "Essay Structure Workshop",
        duration: "30 minutes",
      },
      {
        id: "wp2",
        title: "Task 2 Sample Essays Analysis",
        duration: "45 minutes",
      },
    ],
  },
  {
    skill: "Speaking",
    area: "Fluency and Coherence",
    currentLevel: 6.5,
    description:
      "You sometimes hesitate when expressing complex ideas. Practice speaking at length on various topics to improve your fluency.",
    recommendedPractice: [
      {
        id: "sp1",
        title: "Speaking Fluency Drills",
        duration: "20 minutes",
      },
      {
        id: "sp2",
        title: "Part 2 Long Turn Practice",
        duration: "25 minutes",
      },
    ],
  },
  {
    skill: "Reading",
    area: "Identifying Writer's Views",
    currentLevel: 7.0,
    description:
      "You're generally strong in reading, but sometimes miss nuanced opinions or implied meanings in academic texts.",
    recommendedPractice: [
      {
        id: "rp1",
        title: "Identifying Opinions Exercise",
        duration: "35 minutes",
      },
      {
        id: "rp2",
        title: "Advanced Reading Comprehension",
        duration: "40 minutes",
      },
    ],
  },
]
