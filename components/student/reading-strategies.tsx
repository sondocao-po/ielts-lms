import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, FileText, Info, Search } from "lucide-react"

export function ReadingStrategies() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>IELTS Reading Strategies</CardTitle>
          <CardDescription>
            Learn effective strategies to approach different types of IELTS reading passages and questions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="before-reading">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="before-reading">Before Reading</TabsTrigger>
              <TabsTrigger value="during-reading">During Reading</TabsTrigger>
              <TabsTrigger value="after-reading">After Reading</TabsTrigger>
            </TabsList>

            <TabsContent value="before-reading" className="space-y-4 pt-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Preparation is key</AlertTitle>
                <AlertDescription>
                  What you do before you start reading can significantly impact your performance
                </AlertDescription>
              </Alert>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="preview-questions">
                  <AccordionTrigger>Preview the questions</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p className="text-sm">
                      Before reading the passage, take 1-2 minutes to quickly look through all the questions. This will
                      give you an idea of:
                    </p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>What information you need to find</li>
                      <li>What types of questions you'll be answering</li>
                      <li>Which sections of the text might be most important</li>
                    </ul>
                    <p className="text-sm">
                      Underline or circle key words in the questions that you can look for in the passage.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="skim-passage">
                  <AccordionTrigger>Skim the passage</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p className="text-sm">
                      Spend 1-2 minutes quickly skimming the passage to get a general idea of its content and structure:
                    </p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Read the title, headings, and subheadings</li>
                      <li>Read the first and last paragraphs</li>
                      <li>Read the first sentence of each paragraph</li>
                      <li>Note any bold or italicized text</li>
                      <li>Look at any diagrams, charts, or images</li>
                    </ul>
                    <p className="text-sm">
                      This will help you create a mental map of the passage, making it easier to locate specific
                      information later.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="predict-content">
                  <AccordionTrigger>Predict the content</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p className="text-sm">Based on your skimming and preview of questions, try to predict:</p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>What the main topic of the passage is</li>
                      <li>What the author's purpose might be (to inform, persuade, compare, etc.)</li>
                      <li>What types of information might be included</li>
                    </ul>
                    <p className="text-sm">
                      This activates your prior knowledge and prepares your brain to process the information more
                      effectively.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="plan-approach">
                  <AccordionTrigger>Plan your approach</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p className="text-sm">Decide on your strategy for tackling the passage and questions:</p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Will you answer questions in order or by question type?</li>
                      <li>How much time will you allocate to each section?</li>
                      <li>Which questions seem easiest and which might need more time?</li>
                    </ul>
                    <p className="text-sm">Having a plan helps you manage your time effectively and reduces anxiety.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="during-reading" className="space-y-4 pt-4">
              <Alert>
                <Search className="h-4 w-4" />
                <AlertTitle>Active reading techniques</AlertTitle>
                <AlertDescription>How to read efficiently and find the information you need</AlertDescription>
              </Alert>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="scanning">
                  <AccordionTrigger>Scanning for specific information</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p className="text-sm">Scanning is looking for specific information without reading every word:</p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Look for keywords from the questions</li>
                      <li>Pay attention to names, dates, numbers, and capitalized words</li>
                      <li>Move your eyes quickly down the page until you find relevant information</li>
                      <li>Once you find a keyword, read the surrounding text carefully</li>
                    </ul>
                    <p className="text-sm">
                      Scanning is particularly useful for factual questions, matching information, and sentence
                      completion.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="paragraph-reading">
                  <AccordionTrigger>Paragraph-focused reading</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p className="text-sm">For questions that require understanding of specific paragraphs:</p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Identify which paragraph contains the information you need</li>
                      <li>Read that paragraph carefully, focusing on the main idea and supporting details</li>
                      <li>Pay attention to the first and last sentences, which often contain key information</li>
                      <li>
                        Look for signal words that indicate relationships between ideas (however, therefore, in
                        contrast, etc.)
                      </li>
                    </ul>
                    <p className="text-sm">
                      This approach works well for matching headings, paragraph information, and writer's views/claims
                      questions.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="identifying-paraphrasing">
                  <AccordionTrigger>Identifying paraphrasing</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p className="text-sm">IELTS questions rarely use the exact wording from the passage:</p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Look for synonyms of keywords from the questions</li>
                      <li>Recognize when ideas are expressed differently but mean the same thing</li>
                      <li>Pay attention to negative expressions that might change the meaning</li>
                      <li>Be aware of qualifying words (some, many, often, usually) that modify the meaning</li>
                    </ul>
                    <p className="text-sm">
                      This skill is crucial for true/false/not given, yes/no/not given, and multiple choice questions.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="note-taking">
                  <AccordionTrigger>Strategic note-taking</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p className="text-sm">Making brief notes can help you keep track of information:</p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Underline or circle key information in the passage (if allowed)</li>
                      <li>Write brief notes next to paragraphs to summarize main ideas</li>
                      <li>Mark the location of information that answers specific questions</li>
                      <li>Use symbols or abbreviations to save time</li>
                    </ul>
                    <p className="text-sm">
                      Note-taking helps you organize information and avoid re-reading the same sections repeatedly.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="after-reading" className="space-y-4 pt-4">
              <Alert>
                <FileText className="h-4 w-4" />
                <AlertTitle>Finalizing your answers</AlertTitle>
                <AlertDescription>How to check your work and maximize your score</AlertDescription>
              </Alert>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="review-answers">
                  <AccordionTrigger>Review your answers</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p className="text-sm">If time permits, review your answers:</p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Check that you've answered all questions</li>
                      <li>Verify that your answers make logical sense</li>
                      <li>Confirm that your answers fit grammatically in sentence completion questions</li>
                      <li>Double-check spelling, especially for words copied from the passage</li>
                    </ul>
                    <p className="text-sm">
                      Even a quick review can help you catch careless mistakes that could cost you points.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="educated-guesses">
                  <AccordionTrigger>Make educated guesses</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p className="text-sm">For any questions you're unsure about:</p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Never leave a question unanswered - there's no penalty for wrong answers</li>
                      <li>Use the process of elimination for multiple choice questions</li>
                      <li>
                        For true/false/not given questions, remember that "not given" means the information is neither
                        confirmed nor contradicted
                      </li>
                      <li>
                        For matching questions, use the process of elimination by crossing off options as you use them
                      </li>
                    </ul>
                    <p className="text-sm">An educated guess is better than no answer at all.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="transfer-answers">
                  <AccordionTrigger>Transfer answers carefully</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p className="text-sm">When transferring answers to the answer sheet:</p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Double-check question numbers to ensure answers go in the correct spaces</li>
                      <li>Write clearly and legibly</li>
                      <li>Follow instructions regarding word limits and capitalization</li>
                      <li>Make sure you've transferred ALL your answers</li>
                    </ul>
                    <p className="text-sm">
                      Many test-takers lose points due to careless errors when transferring answers.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="reflect-performance">
                  <AccordionTrigger>Reflect on your performance</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p className="text-sm">After the test, take time to reflect:</p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Which question types did you find most challenging?</li>
                      <li>Did you manage your time effectively?</li>
                      <li>Were there vocabulary items that caused difficulty?</li>
                      <li>What strategies worked well for you?</li>
                    </ul>
                    <p className="text-sm">This reflection will help you focus your preparation for future tests.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Question Type Strategies</CardTitle>
          <CardDescription>Specific approaches for different IELTS reading question types</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="multiple-choice">
              <AccordionTrigger>Multiple Choice Questions</AccordionTrigger>
              <AccordionContent className="space-y-2">
                <p className="text-sm">Strategy:</p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Read the question stem carefully to understand what you're looking for</li>
                  <li>Skim the options before searching the text</li>
                  <li>Eliminate obviously incorrect options</li>
                  <li>Look for specific evidence in the text that supports or contradicts each option</li>
                  <li>
                    Be careful of distractors that contain information from the text but don't answer the question
                  </li>
                </ul>
                <p className="text-sm font-medium mt-2">Common pitfalls:</p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Selecting an option because it contains words from the passage</li>
                  <li>Choosing an answer based on your own knowledge rather than the text</li>
                  <li>Missing subtle differences between similar-sounding options</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="true-false-not-given">
              <AccordionTrigger>True/False/Not Given Questions</AccordionTrigger>
              <AccordionContent className="space-y-2">
                <p className="text-sm">Strategy:</p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>
                    Understand the difference: True (statement agrees with text), False (statement contradicts text),
                    Not Given (information not mentioned)
                  </li>
                  <li>Identify keywords in the statement and locate relevant information in the passage</li>
                  <li>Compare the statement with the information in the passage precisely</li>
                  <li>Be careful with qualifying words (some, many, all, never, always)</li>
                  <li>Don't use your own knowledge to determine if a statement is true or false</li>
                </ul>
                <p className="text-sm font-medium mt-2">Common pitfalls:</p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Confusing "False" with "Not Given" - remember that "False" requires a contradiction</li>
                  <li>Making assumptions beyond what's stated in the text</li>
                  <li>Missing paraphrased information</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="matching-headings">
              <AccordionTrigger>Matching Headings Questions</AccordionTrigger>
              <AccordionContent className="space-y-2">
                <p className="text-sm">Strategy:</p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Focus on understanding the main idea of each paragraph</li>
                  <li>Read the first and last sentences of paragraphs carefully</li>
                  <li>Look for words that indicate the paragraph's purpose or function</li>
                  <li>Cross off headings as you use them (if allowed)</li>
                  <li>If unsure, move on and come back - sometimes later paragraphs make earlier ones clearer</li>
                </ul>
                <p className="text-sm font-medium mt-2">Common pitfalls:</p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Focusing on specific details rather than the main idea</li>
                  <li>Selecting a heading that matches only part of the paragraph</li>
                  <li>
                    Being misled by familiar words that appear in both the heading and paragraph but in different
                    contexts
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="matching-information">
              <AccordionTrigger>Matching Information Questions</AccordionTrigger>
              <AccordionContent className="space-y-2">
                <p className="text-sm">Strategy:</p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Identify keywords in each statement</li>
                  <li>Scan the paragraphs for these keywords or their synonyms</li>
                  <li>When you find a potential match, read carefully to confirm it's the correct information</li>
                  <li>Cross off statements as you match them (if allowed)</li>
                  <li>Remember that paragraphs may contain information for multiple statements or none at all</li>
                </ul>
                <p className="text-sm font-medium mt-2">Common pitfalls:</p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Being misled by keywords that appear in multiple paragraphs</li>
                  <li>Not recognizing paraphrased information</li>
                  <li>Rushing and not reading carefully enough to confirm matches</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="sentence-completion">
              <AccordionTrigger>Sentence Completion Questions</AccordionTrigger>
              <AccordionContent className="space-y-2">
                <p className="text-sm">Strategy:</p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Read the incomplete sentence to understand what information is needed</li>
                  <li>Identify keywords in the sentence to help locate the relevant section of the passage</li>
                  <li>Pay attention to the grammar of the sentence - your answer must fit grammatically</li>
                  <li>Check word limits carefully (usually 1-3 words)</li>
                  <li>Use only words from the passage, with no changes to form</li>
                </ul>
                <p className="text-sm font-medium mt-2">Common pitfalls:</p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Exceeding the word limit</li>
                  <li>Using words that don't fit grammatically</li>
                  <li>Changing the form of words from the passage</li>
                  <li>Including unnecessary words</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Reading Passage Types</CardTitle>
          <CardDescription>How to approach different types of IELTS reading passages</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="h-5 w-5 text-blue-500" />
                <h3 className="font-medium">Academic Articles</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Academic articles often present research findings, theories, or analyses of complex topics.
              </p>
              <div className="text-sm space-y-1">
                <p className="font-medium">Key features:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Formal language and specialized vocabulary</li>
                  <li>Abstract concepts and theoretical frameworks</li>
                  <li>Evidence-based arguments and references to studies</li>
                </ul>
                <p className="font-medium mt-2">Approach:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Pay special attention to the introduction and conclusion</li>
                  <li>Look for clear statements of the author's position or findings</li>
                  <li>Note how evidence is used to support claims</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="h-5 w-5 text-blue-500" />
                <h3 className="font-medium">Descriptive Texts</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Descriptive texts provide detailed information about places, processes, objects, or phenomena.
              </p>
              <div className="text-sm space-y-1">
                <p className="font-medium">Key features:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Rich, detailed descriptions</li>
                  <li>Chronological or spatial organization</li>
                  <li>Technical vocabulary related to the subject</li>
                </ul>
                <p className="font-medium mt-2">Approach:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Create a mental image or map of what's being described</li>
                  <li>Pay attention to sequence markers for processes</li>
                  <li>Note specific details, measurements, or characteristics</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="h-5 w-5 text-blue-500" />
                <h3 className="font-medium">Argumentative Texts</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Argumentative texts present a position on an issue and provide reasoning to support it.
              </p>
              <div className="text-sm space-y-1">
                <p className="font-medium">Key features:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Clear thesis or position statement</li>
                  <li>Supporting evidence and counterarguments</li>
                  <li>Persuasive language and rhetorical devices</li>
                </ul>
                <p className="font-medium mt-2">Approach:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Identify the author's main argument early in the passage</li>
                  <li>Distinguish between facts, opinions, and supporting evidence</li>
                  <li>Note any concessions or counterarguments the author addresses</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="h-5 w-5 text-blue-500" />
                <h3 className="font-medium">Historical Texts</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Historical texts discuss past events, developments, or figures.
              </p>
              <div className="text-sm space-y-1">
                <p className="font-medium">Key features:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Chronological organization</li>
                  <li>Dates, names, and specific events</li>
                  <li>Cause-and-effect relationships</li>
                </ul>
                <p className="font-medium mt-2">Approach:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Pay attention to dates and sequence markers</li>
                  <li>Note relationships between events (causes and effects)</li>
                  <li>Identify the significance or impact of historical developments</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
