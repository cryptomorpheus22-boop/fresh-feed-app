import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock, Flame, ChefHat, Heart, CalendarPlus, Share2, Zap } from "lucide-react"
import { getRecipeById } from "@/lib/data"
import Image from "next/image"

interface PageProps {
    params: Promise<{ id: string }>
}

export async function generateMetadata(props: PageProps) {
    const params = await props.params;
    const recipe = getRecipeById(params.id);
    if (!recipe) return { title: "Recipe Not Found" };
    return {
        title: `${recipe.title} - FreshFeed Recipes`,
        description: recipe.description,
    };
}

export default async function RecipeDetailPage(props: PageProps) {
    const params = await props.params;
    const { id } = params;

    const recipe = getRecipeById(id);

    if (!recipe) {
        notFound();
    }

    return (
        <div className="min-h-screen pb-20 bg-background">
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
                {recipe.image && recipe.image !== "/placeholder" ? (
                    <Image
                        src={recipe.image}
                        alt={recipe.title}
                        fill
                        className="object-cover"
                        priority
                    />
                ) : (
                    <div className="absolute inset-0 bg-muted flex items-center justify-center">
                        <span className="text-8xl">🥘</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />

                <div className="absolute top-6 left-6 z-20">
                    <Link href="/recipes">
                        <Button variant="secondary" size="sm" className="gap-2 bg-background/80 backdrop-blur-md border-none shadow-lg">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Feed
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="container max-w-5xl px-4 -mt-32 relative z-20">
                <div className="rounded-3xl border bg-card/95 backdrop-blur-xl p-8 shadow-2xl md:p-12 overflow-hidden">
                    {/* Abstract Decoration */}
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

                    <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
                        <div className="max-w-2xl">
                            <div className="flex flex-wrap gap-2 mb-6">
                                {recipe.diet.map((diet: string) => (
                                    <span key={diet} className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider">
                                        {diet}
                                    </span>
                                ))}
                                {recipe.tags.map((tag: string) => (
                                    <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-[10px] font-bold uppercase tracking-wider">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h1 className="text-4xl font-extrabold md:text-5xl lg:text-6xl tracking-tight leading-tight mb-4">
                                {recipe.title}
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed italic">
                                "{recipe.description}"
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                            <Button size="lg" className="rounded-full gap-2 px-8 shadow-xl shadow-primary/20">
                                <CalendarPlus className="h-5 w-5" />
                                Add to Plan
                            </Button>
                            <div className="flex gap-2">
                                <Button variant="outline" size="icon" className="h-12 w-12 rounded-full">
                                    <Heart className="h-5 w-5" />
                                </Button>
                                <Button variant="outline" size="icon" className="h-12 w-12 rounded-full">
                                    <Share2 className="h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-y border-border/50 mb-12">
                        <div className="flex flex-col items-center justify-center text-center">
                            <Clock className="h-8 w-8 text-primary mb-2" />
                            <span className="text-2xl font-bold">{recipe.time}</span>
                            <span className="text-sm font-medium text-muted-foreground">Cook Time</span>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center border-l-0 md:border-l border-border/50">
                            <Flame className="h-8 w-8 text-orange-500 mb-2" />
                            <span className="text-2xl font-bold">{recipe.calories}</span>
                            <span className="text-sm font-medium text-muted-foreground">Calories</span>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center border-l order-border/50">
                            <ChefHat className="h-8 w-8 text-blue-500 mb-2" />
                            <span className="text-2xl font-bold">{recipe.protein}g</span>
                            <span className="text-sm font-medium text-muted-foreground">Protein</span>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center border-l border-border/50">
                            <Zap className="h-8 w-8 text-yellow-500 mb-2" />
                            <span className="text-2xl font-bold">{recipe.fat}g</span>
                            <span className="text-sm font-medium text-muted-foreground">Healthy Fats</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Ingredients */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                Ingredients
                            </h2>
                            <ul className="space-y-3">
                                {recipe.ingredients?.map((item: string, idx: number) => (
                                    <li key={idx} className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                                        <div className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                )) || (
                                        <p className="text-muted-foreground">Ingredients not listed.</p>
                                    )}
                            </ul>
                        </div>

                        {/* Instructions */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Instructions</h2>
                            <div className="space-y-6">
                                {recipe.instructions?.map((step: string, idx: number) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-secondary/10 text-secondary font-bold shrink-0">
                                            {idx + 1}
                                        </div>
                                        <p className="pt-1 text-muted-foreground leading-relaxed">
                                            {step}
                                        </p>
                                    </div>
                                )) || (
                                        <p className="text-muted-foreground">Instructions not available.</p>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
