import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const PracticeTestsPage = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6">Practice Tests</h1>

      <Tabs defaultValue="all">
        <TabsList className="overflow-x-auto pb-1">
          <TabsTrigger value="all">All Tests</TabsTrigger>
          <TabsTrigger value="reading">Reading</TabsTrigger>
          <TabsTrigger value="writing">Writing</TabsTrigger>
          <TabsTrigger value="listening">Listening</TabsTrigger>
          <TabsTrigger value="speaking">Speaking</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Test 1</CardTitle>
                <CardDescription>Full Practice Test</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This is a full practice test covering all sections.</p>
              </CardContent>
              <CardFooter>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Start Test</button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Test 2</CardTitle>
                <CardDescription>Full Practice Test</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This is a full practice test covering all sections.</p>
              </CardContent>
              <CardFooter>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Start Test</button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Test 3</CardTitle>
                <CardDescription>Full Practice Test</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This is a full practice test covering all sections.</p>
              </CardContent>
              <CardFooter>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Start Test</button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="reading">
          <p>Reading Tests Content</p>
        </TabsContent>
        <TabsContent value="writing">
          <p>Writing Tests Content</p>
        </TabsContent>
        <TabsContent value="listening">
          <p>Listening Tests Content</p>
        </TabsContent>
        <TabsContent value="speaking">
          <p>Speaking Tests Content</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default PracticeTestsPage
