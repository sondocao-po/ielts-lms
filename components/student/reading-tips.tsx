import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, Clock, Info, Lightbulb, List, Search, Target } from "lucide-react"

export function ReadingTips() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>IELTS Reading Tips & Techniques</CardTitle>
          <CardDescription>Improve your reading score with these proven strategies and techniques</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="time-management">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="time-management">Time Management</TabsTrigger>
              <TabsTrigger value="skimming-scanning">Skimming & Scanning</TabsTrigger>
              <TabsTrigger value="vocabulary">Vocabulary</TabsTrigger>
              <TabsTrigger value="question-types">Question Types</TabsTrigger>
            </TabsList>

            <TabsContent value="time-management" className="space-y-4 pt-4">
              <Alert>
                <Clock className="h-4 w-4" />
                <AlertTitle>Time is limited</AlertTitle>
                <AlertDescription>
                  You have 60 minutes to answer 40 questions across 3 passages. Manage your time wisely!
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Allocate time per section</h3>
                    <p className="text-sm text-muted-foreground">
                      Spend about 20 minutes on each passage. If one section is particularly difficult, move on and come
                      back to it if you have time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Read questions first</h3>
                    <p className="text-sm text-muted-foreground">
                      Quickly read through the questions before reading the passage. This helps you know what
                      information to look for.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Don't spend too long on one question</h3>
                    <p className="text-sm text-muted-foreground">
                      If you're stuck on a question, mark it and move on. Return to it later if you have time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Leave 5 minutes for transferring answers</h3>
                    <p className="text-sm text-muted-foreground">
                      Make sure you leave enough time at the end to transfer your answers to the answer sheet.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="skimming-scanning" className="space-y-4 pt-4">
              <Alert>
                <Search className="h-4 w-4" />
                <AlertTitle>Efficient reading techniques</AlertTitle>
                <AlertDescription>
                  Skimming and scanning are essential techniques for the IELTS Reading test.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Skimming for gist</h3>
                    <p className="text-sm text-muted-foreground">
                      Quickly read the first and last paragraphs, and the first and last sentences of each paragraph to
                      get a general understanding of the text.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Scanning for specific information</h3>
                    <p className="text-sm text-muted-foreground">
                      Look for keywords from the questions in the passage. Pay attention to names, dates, numbers, and
                      other specific details.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Identify paragraph topics</h3>
                    <p className="text-sm text-muted-foreground">
                      Quickly identify the main topic of each paragraph to help you locate information more efficiently.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Use headings and subheadings</h3>
                    <p className="text-sm text-muted-foreground">
                      Pay attention to headings, subheadings, and any text in bold or italics as they often contain
                      important information.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="vocabulary" className="space-y-4 pt-4">
              <Alert>
                <Lightbulb className="h-4 w-4" />
                <AlertTitle>Vocabulary is key</AlertTitle>
                <AlertDescription>
                  A strong vocabulary will help you understand the passages better and answer questions more accurately.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Learn academic vocabulary</h3>
                    <p className="text-sm text-muted-foreground">
                      Focus on learning academic words and phrases that commonly appear in IELTS reading passages.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Understand synonyms and paraphrasing</h3>
                    <p className="text-sm text-muted-foreground">
                      Questions often use synonyms or paraphrased versions of words in the passage. Be prepared to
                      recognize different ways of expressing the same idea.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Context clues</h3>
                    <p className="text-sm text-muted-foreground">
                      If you encounter unfamiliar words, try to understand their meaning from the context.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Prefixes and suffixes</h3>
                    <p className="text-sm text-muted-foreground">
                      Understanding common prefixes and suffixes can help you guess the meaning of unfamiliar words.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="question-types" className="space-y-4 pt-4">
              <Alert>
                <List className="h-4 w-4" />
                <AlertTitle>Question type strategies</AlertTitle>
                <AlertDescription>
                  Different question types require different approaches. Learn how to tackle each type effectively.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Multiple choice</h3>
                    <p className="text-sm text-muted-foreground">
                      Eliminate obviously incorrect options first. Look for specific details in the passage that match
                      or contradict each option.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">True/False/Not Given</h3>
                    <p className="text-sm text-muted-foreground">
                      Remember that "Not Given" means the information is neither confirmed nor contradicted in the
                      passage. Don't make assumptions based on your own knowledge.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Matching headings</h3>
                    <p className="text-sm text-muted-foreground">
                      Focus on the main idea of each paragraph, not just specific details. Look for words that summarize
                      the paragraph's purpose.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Sentence completion</h3>
                    <p className="text-sm text-muted-foreground">
                      Pay attention to word limits and grammar. Make sure your answer fits grammatically into the
                      sentence.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Common Mistakes to Avoid</CardTitle>
          <CardDescription>Being aware of these common pitfalls can help you improve your score</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <Info className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium">Spending too much time on difficult questions</h3>
                <p className="text-sm text-muted-foreground">
                  Don't get stuck on difficult questions. Mark them and come back if you have time.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Info className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium">Reading the entire passage in detail first</h3>
                <p className="text-sm text-muted-foreground">
                  This takes too much time. Instead, skim first and then read relevant sections in detail.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Info className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium">Ignoring instructions</h3>
                <p className="text-sm text-muted-foreground">
                  Pay attention to word limits and other instructions. You'll lose marks if you don't follow them.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Info className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium">Using knowledge outside the passage</h3>
                <p className="text-sm text-muted-foreground">
                  Base your answers only on information in the passage, not on your own knowledge.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Info className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium">Not checking spelling and grammar</h3>
                <p className="text-sm text-muted-foreground">
                  Spelling mistakes in your answers will cost you marks, even if the content is correct.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Practice Recommendations</CardTitle>
          <CardDescription>Follow these recommendations to improve your reading skills effectively</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <Target className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium">Regular timed practice</h3>
                <p className="text-sm text-muted-foreground">
                  Practice under timed conditions regularly to improve your speed and accuracy.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Target className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium">Read widely</h3>
                <p className="text-sm text-muted-foreground">
                  Read academic articles, journals, and newspapers to expose yourself to different writing styles and
                  topics.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Target className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium">Review your mistakes</h3>
                <p className="text-sm text-muted-foreground">
                  Analyze your errors to understand why you got questions wrong and how to avoid similar mistakes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Target className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium">Focus on your weaknesses</h3>
                <p className="text-sm text-muted-foreground">
                  Identify the question types you struggle with most and practice them specifically.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
