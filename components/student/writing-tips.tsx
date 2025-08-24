import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, AlertTriangle, Clock, PenTool, FileText } from "lucide-react"

export function WritingTips() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">IELTS Writing Tips & Techniques</CardTitle>
          <CardDescription>Master these tips and techniques to improve your IELTS writing score</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="general">
            <TabsList className="grid grid-cols-4 w-full max-w-2xl mb-4">
              <TabsTrigger value="general">General Tips</TabsTrigger>
              <TabsTrigger value="task1">Task 1 Tips</TabsTrigger>
              <TabsTrigger value="task2">Task 2 Tips</TabsTrigger>
              <TabsTrigger value="common-mistakes">Common Mistakes</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="space-y-4">
              <Alert>
                <Clock className="h-4 w-4" />
                <AlertTitle>Time Management is Critical</AlertTitle>
                <AlertDescription>
                  Spend about 20 minutes on Task 1 and 40 minutes on Task 2. Task 2 is worth more marks.
                </AlertDescription>
              </Alert>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="planning">
                  <AccordionTrigger>Plan Before You Write</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Spend 3-5 minutes planning your essay structure before you start writing.</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      <li>For Task 1: Identify key trends, make comparisons, and organize data logically</li>
                      <li>For Task 2: Decide on your position, main points, and supporting examples</li>
                      <li>Create a quick outline with introduction, body paragraphs, and conclusion</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="structure">
                  <AccordionTrigger>Use Clear Structure</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">A well-structured essay is easier to read and scores higher.</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      <li>Introduction: Paraphrase the question and provide an overview</li>
                      <li>Body paragraphs: One main idea per paragraph with supporting details</li>
                      <li>Conclusion: Summarize main points (and give your opinion for Task 2)</li>
                      <li>Use paragraphs consistently - don't write one long block of text</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="vocabulary">
                  <AccordionTrigger>Use Varied Vocabulary</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Avoid repetition by using synonyms and a range of vocabulary.</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      <li>Use topic-specific vocabulary where appropriate</li>
                      <li>Include some less common words and collocations</li>
                      <li>Avoid overusing the same words - find alternatives</li>
                      <li>Use precise words rather than vague ones</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="grammar">
                  <AccordionTrigger>Demonstrate Grammatical Range</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Use a mix of simple and complex sentence structures.</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      <li>Include complex sentences with subordinate clauses</li>
                      <li>Use conditional sentences where appropriate</li>
                      <li>Include passive voice when focusing on the action rather than the doer</li>
                      <li>Use a variety of tenses correctly</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="cohesion">
                  <AccordionTrigger>Use Cohesive Devices</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Connect your ideas smoothly using linking words and phrases.</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      <li>Sequence: firstly, secondly, finally</li>
                      <li>Addition: furthermore, in addition, moreover</li>
                      <li>Contrast: however, nevertheless, on the other hand</li>
                      <li>Cause/effect: therefore, consequently, as a result</li>
                      <li>Examples: for instance, such as, for example</li>
                    </ul>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Note: Don't overuse these - one or two per paragraph is sufficient.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="wordcount">
                  <AccordionTrigger>Meet the Word Count</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Write at least the minimum word count for each task.</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      <li>Task 1: At least 150 words</li>
                      <li>Task 2: At least 250 words</li>
                      <li>Writing significantly under the word count will reduce your score</li>
                      <li>Writing much more than required can lead to errors and poor organization</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="review">
                  <AccordionTrigger>Review Your Work</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Save 2-3 minutes at the end to check your writing.</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      <li>Check for spelling and grammar errors</li>
                      <li>Ensure you've answered all parts of the question</li>
                      <li>Check paragraph structure and cohesion</li>
                      <li>Look for repeated words that could be replaced with synonyms</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="task1" className="space-y-4">
              <Alert>
                <FileText className="h-4 w-4" />
                <AlertTitle>Task 1 Overview</AlertTitle>
                <AlertDescription>
                  Always include an overview paragraph that summarizes the main trends or features.
                </AlertDescription>
              </Alert>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="graphs">
                  <AccordionTrigger>Graphs and Charts</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">When describing graphs and charts:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      <li>Identify the main trends (increase, decrease, fluctuation, stability)</li>
                      <li>Use appropriate language for describing changes (rose sharply, declined gradually)</li>
                      <li>Make comparisons between different data sets</li>
                      <li>Include specific figures to support your description</li>
                      <li>Organize information logically (e.g., chronologically or by significance)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="maps">
                  <AccordionTrigger>Maps and Diagrams</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">When describing maps or diagrams:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      <li>Identify the main features and their locations</li>
                      <li>
                        For maps showing change over time, focus on what has changed and what has remained the same
                      </li>
                      <li>Use appropriate prepositions of place (next to, opposite, to the north of)</li>
                      <li>For process diagrams, describe the stages in the correct sequence</li>
                      <li>Use passive voice where appropriate (e.g., "The water is filtered through...")</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="language">
                  <AccordionTrigger>Language for Data Description</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Use a variety of language to describe data:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      <li>
                        <strong>Trends:</strong> increase, rise, grow, decline, fall, decrease, remain stable
                      </li>
                      <li>
                        <strong>Adverbs:</strong> dramatically, significantly, slightly, gradually, steadily
                      </li>
                      <li>
                        <strong>Comparisons:</strong> higher than, lower than, similar to, twice as much as
                      </li>
                      <li>
                        <strong>Superlatives:</strong> the highest, the lowest, the most significant
                      </li>
                      <li>
                        <strong>Time phrases:</strong> over the period, between 2010 and 2020, throughout the decade
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="structure-task1">
                  <AccordionTrigger>Task 1 Structure</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Organize your Task 1 response in this way:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      <li>
                        <strong>Introduction:</strong> Paraphrase what the visual information shows
                      </li>
                      <li>
                        <strong>Overview:</strong> Summarize 2-3 main trends or features (very important!)
                      </li>
                      <li>
                        <strong>Detail paragraphs:</strong> 1-2 paragraphs with specific data and comparisons
                      </li>
                      <li>No conclusion is needed for Task 1</li>
                    </ul>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Note: The overview is essential for a high score - don't skip it!
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="figures">
                  <AccordionTrigger>Using Figures and Data</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">When including specific figures:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      <li>Select key figures that illustrate the main trends</li>
                      <li>Don't try to include every single number from the visual</li>
                      <li>Round numbers when appropriate (e.g., "approximately 32.7%" or "just over 30%")</li>
                      <li>Use a variety of ways to express numbers (fractions, percentages, proportions)</li>
                      <li>Check that your figures are accurate</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="task2" className="space-y-4">
              <Alert>
                <PenTool className="h-4 w-4" />
                <AlertTitle>Task 2 Focus</AlertTitle>
                <AlertDescription>
                  Always address all parts of the question and maintain a clear position throughout your essay.
                </AlertDescription>
              </Alert>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="question-types">
                  <AccordionTrigger>Understanding Question Types</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Identify the type of Task 2 question to structure your response appropriately:
                    </p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      <li>
                        <strong>Opinion:</strong> Do you agree or disagree? / To what extent do you agree?
                      </li>
                      <li>
                        <strong>Discussion:</strong> Discuss both views and give your opinion
                      </li>
                      <li>
                        <strong>Advantages/Disadvantages:</strong> Discuss the benefits and drawbacks
                      </li>
                      <li>
                        <strong>Problem/Solution:</strong> Explain problems and suggest solutions
                      </li>
                      <li>
                        <strong>Two-part question:</strong> Answer both parts of the question
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="introduction">
                  <AccordionTrigger>Writing an Effective Introduction</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Your introduction should:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      <li>Paraphrase the question (don't copy it word for word)</li>
                      <li>Provide some background or context to the issue</li>
                      <li>State your position clearly (for opinion essays)</li>
                      <li>Be concise - 2-3 sentences is usually sufficient</li>
                      <li>Avoid using memorized phrases like "Nowadays..." or "In modern society..."</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="body">
                  <AccordionTrigger>Developing Body Paragraphs</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Each body paragraph should:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      <li>Start with a clear topic sentence that states the main idea</li>
                      <li>Provide explanations and reasoning</li>
                      <li>Include specific examples to support your points</li>
                      <li>Use cohesive devices to connect ideas</li>
                      <li>Link back to the question and your overall position</li>
                    </ul>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Aim for 2-3 well-developed body paragraphs rather than many short ones.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="conclusion">
                  <AccordionTrigger>Writing a Strong Conclusion</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Your conclusion should:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      <li>Summarize your main points</li>
                      <li>Restate your position (if it's an opinion essay)</li>
                      <li>Provide a final thought or recommendation</li>
                      <li>Be concise - 2-3 sentences is usually sufficient</li>
                      <li>Avoid introducing new ideas</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="examples">
                  <AccordionTrigger>Using Examples Effectively</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Good examples:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      <li>Are specific and relevant to your point</li>
                      <li>Can be from personal experience, common knowledge, or hypothetical situations</li>
                      <li>Should be developed with details, not just mentioned briefly</li>
                      <li>Help to illustrate abstract concepts in concrete ways</li>
                      <li>Are introduced with phrases like "For instance," or "To illustrate,"</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="opinion">
                  <AccordionTrigger>Expressing Your Opinion</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">When giving your opinion:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      <li>Be clear and consistent throughout your essay</li>
                      <li>Use appropriate phrases: "I believe that...", "In my view...", "It seems clear that..."</li>
                      <li>
                        For balanced discussions, you can acknowledge opposing views before stating your preference
                      </li>
                      <li>Support your opinions with reasons and examples</li>
                      <li>Avoid extreme statements or overgeneralizations</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="common-mistakes" className="space-y-4">
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Watch Out!</AlertTitle>
                <AlertDescription>
                  Avoiding these common mistakes can significantly improve your writing score.
                </AlertDescription>
              </Alert>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="task1-mistakes">
                  <AccordionTrigger>Task 1 Common Mistakes</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      <li>
                        <strong>Missing the overview:</strong> Failing to include a paragraph that summarizes the main
                        trends
                      </li>
                      <li>
                        <strong>Describing every detail:</strong> Trying to mention every single piece of data instead
                        of focusing on key trends
                      </li>
                      <li>
                        <strong>Adding opinions:</strong> Including your personal opinions or reasons for trends (stick
                        to describing what you see)
                      </li>
                      <li>
                        <strong>Using informal language:</strong> Using contractions or colloquial expressions
                      </li>
                      <li>
                        <strong>Inaccurate figures:</strong> Misreading or misrepresenting the data
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="task2-mistakes">
                  <AccordionTrigger>Task 2 Common Mistakes</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      <li>
                        <strong>Not answering the question:</strong> Writing about the general topic without addressing
                        the specific question
                      </li>
                      <li>
                        <strong>Inconsistent position:</strong> Changing your opinion throughout the essay
                      </li>
                      <li>
                        <strong>Memorized essays:</strong> Using pre-learned essays that don't fit the question
                      </li>
                      <li>
                        <strong>Lack of examples:</strong> Making claims without supporting them with examples
                      </li>
                      <li>
                        <strong>Unbalanced essay:</strong> Spending too much time on one aspect and neglecting others
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="grammar-mistakes">
                  <AccordionTrigger>Grammar and Vocabulary Mistakes</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      <li>
                        <strong>Subject-verb agreement:</strong> "The number of people are" instead of "The number of
                        people is"
                      </li>
                      <li>
                        <strong>Article usage:</strong> Missing "the" or "a/an" where needed, or adding them where not
                        needed
                      </li>
                      <li>
                        <strong>Preposition errors:</strong> "depend of" instead of "depend on"
                      </li>
                      <li>
                        <strong>Sentence fragments:</strong> Incomplete sentences without a main verb
                      </li>
                      <li>
                        <strong>Run-on sentences:</strong> Multiple ideas joined without proper punctuation
                      </li>
                      <li>
                        <strong>Word form errors:</strong> Using nouns instead of adjectives or vice versa
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="structure-mistakes">
                  <AccordionTrigger>Structure and Organization Mistakes</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      <li>
                        <strong>No paragraphing:</strong> Writing one long block of text
                      </li>
                      <li>
                        <strong>Illogical organization:</strong> Jumping between ideas without clear structure
                      </li>
                      <li>
                        <strong>Overuse of linking words:</strong> Using too many cohesive devices in a single paragraph
                      </li>
                      <li>
                        <strong>Repetitive structure:</strong> Starting every sentence with the same pattern
                      </li>
                      <li>
                        <strong>Unbalanced word count:</strong> Writing too little for Task 2 or too much for Task 1
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="time-mistakes">
                  <AccordionTrigger>Time Management Mistakes</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      <li>
                        <strong>Spending too long on Task 1:</strong> Remember Task 2 is worth more marks
                      </li>
                      <li>
                        <strong>No planning time:</strong> Starting to write immediately without organizing your ideas
                      </li>
                      <li>
                        <strong>No review time:</strong> Not leaving time to check for errors
                      </li>
                      <li>
                        <strong>Slow start:</strong> Spending too much time thinking about the introduction
                      </li>
                      <li>
                        <strong>Rewriting:</strong> Starting over if you make a mistake instead of continuing
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Practice Recommendations</CardTitle>
          <CardDescription>Follow these recommendations to improve your writing skills</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-md flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Regular Practice
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Practice writing at least 2-3 essays per week. Time yourself to simulate exam conditions. Alternate
                    between Task 1 and Task 2 practice.
                  </p>
                </CardContent>
              </Card>

              <Card className="border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-md flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Get Feedback
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Have your writing reviewed by a teacher or use our feedback system. Pay attention to recurring
                    errors and work on fixing them.
                  </p>
                </CardContent>
              </Card>

              <Card className="border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-md flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Study Model Answers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Analyze high-scoring sample essays to understand what examiners are looking for. Note the structure,
                    vocabulary, and grammar used.
                  </p>
                </CardContent>
              </Card>

              <Card className="border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-md flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Expand Vocabulary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Keep a vocabulary notebook for useful phrases and topic-specific words. Learn synonyms for common
                    words to avoid repetition.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
