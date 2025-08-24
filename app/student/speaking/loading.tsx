import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function SpeakingLoading() {
  return (
    <div className="container mx-auto py-4 md:py-6 px-4 md:px-6 space-y-6">
      <div className="space-y-2">
        <Skeleton className="h-8 w-[250px]" />
        <Skeleton className="h-4 w-[350px]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array(3)
          .fill(null)
          .map((_, i) => (
            <Card key={i}>
              <CardHeader className="pb-2">
                <Skeleton className="h-4 w-[120px]" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-[60px] mb-1" />
                <Skeleton className="h-3 w-[100px]" />
              </CardContent>
            </Card>
          ))}
      </div>

      <div className="space-y-2">
        <Skeleton className="h-10 w-[400px] rounded-lg" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <CardHeader>
                  <div className="flex justify-between">
                    <Skeleton className="h-5 w-[80px] rounded-full" />
                    <Skeleton className="h-5 w-[60px] rounded-full" />
                  </div>
                  <Skeleton className="h-6 w-[180px] mt-2" />
                  <Skeleton className="h-4 w-full mt-1" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <Skeleton className="h-4 w-[80px]" />
                      <Skeleton className="h-4 w-[80px]" />
                    </div>
                    <Skeleton className="h-2 w-full rounded-full" />
                    <Skeleton className="h-9 w-full rounded-md" />
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </div>
  )
}
