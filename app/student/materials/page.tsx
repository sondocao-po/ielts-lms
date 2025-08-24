import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const materials = [
  {
    id: 1,
    title: "Introduction to React",
    type: "reading",
    description: "A beginner-friendly guide to React concepts.",
  },
  {
    id: 2,
    title: "Essay Writing Techniques",
    type: "writing",
    description: "Learn how to write compelling essays.",
  },
  {
    id: 3,
    title: "Listening Comprehension Practice",
    type: "listening",
    description: "Improve your listening skills with this exercise.",
  },
  {
    id: 4,
    title: "Presentation Skills Workshop",
    type: "speaking",
    description: "Enhance your public speaking abilities.",
  },
  {
    id: 5,
    title: "Advanced React Patterns",
    type: "reading",
    description: "Explore advanced patterns in React development.",
  },
  {
    id: 6,
    title: "Creative Writing Prompts",
    type: "writing",
    description: "Get inspired with these creative writing prompts.",
  },
  {
    id: 7,
    title: "English Pronunciation Guide",
    type: "speaking",
    description: "Improve your English pronunciation.",
  },
  {
    id: 8,
    title: "Audio Journaling Exercise",
    type: "listening",
    description: "Practice listening and reflection with this exercise.",
  },
]

const StudentMaterialsPage = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6">Student Materials</h1>

      <Tabs defaultValue="all">
        <TabsList className="overflow-x-auto pb-1">
          <TabsTrigger value="all">All Materials</TabsTrigger>
          <TabsTrigger value="reading">Reading</TabsTrigger>
          <TabsTrigger value="writing">Writing</TabsTrigger>
          <TabsTrigger value="listening">Listening</TabsTrigger>
          <TabsTrigger value="speaking">Speaking</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {materials.map((material) => (
              <Card key={material.id}>
                <CardHeader>
                  <CardTitle>{material.title}</CardTitle>
                  <CardDescription>{material.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Type: {material.type}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="reading">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {materials
              .filter((material) => material.type === "reading")
              .map((material) => (
                <Card key={material.id}>
                  <CardHeader>
                    <CardTitle>{material.title}</CardTitle>
                    <CardDescription>{material.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Type: {material.type}</p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="writing">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {materials
              .filter((material) => material.type === "writing")
              .map((material) => (
                <Card key={material.id}>
                  <CardHeader>
                    <CardTitle>{material.title}</CardTitle>
                    <CardDescription>{material.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Type: {material.type}</p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="listening">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {materials
              .filter((material) => material.type === "listening")
              .map((material) => (
                <Card key={material.id}>
                  <CardHeader>
                    <CardTitle>{material.title}</CardTitle>
                    <CardDescription>{material.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Type: {material.type}</p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="speaking">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {materials
              .filter((material) => material.type === "speaking")
              .map((material) => (
                <Card key={material.id}>
                  <CardHeader>
                    <CardTitle>{material.title}</CardTitle>
                    <CardDescription>{material.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Type: {material.type}</p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default StudentMaterialsPage
