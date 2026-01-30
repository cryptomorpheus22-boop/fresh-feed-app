import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/Card"

export default function Loading() {
    return (
        <div className="container max-w-screen-2xl mx-auto px-4 py-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-8">
                <div className="space-y-2">
                    <div className="h-8 w-48 bg-muted animate-pulse rounded-md" />
                    <div className="h-4 w-64 bg-muted animate-pulse rounded-md" />
                </div>
                <div className="h-10 w-full md:w-[300px] bg-muted animate-pulse rounded-md" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <Card key={i} className="overflow-hidden border-border/50">
                        <div className="aspect-[4/3] bg-muted animate-pulse" />
                        <CardHeader className="p-4 space-y-2">
                            <div className="h-4 w-full bg-muted animate-pulse rounded-md" />
                            <div className="h-3 w-2/3 bg-muted animate-pulse rounded-md" />
                        </CardHeader>
                        <CardFooter className="p-4 pt-0 flex gap-2">
                            <div className="h-6 w-16 bg-muted animate-pulse rounded-md" />
                            <div className="h-6 w-16 bg-muted animate-pulse rounded-md" />
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}
