import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function ListeningLoading() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex justify-between items-center">
        <Skeleton className="h-10 w-64" />
      </div>

      <div className="space-y-2">
        <Skeleton className="h-10 w-full max-w-4xl" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <Skeleton className="h-5 w-20 mb-2" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-4 w-full mt-2" />
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-9 w-full" />
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </div>
  )
}
