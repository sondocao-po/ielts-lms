import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon, Users, User, BookOpen } from "lucide-react"

export default function ListeningStrategies() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>IELTS Listening Strategies</CardTitle>
          <CardDescription>Section-specific strategies to help you excel in the IELTS Listening test</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="section1">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="section1">Section 1</TabsTrigger>
              <TabsTrigger value="section2">Section 2</TabsTrigger>
              <TabsTrigger value="section3">Section 3</TabsTrigger>
              <TabsTrigger value="section4">Section 4</TabsTrigger>
            </TabsList>

            {/* Section 1 Tab */}
            <TabsContent value="section1" className="space-y-4 mt-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Section 1: Social Conversation</h3>
                  <p className="text-muted-foreground">
                    A conversation between two people in an everyday social context (e.g., making a reservation,
                    inquiring about a service)
                  </p>
                </div>
              </div>

              <Alert>
                <InfoIcon className="h-4 w-4" />
                <AlertTitle>Key Information</AlertTitle>
                <AlertDescription>
                  Section 1 is generally considered the easiest section. It typically involves form-filling, note
                  completion, or table completion.
                </AlertDescription>
              </Alert>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Effective Strategies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">1. Predict Information Types</h4>
                    <p className="text-sm">For form-filling questions, predict what kind of information is needed:</p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>
                        <strong>Personal details:</strong> names, addresses, phone numbers
                      </li>
                      <li>
                        <strong>Dates and times:</strong> appointments, schedules, opening hours
                      </li>
                      <li>
                        <strong>Numbers:</strong> prices, reference numbers, quantities
                      </li>
                      <li>
                        <strong>Spellings:</strong> names, places, email addresses
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">2. Listen for Corrections</h4>
                    <p className="text-sm">Speakers often correct themselves or each other. For example:</p>
                    <div className="bg-muted p-3 rounded text-sm">
                      "My phone number is 555-7823... oh sorry, I meant 555-7832."
                    </div>
                    <p className="text-sm">Always write the corrected information.</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">3. Pay Attention to Spelling</h4>
                    <p className="text-sm">
                      Names and addresses are often spelled out. Be ready to write down letters quickly.
                    </p>
                    <div className="bg-muted p-3 rounded text-sm">"My name is Smyth, that's S-M-Y-T-H."</div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">4. Listen for Signpost Words</h4>
                    <p className="text-sm">Words that indicate important information is coming:</p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>"So that's..." (summarizing information)</li>
                      <li>"Let me confirm..." (repeating key details)</li>
                      <li>"Could I just check..." (verifying information)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Common Question Types</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted p-3 rounded">
                      <h4 className="font-medium">Form Completion</h4>
                      <p className="text-sm mt-1">
                        Fill in missing information on a form (name, address, phone number, etc.)
                      </p>
                    </div>
                    <div className="bg-muted p-3 rounded">
                      <h4 className="font-medium">Table Completion</h4>
                      <p className="text-sm mt-1">
                        Complete a table with missing details (times, prices, features, etc.)
                      </p>
                    </div>
                    <div className="bg-muted p-3 rounded">
                      <h4 className="font-medium">Multiple Choice</h4>
                      <p className="text-sm mt-1">Select the correct option from several choices</p>
                    </div>
                    <div className="bg-muted p-3 rounded">
                      <h4 className="font-medium">Short Answer</h4>
                      <p className="text-sm mt-1">Write a short answer (usually 1-3 words) to a question</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Section 2 Tab */}
            <TabsContent value="section2" className="space-y-4 mt-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Section 2: Monologue</h3>
                  <p className="text-muted-foreground">
                    A monologue set in an everyday social context (e.g., a speech about local facilities, a tour guide
                    description)
                  </p>
                </div>
              </div>

              <Alert>
                <InfoIcon className="h-4 w-4" />
                <AlertTitle>Key Information</AlertTitle>
                <AlertDescription>
                  Section 2 often involves descriptions, explanations, or instructions. Common question types include
                  matching, map labeling, and multiple choice.
                </AlertDescription>
              </Alert>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Effective Strategies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">1. Identify the Topic Quickly</h4>
                    <p className="text-sm">
                      The introduction will establish the context. Listen carefully to understand what the monologue is
                      about.
                    </p>
                    <div className="bg-muted p-3 rounded text-sm">
                      "Today I'll be telling you about the facilities available at our new community center."
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">2. Follow the Structure</h4>
                    <p className="text-sm">Monologues often have a clear structure with signpost words:</p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>"Firstly... secondly... finally..." (sequence)</li>
                      <li>"On the ground floor... on the first floor..." (location)</li>
                      <li>"The main advantage... another benefit..." (features)</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">3. Map/Plan Navigation</h4>
                    <p className="text-sm">For map labeling questions, pay attention to:</p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>Directional language (north, south, left, right)</li>
                      <li>Landmarks and reference points</li>
                      <li>Prepositions (next to, opposite, between)</li>
                      <li>Distances and measurements</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">4. Listen for Emphasis</h4>
                    <p className="text-sm">Speakers often emphasize important information by:</p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>Speaking more slowly or clearly</li>
                      <li>Repeating information</li>
                      <li>Using phrases like "It's important to note..." or "Remember that..."</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Common Question Types</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted p-3 rounded">
                      <h4 className="font-medium">Map/Plan Labeling</h4>
                      <p className="text-sm mt-1">Label locations on a map or plan based on the description</p>
                    </div>
                    <div className="bg-muted p-3 rounded">
                      <h4 className="font-medium">Matching</h4>
                      <p className="text-sm mt-1">Match items (e.g., facilities) with descriptions or features</p>
                    </div>
                    <div className="bg-muted p-3 rounded">
                      <h4 className="font-medium">Multiple Choice</h4>
                      <p className="text-sm mt-1">Select the correct option from several choices</p>
                    </div>
                    <div className="bg-muted p-3 rounded">
                      <h4 className="font-medium">Note Completion</h4>
                      <p className="text-sm mt-1">Complete notes with missing information</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Section 3 Tab */}
            <TabsContent value="section3" className="space-y-4 mt-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Section 3: Academic Discussion</h3>
                  <p className="text-muted-foreground">
                    A conversation between up to four people set in an educational or training context (e.g., a
                    university tutor and student discussing an assignment)
                  </p>
                </div>
              </div>

              <Alert>
                <InfoIcon className="h-4 w-4" />
                <AlertTitle>Key Information</AlertTitle>
                <AlertDescription>
                  Section 3 is more challenging as it involves multiple speakers discussing academic topics. It often
                  tests your ability to understand opinions, suggestions, and agreements/disagreements.
                </AlertDescription>
              </Alert>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Effective Strategies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">1. Identify the Speakers</h4>
                    <p className="text-sm">
                      Try to distinguish between different speakers and their roles (e.g., tutor vs. students).
                    </p>
                    <div className="bg-muted p-3 rounded text-sm">
                      "Dr. Johnson: I'd like to discuss your research project today." "Student 1: I've been focusing on
                      climate change impacts." "Student 2: My area is more about adaptation strategies."
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">2. Recognize Opinion Language</h4>
                    <p className="text-sm">Listen for phrases that signal opinions:</p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>"I think/believe/feel that..."</li>
                      <li>"In my opinion..."</li>
                      <li>"It seems to me that..."</li>
                      <li>"I'm not convinced that..."</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">3. Note Agreement/Disagreement</h4>
                    <p className="text-sm">Listen for how speakers respond to each other:</p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>
                        <strong>Agreement:</strong> "Yes, exactly," "I agree," "That's right"
                      </li>
                      <li>
                        <strong>Disagreement:</strong> "Actually," "I'm not sure about that," "I see it differently"
                      </li>
                      <li>
                        <strong>Partial agreement:</strong> "Yes, but," "To some extent," "That's true, however"
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">4. Follow Academic Vocabulary</h4>
                    <p className="text-sm">
                      Section 3 often contains academic terms and concepts. Familiarize yourself with common academic
                      vocabulary.
                    </p>
                    <div className="bg-muted p-3 rounded text-sm">
                      "We need to consider the methodology carefully before proceeding with data collection."
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Common Question Types</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted p-3 rounded">
                      <h4 className="font-medium">Multiple Choice</h4>
                      <p className="text-sm mt-1">Select the correct option about opinions, suggestions, or facts</p>
                    </div>
                    <div className="bg-muted p-3 rounded">
                      <h4 className="font-medium">Matching</h4>
                      <p className="text-sm mt-1">Match speakers with opinions or statements</p>
                    </div>
                    <div className="bg-muted p-3 rounded">
                      <h4 className="font-medium">Table/Flow Chart Completion</h4>
                      <p className="text-sm mt-1">Complete a table or flow chart with missing information</p>
                    </div>
                    <div className="bg-muted p-3 rounded">
                      <h4 className="font-medium">Short Answer</h4>
                      <p className="text-sm mt-1">Write short answers to questions about the discussion</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Section 4 Tab */}
            <TabsContent value="section4" className="space-y-4 mt-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Section 4: Academic Lecture</h3>
                  <p className="text-muted-foreground">
                    A monologue on an academic subject (e.g., a university lecture)
                  </p>
                </div>
              </div>

              <Alert>
                <InfoIcon className="h-4 w-4" />
                <AlertTitle>Key Information</AlertTitle>
                <AlertDescription>
                  Section 4 is generally considered the most challenging section. It features a single speaker
                  delivering an academic lecture with specialized vocabulary and complex concepts.
                </AlertDescription>
              </Alert>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Effective Strategies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">1. Effective Note-Taking</h4>
                    <p className="text-sm">Develop a system for taking quick notes:</p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>Use abbreviations and symbols</li>
                      <li>Focus on key words, not full sentences</li>
                      <li>Note numbers, dates, and names accurately</li>
                      <li>Use indentation to show relationships between ideas</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">2. Follow the Lecture Structure</h4>
                    <p className="text-sm">Academic lectures typically have a clear structure:</p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>
                        <strong>Introduction:</strong> Overview of the topic
                      </li>
                      <li>
                        <strong>Main points:</strong> Usually signaled by "firstly," "another aspect," etc.
                      </li>
                      <li>
                        <strong>Examples/evidence:</strong> Supporting information
                      </li>
                      <li>
                        <strong>Conclusion:</strong> Summary of key points
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">3. Listen for Definitions</h4>
                    <p className="text-sm">Lecturers often define key terms:</p>
                    <div className="bg-muted p-3 rounded text-sm">
                      "Biodiversity, which refers to the variety of plant and animal life in a particular habitat..."
                    </div>
                    <p className="text-sm">Listen for phrases like "is defined as," "refers to," or "means."</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">4. Recognize Cause and Effect</h4>
                    <p className="text-sm">Academic lectures often discuss cause-effect relationships:</p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>"As a result of..." "Consequently..." "This leads to..."</li>
                      <li>"Due to..." "Because of..." "The reason for..."</li>
                      <li>"The impact/effect/outcome of this is..."</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Common Question Types</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted p-3 rounded">
                      <h4 className="font-medium">Note/Summary Completion</h4>
                      <p className="text-sm mt-1">Complete notes or a summary of the lecture</p>
                    </div>
                    <div className="bg-muted p-3 rounded">
                      <h4 className="font-medium">Multiple Choice</h4>
                      <p className="text-sm mt-1">Select the correct option about concepts, facts, or processes</p>
                    </div>
                    <div className="bg-muted p-3 rounded">
                      <h4 className="font-medium">Diagram/Flow Chart Labeling</h4>
                      <p className="text-sm mt-1">Label a diagram or flow chart based on the lecture</p>
                    </div>
                    <div className="bg-muted p-3 rounded">
                      <h4 className="font-medium">Classification</h4>
                      <p className="text-sm mt-1">Classify information into different categories</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
