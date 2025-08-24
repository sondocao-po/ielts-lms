import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info, PenTool, FileText } from "lucide-react"

export function WritingStrategies() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">IELTS Writing Strategies</CardTitle>
          <CardDescription>
            Learn effective strategies for approaching different types of IELTS writing tasks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="task1">
            <TabsList className="grid grid-cols-2 w-full max-w-md mb-4">
              <TabsTrigger value="task1">Task 1 Strategies</TabsTrigger>
              <TabsTrigger value="task2">Task 2 Strategies</TabsTrigger>
            </TabsList>

            <TabsContent value="task1" className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Task 1 Overview</AlertTitle>
                <AlertDescription>
                  In Task 1, you need to describe visual information (graphs, charts, maps, or processes) in at least
                  150 words.
                </AlertDescription>
              </Alert>

              <Card className="border">
                <CardHeader>
                  <CardTitle className="text-lg">Before Writing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="analyze">
                      <AccordionTrigger>Analyze the Visual Information</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-2">Take 2-3 minutes to understand what you're looking at:</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>Identify the type of visual (line graph, bar chart, pie chart, table, map, diagram)</li>
                          <li>Read the title and labels carefully</li>
                          <li>Note the units of measurement and time periods</li>
                          <li>Look for the highest and lowest values</li>
                          <li>Identify significant trends, changes, or comparisons</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="plan-task1">
                      <AccordionTrigger>Plan Your Response</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-2">Spend 2 minutes planning your structure:</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>
                            <strong>Introduction:</strong> Paraphrase what the visual shows
                          </li>
                          <li>
                            <strong>Overview:</strong> Note 2-3 main features or trends
                          </li>
                          <li>
                            <strong>Details:</strong> Decide which specific data to include in each paragraph
                          </li>
                          <li>Group similar information together</li>
                          <li>Decide on a logical organization (e.g., chronological, by category, by significance)</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card className="border">
                <CardHeader>
                  <CardTitle className="text-lg">During Writing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="introduction-task1">
                      <AccordionTrigger>Write a Clear Introduction</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-2">Your introduction should:</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>Paraphrase the information given in the question</li>
                          <li>Mention what the visual represents</li>
                          <li>Include the time period if relevant</li>
                          <li>Be concise (1-2 sentences)</li>
                        </ul>
                        <div className="mt-2 p-2 bg-muted rounded-md">
                          <p className="text-sm font-medium">Example:</p>
                          <p className="text-sm italic">
                            "The bar chart illustrates the percentage of households with internet access in four
                            different countries between 2000 and 2020."
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="overview">
                      <AccordionTrigger>Include a Strong Overview</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-2">Your overview should:</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>Summarize the main trends or features (2-3 points)</li>
                          <li>Not include specific data</li>
                          <li>Be placed either after the introduction or at the end of your response</li>
                        </ul>
                        <div className="mt-2 p-2 bg-muted rounded-md">
                          <p className="text-sm font-medium">Example:</p>
                          <p className="text-sm italic">
                            "Overall, internet access increased in all four countries over the period shown, with
                            Country A consistently having the highest percentage of households online. The most
                            significant growth was observed in Country C, which started with the lowest figure but
                            showed rapid expansion after 2010."
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="details">
                      <AccordionTrigger>Develop Detail Paragraphs</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-2">Your detail paragraphs should:</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>Focus on specific data that supports the main trends</li>
                          <li>Group related information together</li>
                          <li>Include accurate figures with appropriate units</li>
                          <li>Make comparisons where relevant</li>
                          <li>Use a variety of language to describe the data</li>
                        </ul>
                        <div className="mt-2 p-2 bg-muted rounded-md">
                          <p className="text-sm font-medium">Example organization:</p>
                          <p className="text-sm">
                            <strong>Paragraph 1:</strong> Introduction
                            <br />
                            <strong>Paragraph 2:</strong> Overview
                            <br />
                            <strong>Paragraph 3:</strong> Details about the first main trend/feature
                            <br />
                            <strong>Paragraph 4:</strong> Details about the second main trend/feature
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="language-task1">
                      <AccordionTrigger>Use Appropriate Language</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-2">For different types of visuals:</p>

                        <p className="font-medium mt-2">For trends over time:</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>
                            <strong>Verbs:</strong> increase, rise, grow, climb, surge, decrease, fall, decline, drop,
                            plummet
                          </li>
                          <li>
                            <strong>Nouns:</strong> an increase, a rise, a decrease, a reduction, a decline
                          </li>
                          <li>
                            <strong>Adverbs:</strong> sharply, dramatically, significantly, slightly, gradually,
                            steadily
                          </li>
                        </ul>

                        <p className="font-medium mt-2">For comparisons:</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>
                            <strong>Phrases:</strong> compared to, in contrast to, whereas, while, as opposed to
                          </li>
                          <li>
                            <strong>Comparative forms:</strong> higher than, lower than, more significant than
                          </li>
                          <li>
                            <strong>Proportions:</strong> twice as many as, three times higher than, half as much as
                          </li>
                        </ul>

                        <p className="font-medium mt-2">For maps and processes:</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>
                            <strong>Location:</strong> adjacent to, opposite, to the north/south/east/west of
                          </li>
                          <li>
                            <strong>Sequence:</strong> initially, following this, subsequently, finally
                          </li>
                          <li>
                            <strong>Passive voice:</strong> is located, is situated, is processed, is transported
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card className="border">
                <CardHeader>
                  <CardTitle className="text-lg">Specific Strategies by Visual Type</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="graphs">
                      <AccordionTrigger>Line Graphs</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-2">When describing line graphs:</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>Focus on trends over time (increases, decreases, fluctuations)</li>
                          <li>Identify turning points (when trends change direction)</li>
                          <li>Compare different lines if multiple data sets are shown</li>
                          <li>Mention starting and ending points</li>
                          <li>Use time expressions (between 2010 and 2015, over the five-year period)</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="bar-charts">
                      <AccordionTrigger>Bar Charts</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-2">When describing bar charts:</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>Compare the heights of different bars</li>
                          <li>Group similar categories together</li>
                          <li>Identify the highest and lowest values</li>
                          <li>Look for patterns or trends if data is shown over time</li>
                          <li>For grouped bar charts, make comparisons within and between groups</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="pie-charts">
                      <AccordionTrigger>Pie Charts</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-2">When describing pie charts:</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>Focus on proportions and percentages</li>
                          <li>Identify the largest and smallest segments</li>
                          <li>Group smaller segments together if appropriate</li>
                          <li>Compare two pie charts if multiple charts are shown</li>
                          <li>Use phrases like "accounts for," "represents," "makes up," "constitutes"</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="maps">
                      <AccordionTrigger>Maps</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-2">When describing maps:</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>Identify the main features and their locations</li>
                          <li>
                            For maps showing change over time, focus on what has changed and what has remained the same
                          </li>
                          <li>Describe locations using compass directions and prepositions of place</li>
                          <li>Organize your description logically (e.g., north to south, or by feature type)</li>
                          <li>Use passive voice where appropriate</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="processes">
                      <AccordionTrigger>Process Diagrams</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-2">When describing process diagrams:</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>Identify the beginning and end of the process</li>
                          <li>Describe each stage in the correct sequence</li>
                          <li>Use sequencing language (first, next, then, finally)</li>
                          <li>Use passive voice for many processes (e.g., "The water is filtered")</li>
                          <li>For cyclical processes, mention that the process repeats</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card className="border">
                <CardHeader>
                  <CardTitle className="text-lg">After Writing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="check-task1">
                      <AccordionTrigger>Check Your Work</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-2">Spend 2 minutes checking:</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>Have you included an overview?</li>
                          <li>Is your data accurate?</li>
                          <li>Have you written at least 150 words?</li>
                          <li>Have you used a variety of vocabulary to describe the data?</li>
                          <li>Check for grammar errors, especially in tenses and articles</li>
                          <li>Look for spelling mistakes in key terms</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="task2" className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Task 2 Overview</AlertTitle>
                <AlertDescription>
                  In Task 2, you need to write an essay in response to a point of view, argument, or problem in at least
                  250 words.
                </AlertDescription>
              </Alert>

              <Card className="border">
                <CardHeader>
                  <CardTitle className="text-lg">Before Writing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="analyze-task2">
                      <AccordionTrigger>Analyze the Question</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-2">Take 3-4 minutes to understand what you're being asked:</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>Identify the topic (education, environment, technology, etc.)</li>
                          <li>Identify the question type (opinion, discussion, problem/solution, etc.)</li>
                          <li>Underline key words in the question</li>
                          <li>Make sure you understand what you're being asked to do</li>
                          <li>For two-part questions, ensure you address both parts</li>
                        </ul>
                        <div className="mt-2 p-2 bg-muted rounded-md">
                          <p className="text-sm font-medium">Example question analysis:</p>
                          <p className="text-sm">
                            <strong>Question:</strong> "Some people believe that universities should focus on providing
                            academic skills, while others think they should prepare students for their future careers.
                            Discuss both views and give your opinion."
                          </p>
                          <p className="text-sm mt-1">
                            <strong>Analysis:</strong>
                            <br />- Topic: University education
                            <br />- Type: Discussion + opinion
                            <br />- Key parts: Academic skills view, career preparation view, your opinion
                            <br />- Need to discuss both sides and then give your own view
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="plan-task2">
                      <AccordionTrigger>Plan Your Essay</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-2">Spend 5 minutes planning your structure:</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>Decide on your position (if it's an opinion essay)</li>
                          <li>Brainstorm 2-3 main points for each side of the argument</li>
                          <li>Think of specific examples to support each point</li>
                          <li>Organize your ideas into a logical structure</li>
                          <li>Create a brief outline with introduction, body paragraphs, and conclusion</li>
                        </ul>
                        <div className="mt-2 p-2 bg-muted rounded-md">
                          <p className="text-sm font-medium">Example outline for the question above:</p>
                          <p className="text-sm mt-1">
                            <strong>Introduction:</strong> Introduce topic, paraphrase question, state your position
                            <br />
                            <strong>Body Paragraph 1:</strong> View that universities should focus on academic skills +
                            examples
                            <br />
                            <strong>Body Paragraph 2:</strong> View that universities should prepare for careers +
                            examples
                            <br />
                            <strong>Body Paragraph 3:</strong> Your opinion with supporting reasons
                            <br />
                            <strong>Conclusion:</strong> Summarize main points and restate your position
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card className="border">
                <CardHeader>
                  <CardTitle className="text-lg">During Writing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="introduction-task2">
                      <AccordionTrigger>Write an Effective Introduction</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-2">Your introduction should:</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>Introduce the topic with a general statement</li>
                          <li>Paraphrase the question (don't copy it word for word)</li>
                          <li>State your position clearly (for opinion essays)</li>
                          <li>Be concise (2-3 sentences is usually sufficient)</li>
                          <li>Not include specific examples (save these for body paragraphs)</li>
                        </ul>
                        <div className="mt-2 p-2 bg-muted rounded-md">
                          <p className="text-sm font-medium">Example introduction:</p>
                          <p className="text-sm italic">
                            "The purpose of higher education has been debated extensively in recent years. While some
                            argue that universities should prioritize academic knowledge and research skills, others
                            believe they should focus on preparing students for their future employment. This essay will
                            examine both perspectives, although I believe a balanced approach that combines both
                            elements is most beneficial."
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="body-paragraphs">
                      <AccordionTrigger>Develop Strong Body Paragraphs</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-2">Each body paragraph should:</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>Start with a clear topic sentence that states the main idea</li>
                          <li>Explain your point with reasons and logic</li>
                          <li>Support with specific examples or evidence</li>
                          <li>Include a concluding sentence that links back to the question</li>
                          <li>Use cohesive devices to connect ideas</li>
                        </ul>
                        <div className="mt-2 p-2 bg-muted rounded-md">
                          <p className="text-sm font-medium">Example body paragraph structure:</p>
                          <p className="text-sm">
                            <strong>Topic sentence:</strong> State the main point
                            <br />
                            <strong>Explanation:</strong> Explain why this point is valid
                            <br />
                            <strong>Example:</strong> Provide a specific example
                            <br />
                            <strong>Development:</strong> Elaborate on the example
                            <br />
                            <strong>Concluding sentence:</strong> Link back to the main argument
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="conclusion">
                      <AccordionTrigger>Write a Strong Conclusion</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-2">Your conclusion should:</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>Summarize your main points</li>
                          <li>Restate your position (if it's an opinion essay)</li>
                          <li>Provide a final thought or recommendation</li>
                          <li>Be concise (2-3 sentences is usually sufficient)</li>
                          <li>Not introduce new ideas</li>
                        </ul>
                        <div className="mt-2 p-2 bg-muted rounded-md">
                          <p className="text-sm font-medium">Example conclusion:</p>
                          <p className="text-sm italic">
                            "In conclusion, while academic skills provide the foundation for intellectual development,
                            career preparation equips students with practical abilities needed in the workplace. I
                            believe universities should strive to balance both aspects in their curricula, as this would
                            best serve students' long-term interests and contribute to both personal and professional
                            success."
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="language-task2">
                      <AccordionTrigger>Use Appropriate Language</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-2">For different essay types:</p>

                        <p className="font-medium mt-2">For opinion essays:</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>
                            <strong>Expressing opinion:</strong> In my view, I believe that, It seems clear that
                          </li>
                          <li>
                            <strong>Strong statements:</strong> undoubtedly, certainly, without question
                          </li>
                          <li>
                            <strong>Qualified statements:</strong> to some extent, it could be argued that
                          </li>
                        </ul>

                        <p className="font-medium mt-2">For discussion essays:</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>
                            <strong>Presenting views:</strong> Proponents argue that, Those who support X maintain that
                          </li>
                          <li>
                            <strong>Contrasting views:</strong> On the other hand, In contrast, Conversely
                          </li>
                          <li>
                            <strong>Balancing views:</strong> While X has certain merits, it is also important to
                            consider
                          </li>
                        </ul>

                        <p className="font-medium mt-2">For problem/solution essays:</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>
                            <strong>Describing problems:</strong> A major issue is, One significant problem is
                          </li>
                          <li>
                            <strong>Suggesting solutions:</strong> One approach would be to, A possible solution is
                          </li>
                          <li>
                            <strong>Evaluating solutions:</strong> This would be effective because, The main advantage
                            of this approach is
                          </li>
                        </ul>

                        <p className="font-medium mt-2">General academic phrases:</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>
                            <strong>Adding information:</strong> Furthermore, In addition, Moreover
                          </li>
                          <li>
                            <strong>Giving examples:</strong> For instance, To illustrate, A case in point is
                          </li>
                          <li>
                            <strong>Concluding:</strong> In conclusion, To summarize, Overall
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card className="border">
                <CardHeader>
                  <CardTitle className="text-lg">Strategies for Different Question Types</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="opinion">
                      <AccordionTrigger>Opinion Essays</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-2">
                          For questions asking "Do you agree or disagree?" or "To what extent do you agree?":
                        </p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>Decide your position clearly (fully agree, partly agree, or disagree)</li>
                          <li>State your position in the introduction</li>
                          <li>Support your position with 2-3 strong arguments in separate paragraphs</li>
                          <li>Consider acknowledging the opposing view briefly</li>
                          <li>Be consistent with your position throughout the essay</li>
                        </ul>
                        <div className="mt-2 p-2 bg-muted rounded-md">
                          <p className="text-sm font-medium">Possible structures:</p>
                          <p className="text-sm">
                            <strong>Structure 1 (Strong position):</strong>
                            <br />- Introduction with clear position
                            <br />- Body Paragraph 1: First reason you agree/disagree
                            <br />- Body Paragraph 2: Second reason you agree/disagree
                            <br />- Body Paragraph 3: Third reason you agree/disagree
                            <br />- Conclusion restating your position
                          </p>
                          <p className="text-sm mt-2">
                            <strong>Structure 2 (Balanced view):</strong>
                            <br />- Introduction with balanced position
                            <br />- Body Paragraph 1: Points you agree with
                            <br />- Body Paragraph 2: Points you disagree with
                            <br />- Body Paragraph 3: Your overall position with justification
                            <br />- Conclusion summarizing your balanced view
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="discussion">
                      <AccordionTrigger>Discussion Essays</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-2">For questions asking "Discuss both views and give your opinion":</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>Present both sides of the argument fairly</li>
                          <li>
                            Include your opinion (either in the introduction, in a separate paragraph, or in the
                            conclusion)
                          </li>
                          <li>Use objective language when presenting views you don't agree with</li>
                          <li>Support each view with examples and reasoning</li>
                          <li>Make it clear which view you support (if asked)</li>
                        </ul>
                        <div className="mt-2 p-2 bg-muted rounded-md">
                          <p className="text-sm font-medium">Possible structures:</p>
                          <p className="text-sm">
                            <strong>Structure 1 (Opinion at the end):</strong>
                            <br />- Introduction outlining both views
                            <br />- Body Paragraph 1: First view with support
                            <br />- Body Paragraph 2: Second view with support
                            <br />- Body Paragraph 3: Your opinion with justification
                            <br />- Conclusion summarizing all views and restating your position
                          </p>
                          <p className="text-sm mt-2">
                            <strong>Structure 2 (Opinion throughout):</strong>
                            <br />- Introduction with your position
                            <br />- Body Paragraph 1: First view with your response
                            <br />- Body Paragraph 2: Second view with your response
                            <br />- Conclusion summarizing your position
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="advantages">
                      <AccordionTrigger>Advantages/Disadvantages Essays</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-2">For questions asking about the advantages and disadvantages:</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>Discuss both advantages and disadvantages</li>
                          <li>Organize points by significance</li>
                          <li>Support each point with examples</li>
                          <li>If asked, give your opinion on whether advantages outweigh disadvantages</li>
                          <li>Be balanced in your coverage unless the question asks for your view</li>
                        </ul>
                        <div className="mt-2 p-2 bg-muted rounded-md">
                          <p className="text-sm font-medium">Possible structure:</p>
                          <p className="text-sm">
                            - Introduction outlining the issue
                            <br />- Body Paragraph 1: Major advantages with examples
                            <br />- Body Paragraph 2: Major disadvantages with examples
                            <br />- Body Paragraph 3: Your assessment of which outweighs the other (if required)
                            <br />- Conclusion summarizing the main points
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="problem">
                      <AccordionTrigger>Problem/Solution Essays</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-2">For questions asking about problems and solutions:</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>Clearly identify the problems</li>
                          <li>Suggest specific, practical solutions</li>
                          <li>Explain how the solutions would work</li>
                          <li>Evaluate the effectiveness of the solutions</li>
                          <li>Consider multiple solutions for complex problems</li>
                        </ul>
                        <div className="mt-2 p-2 bg-muted rounded-md">
                          <p className="text-sm font-medium">Possible structures:</p>
                          <p className="text-sm">
                            <strong>Structure 1 (Block):</strong>
                            <br />- Introduction outlining the issue
                            <br />- Body Paragraph 1: Problems with examples
                            <br />- Body Paragraph 2: Solutions with explanation
                            <br />- Body Paragraph 3: Evaluation of solutions
                            <br />- Conclusion summarizing problems and solutions
                          </p>
                          <p className="text-sm mt-2">
                            <strong>Structure 2 (Problem-Solution pairs):</strong>
                            <br />- Introduction outlining the issue
                            <br />- Body Paragraph 1: First problem and its solution
                            <br />- Body Paragraph 2: Second problem and its solution
                            <br />- Body Paragraph 3: Third problem and its solution
                            <br />- Conclusion summarizing the main points
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="two-part">
                      <AccordionTrigger>Two-Part Questions</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-2">
                          For questions asking two different things (e.g., "What are the causes and what solutions can
                          be offered?"):
                        </p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>Identify both parts of the question</li>
                          <li>Allocate roughly equal space to each part</li>
                          <li>Use separate paragraphs for each part</li>
                          <li>Make clear transitions between the parts</li>
                          <li>Address both parts in your conclusion</li>
                        </ul>
                        <div className="mt-2 p-2 bg-muted rounded-md">
                          <p className="text-sm font-medium">Example structure for causes and solutions:</p>
                          <p className="text-sm">
                            - Introduction outlining the issue
                            <br />- Body Paragraph 1: First cause with explanation
                            <br />- Body Paragraph 2: Second cause with explanation
                            <br />- Body Paragraph 3: First solution with explanation
                            <br />- Body Paragraph 4: Second solution with explanation
                            <br />- Conclusion summarizing causes and solutions
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card className="border">
                <CardHeader>
                  <CardTitle className="text-lg">After Writing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="check-task2">
                      <AccordionTrigger>Check Your Work</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-2">Spend 3-5 minutes checking:</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>Have you answered all parts of the question?</li>
                          <li>Is your position clear and consistent?</li>
                          <li>Have you supported your points with examples?</li>
                          <li>Have you written at least 250 words?</li>
                          <li>Check for grammar errors, especially in complex sentences</li>
                          <li>Look for spelling mistakes in key terms</li>
                          <li>Check for coherence between paragraphs</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Planning Templates</CardTitle>
          <CardDescription>Use these templates to plan your writing responses effectively</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-md flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-500" />
                    Task 1 Planning Template
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="p-2 border rounded-md">
                      <p className="font-medium">Introduction:</p>
                      <p className="text-muted-foreground">Paraphrase what the visual shows</p>
                    </div>
                    <div className="p-2 border rounded-md">
                      <p className="font-medium">Overview:</p>
                      <p className="text-muted-foreground">2-3 main trends or features (no specific data)</p>
                    </div>
                    <div className="p-2 border rounded-md">
                      <p className="font-medium">Detail Paragraph 1:</p>
                      <p className="text-muted-foreground">Specific data about first main trend/feature</p>
                    </div>
                    <div className="p-2 border rounded-md">
                      <p className="font-medium">Detail Paragraph 2:</p>
                      <p className="text-muted-foreground">Specific data about second main trend/feature</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-md flex items-center gap-2">
                    <PenTool className="h-5 w-5 text-blue-500" />
                    Task 2 Planning Template
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="p-2 border rounded-md">
                      <p className="font-medium">Introduction:</p>
                      <p className="text-muted-foreground">Background + paraphrase question + your position</p>
                    </div>
                    <div className="p-2 border rounded-md">
                      <p className="font-medium">Body Paragraph 1:</p>
                      <p className="text-muted-foreground">Main point 1 + explanation + example + link to question</p>
                    </div>
                    <div className="p-2 border rounded-md">
                      <p className="font-medium">Body Paragraph 2:</p>
                      <p className="text-muted-foreground">Main point 2 + explanation + example + link to question</p>
                    </div>
                    <div className="p-2 border rounded-md">
                      <p className="font-medium">Body Paragraph 3 (if needed):</p>
                      <p className="text-muted-foreground">Main point 3 or counter-argument + response</p>
                    </div>
                    <div className="p-2 border rounded-md">
                      <p className="font-medium">Conclusion:</p>
                      <p className="text-muted-foreground">Summary of main points + restate position + final thought</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
