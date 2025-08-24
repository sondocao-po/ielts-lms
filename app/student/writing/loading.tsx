import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function WritingLoading() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col space-y-2">
        <Skeleton className="h-10 w-[250px]" />
        <Skeleton className="h-4 w-[450px]" />
      </div>

      <div className="space-y-4">
        <Skeleton className="h-10 w-[400px]" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <Skeleton className="h-6 w-[180px] mb-2" />
                  <Skeleton className="h-4 w-full" />
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-2">
                    <Skeleton className="h-4 w-[60px]" />
                    <Skeleton className="h-4 w-[70px]" />
                    <Skeleton className="h-4 w-[50px]" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Skeleton className="h-4 w-[80px]" />
                      <Skeleton className="h-4 w-[30px]" />
                    </div>
                    <Skeleton className="h-2 w-full" />
                  </div>
                  <div className="mt-4">
                    <Skeleton className="h-9 w-full" />
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-[250px] mb-2" />
            <Skeleton className="h-4 w-[350px]" />
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <Card key={i} className="border">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <Skeleton className="h-5 w-[150px]" />
                        <Skeleton className="h-5 w-[60px]" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between mb-4">
                        <Skeleton className="h-4 w-[70px]" />
                        <Skeleton className="h-4 w-[80px]" />
                      </div>
                      <Skeleton className="h-9 w-full" />
                    </CardContent>
                  </Card>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
