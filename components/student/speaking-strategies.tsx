import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { InfoIcon, MessageSquare, Clock, Lightbulb } from "lucide-react"

export function SpeakingStrategies() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">IELTS Speaking Strategies</CardTitle>
          <CardDescription>Learn effective strategies for each part of the IELTS speaking test</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="part1">
            <TabsList className="grid grid-cols-3 w-full max-w-md mb-4">
              <TabsTrigger value="part1">Part 1</TabsTrigger>
              <TabsTrigger value="part2">Part 2</TabsTrigger>
              <TabsTrigger value="part3">Part 3</TabsTrigger>
            </TabsList>

            {/* Part 1 Strategies */}
            <TabsContent value="part1" className="space-y-4">
              <Alert>
                <InfoIcon className="h-4 w-4" />
                <AlertTitle>Part 1: Introduction & Interview</AlertTitle>
                <AlertDescription>
                  4-5 minutes of questions about familiar topics such as home, family, work, studies, and interests.
                </AlertDescription>
              </Alert>

              <Card className="border">
                <CardHeader>
                  <CardTitle className="text-lg">Before the Test</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="prepare-topics">
                      <AccordionTrigger>Prepare Common Topics</AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <p className="text-sm">Familiarize yourself with these common Part 1 topics:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                          <div className="bg-muted p-2 rounded">
                            <strong>Home/Accommodation</strong>
                            <ul className="list-disc list-inside mt-1 text-muted-foreground">
                              <li>Where you live</li>
                              <li>Your room/house</li>
                              <li>Your neighborhood</li>
                            </ul>
                          </div>
                          <div className="bg-muted p-2 rounded">
                            <strong>Work/Studies</strong>
                            <ul className="list-disc list-inside mt-1 text-muted-foreground">
                              <li>Your job/course</li>
                              <li>Why you chose it</li>
                              <li>Future plans</li>
                            </ul>
                          </div>
                          <div className="bg-muted p-2 rounded">
                            <strong>Hobbies/Interests</strong>
                            <ul className="list-disc list-inside mt-1 text-muted-foreground">
                              <li>Free time activities</li>
                              <li>Sports/exercise</li>
                              <li>Entertainment</li>
                            </ul>
                          </div>
                          <div className="bg-muted p-2 rounded">
                            <strong>Daily Routine</strong>
                            <ul className="list-disc list-inside mt-1 text-muted-foreground">
                              <li>Weekday activities</li>
                              <li>Weekend activities</li>
                              <li>Morning/evening routines</li>
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="practice-extensions">
                      <AccordionTrigger>Practice Answer Extensions</AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <p className="text-sm">Learn to extend your answers using the RERA technique:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>
                            <strong>R</strong>esponse - Direct answer to the question
                          </li>
                          <li>
                            <strong>E</strong>xplanation - Explain your answer
                          </li>
                          <li>
                            <strong>R</strong>eason - Give a reason for your answer
                          </li>
                          <li>
                            <strong>A</strong>dditional detail - Add an example or extra information
                          </li>
                        </ul>
                        <div className="bg-muted p-3 rounded-md mt-2">
                          <p className="text-sm font-medium">Example:</p>
                          <p className="text-sm">Question: "Do you enjoy cooking?"</p>
                          <p className="text-sm italic mt-1">
                            <strong>Response:</strong> "Yes, I really enjoy cooking."
                            <br />
                            <strong>Explanation:</strong> "It's a creative activity that allows me to experiment with
                            different flavors and ingredients."
                            <br />
                            <strong>Reason:</strong> "I find it relaxing after a busy day at work."
                            <br />
                            <strong>Additional detail:</strong> "Last weekend, I tried making a traditional Thai curry
                            from scratch, and it turned out surprisingly well."
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card className="border">
                <CardHeader>
                  <CardTitle className="text-lg">During the Test</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="listen-carefully">
                      <AccordionTrigger>Listen Carefully to Questions</AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <p className="text-sm">Pay close attention to what the examiner is asking:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Note the tense of the question (past, present, future)</li>
                          <li>Identify if it's asking for a preference, opinion, or factual information</li>
                          <li>If you don't understand, politely ask for clarification</li>
                        </ul>
                        <div className="bg-muted p-3 rounded-md mt-2">
                          <p className="text-sm font-medium">If you need clarification:</p>
                          <p className="text-sm italic">
                            "I'm sorry, could you please repeat the question?"
                            <br />
                            "Do you mean...?"
                            <br />
                            "Could you clarify what you mean by...?"
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="answer-structure">
                      <AccordionTrigger>Structure Your Answers</AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <p className="text-sm">For Part 1, aim for answers that are:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Direct - Answer the question clearly</li>
                          <li>Extended - 2-3 sentences (not too short, not too long)</li>
                          <li>Personal - Include your own experiences and opinions</li>
                          <li>Specific - Include details and examples</li>
                        </ul>
                        <div className="bg-muted p-3 rounded-md mt-2">
                          <p className="text-sm font-medium">Example structure:</p>
                          <p className="text-sm">
                            <strong>Sentence 1:</strong> Direct answer to the question
                            <br />
                            <strong>Sentence 2:</strong> Explanation or reason
                            <br />
                            <strong>Sentence 3:</strong> Example or additional detail
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="show-enthusiasm">
                      <AccordionTrigger>Show Enthusiasm</AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <p className="text-sm">Demonstrate interest and engagement in the conversation:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Use varied intonation (not monotone)</li>
                          <li>Show appropriate facial expressions</li>
                          <li>Use natural hand gestures</li>
                          <li>Respond with enthusiasm, even for simple questions</li>
                        </ul>
                        <p className="text-sm mt-2">
                          This helps create a positive impression and makes the conversation more natural.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card className="border">
                <CardHeader>
                  <CardTitle className="text-lg">Language Features to Include</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-muted p-3 rounded">
                      <h4 className="font-medium">Tenses</h4>
                      <p className="text-sm mt-1">
                        Use a mix of present simple, present continuous, past simple, and present perfect as
                        appropriate.
                      </p>
                      <div className="text-sm mt-2">
                        <p className="italic">
                          "I've been working as a designer for three years. Before that, I studied graphic design at
                          university. Currently, I'm working on a project for a major client."
                        </p>
                      </div>
                    </div>
                    <div className="bg-muted p-3 rounded">
                      <h4 className="font-medium">Descriptive Language</h4>
                      <p className="text-sm mt-1">Use adjectives and adverbs to make your answers more interesting.</p>
                      <div className="text-sm mt-2">
                        <p className="italic">
                          "I live in a spacious apartment in a bustling neighborhood. It's incredibly convenient because
                          it's extremely close to public transportation."
                        </p>
                      </div>
                    </div>
                    <div className="bg-muted p-3 rounded">
                      <h4 className="font-medium">Linking Words</h4>
                      <p className="text-sm mt-1">Connect your ideas smoothly with appropriate transitions.</p>
                      <div className="text-sm mt-2">
                        <p className="italic">
                          "I enjoy reading because it's relaxing. Additionally, it helps me learn new vocabulary.
                          However, I don't have as much time for it as I'd like."
                        </p>
                      </div>
                    </div>
                    <div className="bg-muted p-3 rounded">
                      <h4 className="font-medium">Expressions of Opinion</h4>
                      <p className="text-sm mt-1">Use phrases to express your views clearly.</p>
                      <div className="text-sm mt-2">
                        <p className="italic">
                          "In my opinion, cycling is the best form of exercise. I think it's more enjoyable than
                          running, and I feel that it's better for your joints as well."
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Part 2 Strategies */}
            <TabsContent value="part2" className="space-y-4">
              <Alert>
                <Clock className="h-4 w-4" />
                <AlertTitle>Part 2: Long Turn (Cue Card)</AlertTitle>
                <AlertDescription>
                  You'll have 1 minute to prepare and 1-2 minutes to speak about a given topic using points on a cue
                  card.
                </AlertDescription>
              </Alert>

              <Card className="border">
                <CardHeader>
                  <CardTitle className="text-lg">Preparation Strategies (1 minute)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="quick-notes">
                      <AccordionTrigger>Make Quick Notes</AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <p className="text-sm">Use your 1-minute preparation time effectively:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Read the whole cue card quickly</li>
                          <li>Jot down key words for each bullet point (not full sentences)</li>
                          <li>Note any specific examples or details you can include</li>
                          <li>Think of a brief introduction and conclusion</li>
                        </ul>
                        <div className="bg-muted p-3 rounded-md mt-2">
                          <p className="text-sm font-medium">Example Cue Card:</p>
                          <p className="text-sm">
                            "Describe a book you have recently read. You should say:
                            <br />- What kind of book it is
                            <br />- What it is about
                            <br />- Why you decided to read it
                            <br />
                            And explain whether you would recommend it to others."
                          </p>
                          <p className="text-sm font-medium mt-2">Example Notes:</p>
                          <p className="text-sm">
                            <strong>Type:</strong> Novel, fiction, thriller
                            <br />
                            <strong>About:</strong> Detective, murder mystery, small town
                            <br />
                            <strong>Why read:</strong> Friend recommendation, favorite author, good reviews
                            <br />
                            <strong>Recommend?:</strong> Yes - engaging plot, unexpected ending
                            <br />
                            <strong>Intro:</strong> Recently read "The Silent Patient"
                            <br />
                            <strong>Conclusion:</strong> Enjoyed it, recommend to thriller fans
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="structure-plan">
                      <AccordionTrigger>Plan Your Structure</AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <p className="text-sm">Organize your talk in a logical sequence:</p>
                        <div className="bg-muted p-3 rounded-md">
                          <p className="text-sm font-medium">Recommended structure:</p>
                          <p className="text-sm">
                            <strong>Introduction:</strong> Briefly introduce the topic (1 sentence)
                            <br />
                            <strong>Main points:</strong> Address each bullet point on the cue card (1-2 sentences each)
                            <br />
                            <strong>Additional details:</strong> Add interesting or personal information
                            <br />
                            <strong>Conclusion:</strong> Summarize or give a final thought (1 sentence)
                          </p>
                        </div>
                        <p className="text-sm mt-2">
                          This structure ensures you cover all required points and helps you organize your thoughts.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="what-if">
                      <AccordionTrigger>What If You Don't Have a Real Example?</AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <p className="text-sm">If you can't think of a real example, it's acceptable to create one:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Invent a realistic scenario based on your knowledge</li>
                          <li>Include specific details to make it sound authentic</li>
                          <li>Draw from movies, books, or others' experiences you know about</li>
                          <li>Focus on making it believable and detailed</li>
                        </ul>
                        <p className="text-sm mt-2">
                          The examiner is assessing your English, not whether your story is true.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card className="border">
                <CardHeader>
                  <CardTitle className="text-lg">Speaking Strategies (1-2 minutes)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="start-strong">
                      <AccordionTrigger>Start Strong</AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <p className="text-sm">Begin with a clear introduction to engage the examiner:</p>
                        <div className="bg-muted p-3 rounded-md">
                          <p className="text-sm font-medium">Useful opening phrases:</p>
                          <p className="text-sm italic">
                            "I'd like to talk about..."
                            <br />
                            "I'm going to describe..."
                            <br />
                            "The [book/person/place] I've chosen to talk about is..."
                          </p>
                        </div>
                        <p className="text-sm mt-2">
                          A strong start helps set the tone for your talk and builds your confidence.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="develop-points">
                      <AccordionTrigger>Develop Each Point Fully</AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <p className="text-sm">For each bullet point on the cue card:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Address the point directly</li>
                          <li>Provide specific details and examples</li>
                          <li>Explain why/how (give reasons or processes)</li>
                          <li>Connect to your personal experience or feelings</li>
                        </ul>
                        <div className="bg-muted p-3 rounded-md mt-2">
                          <p className="text-sm font-medium">Example development for "What kind of book it is":</p>
                          <p className="text-sm italic">
                            "It's a psychological thriller novel. This genre typically involves suspense and unexpected
                            plot twists that keep readers guessing. I particularly enjoy this type of book because it
                            challenges me to try to solve the mystery before the ending is revealed."
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="use-time">
                      <AccordionTrigger>Use Your Time Effectively</AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <p className="text-sm">Manage your 1-2 minutes wisely:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Spend roughly equal time on each bullet point</li>
                          <li>If you finish early, add more details or examples</li>
                          <li>If running out of time, briefly address remaining points</li>
                          <li>Always include a short conclusion, even if brief</li>
                        </ul>
                        <p className="text-sm mt-2">
                          Practice with a timer to develop a sense of how long 2 minutes feels.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="signposting">
                      <AccordionTrigger>Use Signposting Language</AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <p className="text-sm">Help the examiner follow your talk with clear transitions:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                          <div className="bg-muted p-2 rounded">
                            <strong>Introducing points:</strong>
                            <p className="italic mt-1">
                              "Regarding what kind of book it is..."
                              <br />
                              "As for why I decided to read it..."
                              <br />
                              "When it comes to the content..."
                            </p>
                          </div>
                          <div className="bg-muted p-2 rounded">
                            <strong>Adding information:</strong>
                            <p className="italic mt-1">
                              "In addition to that..."
                              <br />
                              "Another interesting aspect is..."
                              <br />
                              "I should also mention that..."
                            </p>
                          </div>
                          <div className="bg-muted p-2 rounded">
                            <strong>Giving examples:</strong>
                            <p className="italic mt-1">
                              "For instance..."
                              <br />
                              "A good example of this is..."
                              <br />
                              "To illustrate this point..."
                            </p>
                          </div>
                          <div className="bg-muted p-2 rounded">
                            <strong>Concluding:</strong>
                            <p className="italic mt-1">
                              "To sum up..."
                              <br />
                              "All in all..."
                              <br />
                              "That's why I would recommend it..."
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card className="border">
                <CardHeader>
                  <CardTitle className="text-lg">Language Features to Include</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-muted p-3 rounded">
                      <h4 className="font-medium">Descriptive Vocabulary</h4>
                      <p className="text-sm mt-1">Use vivid adjectives and specific nouns to create a clear picture.</p>
                      <div className="text-sm mt-2">
                        <p className="italic">
                          "It was a captivating historical novel set in medieval France during a tumultuous period of
                          political upheaval."
                        </p>
                      </div>
                    </div>
                    <div className="bg-muted p-3 rounded">
                      <h4 className="font-medium">Narrative Tenses</h4>
                      <p className="text-sm mt-1">Use past simple, past continuous, and past perfect appropriately.</p>
                      <div className="text-sm mt-2">
                        <p className="italic">
                          "I had been looking for a new book when my colleague recommended this one. While I was reading
                          it, I realized why it had received so many positive reviews."
                        </p>
                      </div>
                    </div>
                    <div className="bg-muted p-3 rounded">
                      <h4 className="font-medium">Complex Sentences</h4>
                      <p className="text-sm mt-1">Combine ideas using relative clauses and conjunctions.</p>
                      <div className="text-sm mt-2">
                        <p className="italic">
                          "The author, who has written several bestsellers, created characters that felt incredibly
                          realistic, which is why I became so invested in the story."
                        </p>
                      </div>
                    </div>
                    <div className="bg-muted p-3 rounded">
                      <h4 className="font-medium">Personal Response</h4>
                      <p className="text-sm mt-1">Include your thoughts, feelings, and reactions.</p>
                      <div className="text-sm mt-2">
                        <p className="italic">
                          "I was particularly moved by the main character's journey because it reminded me of challenges
                          I've faced in my own life. The ending left me feeling both satisfied and thoughtful."
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Part 3 Strategies */}
            <TabsContent value="part3" className="space-y-4">
              <Alert>
                <MessageSquare className="h-4 w-4" />
                <AlertTitle>Part 3: Discussion</AlertTitle>
                <AlertDescription>
                  4-5 minutes of more abstract questions related to the Part 2 topic, requiring you to express and
                  justify opinions.
                </AlertDescription>
              </Alert>

              <Card className="border">
                <CardHeader>
                  <CardTitle className="text-lg">Understanding Part 3 Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="question-types">
                      <AccordionTrigger>Recognize Question Types</AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <p className="text-sm">Part 3 typically includes these types of questions:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                          <div className="bg-muted p-2 rounded">
                            <strong>Opinion questions:</strong>
                            <p className="italic mt-1">
                              "Do you think reading is more beneficial than watching TV? Why?"
                              <br />
                              "What's your view on digital books versus printed books?"
                            </p>
                          </div>
                          <div className="bg-muted p-2 rounded">
                            <strong>Comparison questions:</strong>
                            <p className="italic mt-1">
                              "How has reading changed compared to twenty years ago?"
                              <br />
                              "In what ways do children and adults differ in their reading habits?"
                            </p>
                          </div>
                          <div className="bg-muted p-2 rounded">
                            <strong>Speculation questions:</strong>
                            <p className="italic mt-1">
                              "How might technology change the way we read in the future?"
                              <br />
                              "What would happen if schools stopped teaching literature?"
                            </p>
                          </div>
                          <div className="bg-muted p-2 rounded">
                            <strong>Evaluation questions:</strong>
                            <p className="italic mt-1">
                              "What are the advantages and disadvantages of reading fiction?"
                              <br />
                              "How effective are book clubs in encouraging people to read more?"
                            </p>
                          </div>
                        </div>
                        <p className="text-sm mt-2">
                          Identifying the question type helps you structure an appropriate response.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="abstract-concrete">
                      <AccordionTrigger>Move from Abstract to Concrete</AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <p className="text-sm">Part 3 questions are often abstract. A good strategy is to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm">
                          <li>Address the abstract concept first</li>
                          <li>Then provide concrete examples to support your point</li>
                          <li>Finally, connect back to the broader idea</li>
                        </ol>
                        <div className="bg-muted p-3 rounded-md mt-2">
                          <p className="text-sm font-medium">Example:</p>
                          <p className="text-sm">Question: "How does literature reflect society?"</p>
                          <p className="text-sm italic mt-1">
                            <strong>Abstract:</strong> "Literature often serves as a mirror for social issues and
                            cultural values of its time. Authors observe the world around them and incorporate these
                            observations into their work."
                            <br />
                            <strong>Concrete:</strong> "For example, George Orwell's '1984' reflected the fears of
                            totalitarianism during the Cold War era. Similarly, contemporary novels often address issues
                            like climate change or technological dependence."
                            <br />
                            <strong>Connect back:</strong> "This is why studying literature from different periods can
                            give us valuable insights into how society has evolved over time."
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card className="border">
                <CardHeader>
                  <CardTitle className="text-lg">Response Strategies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="develop-answers">
                      <AccordionTrigger>Develop In-Depth Answers</AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <p className="text-sm">Use the PEEL structure for developed responses:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>
                            <strong>P</strong>oint - State your main idea or opinion
                          </li>
                          <li>
                            <strong>E</strong>xplain - Elaborate on your point
                          </li>
                          <li>
                            <strong>E</strong>xample - Provide a specific example
                          </li>
                          <li>
                            <strong>L</strong>ink - Connect back to the question
                          </li>
                        </ul>
                        <div className="bg-muted p-3 rounded-md mt-2">
                          <p className="text-sm font-medium">Example:</p>
                          <p className="text-sm">Question: "Is it important for children to read fiction?"</p>
                          <p className="text-sm italic mt-1">
                            <strong>Point:</strong> "Yes, I believe reading fiction is crucial for children's
                            development."
                            <br />
                            <strong>Explain:</strong> "Fiction helps children develop empathy by allowing them to
                            experience different perspectives and emotions through characters."
                            <br />
                            <strong>Example:</strong> "For instance, books like 'Charlotte's Web' teach children about
                            friendship and loss in a way that's accessible and meaningful to them."
                            <br />
                            <strong>Link:</strong> "This emotional education is just as important as the factual
                            knowledge they gain from non-fiction, making fiction an essential part of a child's reading
                            diet."
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="consider-perspectives">
                      <AccordionTrigger>Consider Multiple Perspectives</AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <p className="text-sm">Demonstrate critical thinking by examining different viewpoints:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Present your own view first</li>
                          <li>Acknowledge alternative perspectives</li>
                          <li>Evaluate strengths and weaknesses of different views</li>
                          <li>Conclude with a balanced position</li>
                        </ul>
                        <div className="bg-muted p-3 rounded-md mt-2">
                          <p className="text-sm font-medium">Example:</p>
                          <p className="text-sm">Question: "Should classic literature be compulsory in schools?"</p>
                          <p className="text-sm italic mt-1">
                            "I believe classic literature should be included in school curricula because it provides
                            cultural context and exposes students to influential works. However, I understand the
                            argument that some classics may seem irrelevant or inaccessible to today's students. Perhaps
                            the best approach is a balance, where students study some classics alongside contemporary
                            works that might feel more relevant to their lives."
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="buying-time">
                      <AccordionTrigger>Strategies for Buying Time</AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <p className="text-sm">If you need a moment to think, use these phrases naturally:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                          <div className="bg-muted p-2 rounded">
                            <strong>Rephrasing the question:</strong>
                            <p className="italic mt-1">
                              "So you're asking about..."
                              <br />
                              "If I understand correctly, you want to know..."
                            </p>
                          </div>
                          <div className="bg-muted p-2 rounded">
                            <strong>Acknowledging complexity:</strong>
                            <p className="italic mt-1">
                              "That's an interesting/complex question..."
                              <br />
                              "There are several aspects to consider..."
                            </p>
                          </div>
                          <div className="bg-muted p-2 rounded">
                            <strong>Framing your thinking:</strong>
                            <p className="italic mt-1">
                              "Let me think about this for a moment..."
                              <br />
                              "I'd like to approach this from a few angles..."
                            </p>
                          </div>
                          <div className="bg-muted p-2 rounded">
                            <strong>Structuring your answer:</strong>
                            <p className="italic mt-1">
                              "I think there are two main points to consider..."
                              <br />
                              "I'd like to start by saying..."
                            </p>
                          </div>
                        </div>
                        <p className="text-sm mt-2">
                          These phrases sound natural and give you valuable seconds to organize your thoughts.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card className="border">
                <CardHeader>
                  <CardTitle className="text-lg">Language Features to Include</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Alert>
                      <Lightbulb className="h-4 w-4" />
                      <AlertTitle>Key Tip</AlertTitle>
                      <AlertDescription>
                        Part 3 is your opportunity to demonstrate more sophisticated language and complex ideas. This is
                        where you can really boost your score.
                      </AlertDescription>
                    </Alert>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-muted p-3 rounded">
                        <h4 className="font-medium">Opinion Language</h4>
                        <p className="text-sm mt-1">Use a range of expressions to present your views.</p>
                        <div className="text-sm mt-2">
                          <p className="italic">
                            "From my perspective..."
                            <br />
                            "I'm inclined to believe that..."
                            <br />
                            "It seems to me that..."
                            <br />
                            "I'm convinced that..."
                          </p>
                        </div>
                      </div>
                      <div className="bg-muted p-3 rounded">
                        <h4 className="font-medium">Speculative Language</h4>
                        <p className="text-sm mt-1">Use conditionals and modals for hypothetical situations.</p>
                        <div className="text-sm mt-2">
                          <p className="italic">
                            "If digital books completely replaced printed books, we might lose the tactile experience of
                            reading."
                            <br />
                            "Should this trend continue, it could lead to significant changes in how we consume
                            literature."
                          </p>
                        </div>
                      </div>
                      <div className="bg-muted p-3 rounded">
                        <h4 className="font-medium">Comparison Language</h4>
                        <p className="text-sm mt-1">Use phrases to compare and contrast ideas.</p>
                        <div className="text-sm mt-2">
                          <p className="italic">
                            "While older generations tend to prefer physical books, younger people are more likely to
                            embrace e-readers."
                            <br />
                            "On the one hand... on the other hand..."
                            <br />
                            "In contrast to the past, nowadays..."
                          </p>
                        </div>
                      </div>
                      <div className="bg-muted p-3 rounded">
                        <h4 className="font-medium">Concession Language</h4>
                        <p className="text-sm mt-1">Acknowledge other viewpoints while maintaining your position.</p>
                        <div className="text-sm mt-2">
                          <p className="italic">
                            "Although some people argue that..., I still believe..."
                            <br />
                            "I take the point that..., however..."
                            <br />
                            "While there's some truth to that view, I think..."
                          </p>
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
