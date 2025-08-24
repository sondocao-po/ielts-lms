import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InfoIcon, AlertTriangle, CheckCircle2, Headphones, Clock, BookOpen } from "lucide-react"

export default function ListeningTips() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>IELTS Listening Tips & Techniques</CardTitle>
          <CardDescription>Improve your listening skills with these expert tips and techniques</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="general">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="general">General Tips</TabsTrigger>
              <TabsTrigger value="question-types">Question Types</TabsTrigger>
              <TabsTrigger value="practice">Practice Tips</TabsTrigger>
            </TabsList>

            {/* General Tips Tab */}
            <TabsContent value="general" className="space-y-4 mt-4">
              <Alert>
                <InfoIcon className="h-4 w-4" />
                <AlertTitle>Important</AlertTitle>
                <AlertDescription>
                  The IELTS Listening test consists of 4 sections with 10 questions each, for a total of 40 questions.
                  You will hear the recording ONCE only.
                </AlertDescription>
              </Alert>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Before Listening</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p>
                      1. <strong>Read instructions carefully</strong> - Make sure you understand what you need to do.
                    </p>
                    <p>
                      2. <strong>Preview questions</strong> - Use the 30 seconds before each section to read through the
                      questions.
                    </p>
                    <p>
                      3. <strong>Predict answers</strong> - Think about what kind of information you need (numbers,
                      names, dates, etc.).
                    </p>
                    <p>
                      4. <strong>Underline keywords</strong> - Identify important words in the questions to listen for.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>During Listening</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p>
                      1. <strong>Stay focused</strong> - Concentrate on the audio and don't let your mind wander.
                    </p>
                    <p>
                      2. <strong>Listen for signpost words</strong> - Words like "however," "firstly," "in conclusion"
                      can help you follow the recording.
                    </p>
                    <p>
                      3. <strong>Write as you listen</strong> - Don't wait until the end to write your answers.
                    </p>
                    <p>
                      4. <strong>Move on if you miss something</strong> - Don't dwell on missed questions; focus on the
                      next one.
                    </p>
                    <p>
                      5. <strong>Listen for paraphrasing</strong> - The recording often paraphrases the written
                      questions.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>After Listening</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p>
                      1. <strong>Check spelling and grammar</strong> - Ensure your answers are spelled correctly.
                    </p>
                    <p>
                      2. <strong>Follow word limits</strong> - If the instructions say "NO MORE THAN TWO WORDS," don't
                      write three.
                    </p>
                    <p>
                      3. <strong>Transfer answers carefully</strong> - If you're using an answer sheet, transfer your
                      answers accurately.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Time Management</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p>
                      1. <strong>Use the 30-second preview time</strong> - Read ahead and predict possible answers.
                    </p>
                    <p>
                      2. <strong>Write quickly but legibly</strong> - Your handwriting must be readable.
                    </p>
                    <p>
                      3. <strong>Keep track of where you are</strong> - Don't lose your place in the questions.
                    </p>
                    <p>
                      4. <strong>Use the 10-minute transfer time wisely</strong> - Check your answers and spelling.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            {/* Question Types Tab */}
            <TabsContent value="question-types" className="space-y-4 mt-4">
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Common Mistakes</AlertTitle>
                <AlertDescription>
                  Many test-takers lose points by not following instructions precisely or by misspelling answers.
                </AlertDescription>
              </Alert>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Multiple Choice</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p>
                      <strong>Tips:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Read all options before listening</li>
                      <li>Eliminate obviously wrong answers</li>
                      <li>Be careful of distractors (information mentioned but not the answer)</li>
                      <li>Listen for synonyms and paraphrasing of the options</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Form/Note/Table/Summary Completion</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p>
                      <strong>Tips:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Read the whole form/note/table/summary first</li>
                      <li>Predict what kind of information is needed (name, number, date, etc.)</li>
                      <li>Pay attention to word limits</li>
                      <li>Check spelling carefully, especially for proper nouns</li>
                      <li>Use the exact words from the recording</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Matching</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p>
                      <strong>Tips:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Read all options before listening</li>
                      <li>Cross off options as you use them</li>
                      <li>Listen for synonyms and paraphrasing</li>
                      <li>Pay attention to the order of information in the recording</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Labeling Maps/Plans/Diagrams</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p>
                      <strong>Tips:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Study the map/plan/diagram carefully before listening</li>
                      <li>Note the starting point and direction words (north, south, left, right, etc.)</li>
                      <li>Follow the description step by step</li>
                      <li>Pay attention to prepositions (next to, opposite, between, etc.)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Short-Answer Questions</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p>
                      <strong>Tips:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Read the questions carefully and identify what information you need</li>
                      <li>Pay attention to word limits</li>
                      <li>Write exactly what you hear</li>
                      <li>Check spelling and grammar</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            {/* Practice Tips Tab */}
            <TabsContent value="practice" className="space-y-4 mt-4">
              <Alert variant="default" className="border-green-500">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <AlertTitle>Effective Practice</AlertTitle>
                <AlertDescription>
                  Regular, focused practice is key to improving your listening skills. Use a variety of resources and
                  practice with different accents.
                </AlertDescription>
              </Alert>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Headphones className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">Daily Listening</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Listen to English podcasts on various topics</li>
                      <li>Watch English news, documentaries, and TED talks</li>
                      <li>Practice with different accents (British, American, Australian)</li>
                      <li>Use IELTS-specific listening practice materials</li>
                      <li>Take notes while listening to improve retention</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">Timed Practice</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Practice under exam conditions (30 seconds preview, one listening only)</li>
                      <li>Time yourself when transferring answers</li>
                      <li>Complete full practice tests to build stamina</li>
                      <li>Review your answers and identify patterns in your mistakes</li>
                      <li>Practice with background noise to improve concentration</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">Vocabulary Building</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2 text-sm">Focus on vocabulary related to common IELTS listening topics:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      <div className="bg-muted p-2 rounded text-sm">
                        <strong>Education:</strong> lectures, tutorials, assignments, deadlines, etc.
                      </div>
                      <div className="bg-muted p-2 rounded text-sm">
                        <strong>Accommodation:</strong> rent, lease, utilities, facilities, etc.
                      </div>
                      <div className="bg-muted p-2 rounded text-sm">
                        <strong>Travel:</strong> bookings, schedules, destinations, transportation, etc.
                      </div>
                      <div className="bg-muted p-2 rounded text-sm">
                        <strong>Social:</strong> events, arrangements, activities, locations, etc.
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
