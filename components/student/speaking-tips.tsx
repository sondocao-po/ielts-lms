import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2, AlertTriangle, Clock, Mic, MessageSquare } from "lucide-react"

export function SpeakingTips() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">IELTS Speaking Tips & Techniques</CardTitle>
          <CardDescription>Master these tips and techniques to improve your IELTS speaking score</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="general">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-4">
              <TabsTrigger value="general">General Tips</TabsTrigger>
              <TabsTrigger value="part-specific">Part-Specific Tips</TabsTrigger>
              <TabsTrigger value="common-mistakes">Common Mistakes</TabsTrigger>
              <TabsTrigger value="practice">Practice Tips</TabsTrigger>
            </TabsList>

            {/* General Tips Tab */}
            <TabsContent value="general" className="space-y-4">
              <Alert>
                <Mic className="h-4 w-4" />
                <AlertTitle>Speak Naturally</AlertTitle>
                <AlertDescription>
                  The examiner is looking for natural, fluent speech. Don't try to memorize answers.
                </AlertDescription>
              </Alert>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="fluency">
                  <AccordionTrigger>Fluency & Coherence</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p className="text-sm">Tips to improve your fluency and coherence:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm pl-2">
                      <li>Speak at a natural pace - not too fast, not too slow</li>
                      <li>Use linking words to connect your ideas (firstly, moreover, however, etc.)</li>
                      <li>
                        If you make a mistake, correct yourself briefly and continue - don't apologize or dwell on it
                      </li>
                      <li>
                        Use fillers appropriately (well, you know, I mean) but don't overuse them or use them as a
                        crutch
                      </li>
                      <li>Practice speaking for 2 minutes without stopping on familiar topics</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="vocabulary">
                  <AccordionTrigger>Lexical Resource</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p className="text-sm">Tips to demonstrate good vocabulary:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm pl-2">
                      <li>Use a range of vocabulary appropriate to the topic</li>
                      <li>Include some less common words and phrases where appropriate</li>
                      <li>Use collocations naturally (heavy rain, strong coffee, etc.)</li>
                      <li>Use idioms and expressions naturally, but don't force them</li>
                      <li>
                        If you don't know a specific word, use paraphrasing skills (e.g., "a device that helps you see
                        things that are far away" instead of "binoculars")
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="grammar">
                  <AccordionTrigger>Grammatical Range & Accuracy</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p className="text-sm">Tips to demonstrate good grammar:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm pl-2">
                      <li>Use a mix of simple and complex sentence structures</li>
                      <li>Use a variety of tenses appropriately</li>
                      <li>Use conditionals (if clauses) where relevant</li>
                      <li>
                        If you make a grammar mistake, correct it briefly if you can, but don't worry too much about
                        minor errors
                      </li>
                      <li>Practice using complex structures like relative clauses and passive voice</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="pronunciation">
                  <AccordionTrigger>Pronunciation</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p className="text-sm">Tips to improve your pronunciation:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm pl-2">
                      <li>Focus on clear articulation of sounds</li>
                      <li>Pay attention to word stress (which syllable is emphasized)</li>
                      <li>Use appropriate sentence stress (emphasizing important words)</li>
                      <li>Use intonation to express meaning (rising for questions, falling for statements)</li>
                      <li>
                        Don't worry about having an accent - clarity and intelligibility are more important than
                        sounding like a native speaker
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="body-language">
                  <AccordionTrigger>Body Language & Confidence</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p className="text-sm">Tips for body language and confidence:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm pl-2">
                      <li>Maintain appropriate eye contact with the examiner</li>
                      <li>Sit up straight but comfortably</li>
                      <li>Use natural hand gestures to emphasize points</li>
                      <li>Smile and show enthusiasm where appropriate</li>
                      <li>Speak clearly and confidently, even if you're nervous</li>
                      <li>Take a deep breath if you need to calm yourself</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            {/* Part-Specific Tips Tab */}
            <TabsContent value="part-specific" className="space-y-4">
              <Alert>
                <MessageSquare className="h-4 w-4" />
                <AlertTitle>Know the Format</AlertTitle>
                <AlertDescription>
                  The IELTS Speaking test has three parts, each with a different focus and format.
                </AlertDescription>
              </Alert>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="part1">
                  <AccordionTrigger>Part 1: Introduction & Interview (4-5 minutes)</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p className="text-sm">
                      In Part 1, the examiner will introduce themselves and ask you to introduce yourself. They will
                      then ask general questions about familiar topics.
                    </p>
                    <p className="text-sm font-medium mt-2">Tips for Part 1:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm pl-2">
                      <li>Give extended answers, but don't speak for too long (2-3 sentences is usually enough)</li>
                      <li>Be prepared for questions about yourself, your home/family, work/studies, interests</li>
                      <li>Add details and examples to make your answers interesting</li>
                      <li>Use a variety of tenses as appropriate (present for habits, past for experiences)</li>
                      <li>Show your personality and be conversational</li>
                    </ul>
                    <div className="bg-muted p-3 rounded-md mt-2">
                      <p className="text-sm font-medium">Example Question:</p>
                      <p className="text-sm italic">"Do you enjoy reading books?"</p>
                      <p className="text-sm font-medium mt-2">Weak Answer:</p>
                      <p className="text-sm italic">"Yes, I like reading books."</p>
                      <p className="text-sm font-medium mt-2">Strong Answer:</p>
                      <p className="text-sm italic">
                        "Yes, I'm quite passionate about reading. I particularly enjoy historical fiction because it
                        combines storytelling with learning about different time periods. Recently, I've been reading a
                        novel set in ancient Rome, which has been really fascinating."
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="part2">
                  <AccordionTrigger>Part 2: Long Turn (3-4 minutes)</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p className="text-sm">
                      In Part 2, you'll be given a task card with a topic and points to include. You'll have 1 minute to
                      prepare and 1-2 minutes to speak.
                    </p>
                    <p className="text-sm font-medium mt-2">Tips for Part 2:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm pl-2">
                      <li>Use your 1-minute preparation time effectively to make brief notes</li>
                      <li>Address all the points on the cue card</li>
                      <li>Structure your talk with an introduction, body, and conclusion</li>
                      <li>Include specific details, examples, and personal experiences</li>
                      <li>Speak for the full 1-2 minutes</li>
                      <li>
                        If you finish early, elaborate on one of your points or add a personal reflection on the topic
                      </li>
                    </ul>
                    <div className="bg-muted p-3 rounded-md mt-2">
                      <p className="text-sm font-medium">Example Cue Card:</p>
                      <p className="text-sm italic">
                        "Describe a person who has influenced you in your life. You should say:
                        <br />- Who this person is
                        <br />- How you know them
                        <br />- What they do
                        <br />- And explain why they have influenced you"
                      </p>
                      <p className="text-sm font-medium mt-2">Preparation Strategy:</p>
                      <p className="text-sm">
                        1. Choose someone you can talk about easily (family member, teacher, friend)
                        <br />
                        2. Note down key points for each bullet point
                        <br />
                        3. Think of specific examples of their influence
                        <br />
                        4. Plan a brief introduction and conclusion
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="part3">
                  <AccordionTrigger>Part 3: Discussion (4-5 minutes)</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p className="text-sm">
                      In Part 3, the examiner will ask you more abstract questions related to the topic in Part 2. This
                      tests your ability to discuss more complex ideas.
                    </p>
                    <p className="text-sm font-medium mt-2">Tips for Part 3:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm pl-2">
                      <li>Give extended, detailed answers with explanations and examples</li>
                      <li>Express and justify opinions</li>
                      <li>Use a wide range of vocabulary and complex sentence structures</li>
                      <li>Consider different perspectives on the issue</li>
                      <li>
                        If you're not sure about a question, ask for clarification or rephrase it to check your
                        understanding
                      </li>
                      <li>
                        Use expressions for giving opinions, comparing and contrasting, discussing advantages and
                        disadvantages, etc.
                      </li>
                    </ul>
                    <div className="bg-muted p-3 rounded-md mt-2">
                      <p className="text-sm font-medium">
                        Example Part 3 Questions (following a Part 2 about influence):
                      </p>
                      <p className="text-sm italic">
                        "Do you think people are more influenced by their friends or their family?"
                        <br />
                        "How has the way people influence each other changed with social media?"
                        <br />
                        "Is it always good to be influenced by others?"
                      </p>
                      <p className="text-sm font-medium mt-2">Approach:</p>
                      <p className="text-sm">
                        - Give your opinion with reasons
                        <br />- Provide examples to support your points
                        <br />- Consider different perspectives
                        <br />- Use complex language and structures
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            {/* Common Mistakes Tab */}
            <TabsContent value="common-mistakes" className="space-y-4">
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Watch Out!</AlertTitle>
                <AlertDescription>
                  Avoiding these common mistakes can significantly improve your speaking score.
                </AlertDescription>
              </Alert>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="memorized">
                  <AccordionTrigger>Memorized Responses</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p className="text-sm">
                      One of the biggest mistakes is trying to use memorized answers. Examiners are trained to recognize
                      this, and it will lower your score.
                    </p>
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-sm font-medium">Instead:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Prepare topics and vocabulary, not exact answers</li>
                        <li>Practice expressing ideas in different ways</li>
                        <li>Listen carefully to the question and answer specifically</li>
                        <li>Speak naturally and conversationally</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="short">
                  <AccordionTrigger>Too-Short Answers</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p className="text-sm">
                      Giving very brief answers, especially in Parts 1 and 3, doesn't give you the opportunity to
                      demonstrate your English skills.
                    </p>
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-sm font-medium">Instead:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Extend your answers with examples and explanations</li>
                        <li>Use the STAR method: Situation, Task, Action, Result</li>
                        <li>Give reasons for your opinions</li>
                        <li>Add relevant details to make your answer interesting</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="hesitation">
                  <AccordionTrigger>Excessive Hesitation</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p className="text-sm">
                      Too many pauses, fillers (um, ah), or repetitions can affect your fluency score.
                    </p>
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-sm font-medium">Instead:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Practice speaking on various topics to build confidence</li>
                        <li>Learn useful phrases to buy thinking time ("That's an interesting question...")</li>
                        <li>If you need to pause, do so after completing a thought</li>
                        <li>Record yourself speaking and identify patterns of hesitation</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="limited">
                  <AccordionTrigger>Limited Vocabulary</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p className="text-sm">Using the same basic words repeatedly limits your lexical resource score.</p>
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-sm font-medium">Instead:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Learn synonyms for common words</li>
                        <li>Study topic-specific vocabulary</li>
                        <li>Learn collocations (words that naturally go together)</li>
                        <li>Use descriptive adjectives and adverbs</li>
                        <li>Incorporate idiomatic expressions naturally</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="grammar">
                  <AccordionTrigger>Basic Grammatical Errors</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p className="text-sm">Consistent errors in basic grammar can significantly impact your score.</p>
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-sm font-medium">Instead:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Review and practice basic tenses</li>
                        <li>Pay attention to subject-verb agreement</li>
                        <li>Use articles (a, an, the) correctly</li>
                        <li>Practice using a mix of simple and complex structures</li>
                        <li>If you make a mistake, briefly correct it and continue</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="off-topic">
                  <AccordionTrigger>Going Off-Topic</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p className="text-sm">
                      Not answering the question directly or going off on tangents can affect your score.
                    </p>
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-sm font-medium">Instead:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Listen carefully to the question</li>
                        <li>Address all parts of the question</li>
                        <li>Stay relevant to the topic</li>
                        <li>If unsure, ask for clarification</li>
                        <li>Use the cue card points as a guide in Part 2</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            {/* Practice Tips Tab */}
            <TabsContent value="practice" className="space-y-4">
              <Alert className="border-green-500">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <AlertTitle>Regular Practice</AlertTitle>
                <AlertDescription>
                  Consistent practice is the key to improving your speaking skills. Try to practice speaking English
                  every day.
                </AlertDescription>
              </Alert>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Effective Practice Methods</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        Timed Practice
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Practice under timed conditions to build confidence and fluency:
                      </p>
                      <ul className="list-disc list-inside text-sm space-y-1 mt-2 text-muted-foreground">
                        <li>1 minute preparation for Part 2</li>
                        <li>1-2 minutes speaking for Part 2</li>
                        <li>Record yourself and review</li>
                        <li>Practice with a timer visible</li>
                      </ul>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Mic className="h-4 w-4 text-primary" />
                        Recording & Self-Assessment
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Record your practice sessions and analyze your performance:
                      </p>
                      <ul className="list-disc list-inside text-sm space-y-1 mt-2 text-muted-foreground">
                        <li>Identify hesitations and fillers</li>
                        <li>Check for grammar errors</li>
                        <li>Assess vocabulary range</li>
                        <li>Evaluate pronunciation</li>
                      </ul>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-primary" />
                        Practice Partners
                      </h3>
                      <p className="text-sm text-muted-foreground">Find a speaking partner to practice with:</p>
                      <ul className="list-disc list-inside text-sm space-y-1 mt-2 text-muted-foreground">
                        <li>Take turns being the examiner</li>
                        <li>Give each other feedback</li>
                        <li>Practice regularly (2-3 times per week)</li>
                        <li>Use real IELTS questions</li>
                      </ul>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Topic Preparation
                      </h3>
                      <p className="text-sm text-muted-foreground">Prepare for common IELTS topics:</p>
                      <ul className="list-disc list-inside text-sm space-y-1 mt-2 text-muted-foreground">
                        <li>Home, family, work/study</li>
                        <li>Hobbies, interests, daily routine</li>
                        <li>Technology, environment, education</li>
                        <li>Culture, travel, social issues</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Daily Practice Routine</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">10-Minute Daily Routine</h3>
                      <ol className="list-decimal list-inside text-sm space-y-2 text-muted-foreground">
                        <li>
                          <strong>2 minutes:</strong> Warm up by describing your day or a recent event
                        </li>
                        <li>
                          <strong>3 minutes:</strong> Answer a Part 1 question with extended responses
                        </li>
                        <li>
                          <strong>4 minutes:</strong> Practice a Part 2 topic (1 min prep, 2 min speaking, 1 min review)
                        </li>
                        <li>
                          <strong>1 minute:</strong> Reflect on what you did well and what to improve
                        </li>
                      </ol>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">Weekly Practice Plan</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                        <div>
                          <p className="font-medium">Monday & Thursday:</p>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Focus on Part 1 & 2 practice</li>
                            <li>Record and review your responses</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium">Tuesday & Friday:</p>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Focus on Part 3 discussion practice</li>
                            <li>Work on expressing and justifying opinions</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium">Wednesday:</p>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Vocabulary building for specific topics</li>
                            <li>Practice pronunciation and intonation</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium">Weekend:</p>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Full mock speaking test</li>
                            <li>Review and set goals for next week</li>
                          </ul>
                        </div>
                      </div>
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
