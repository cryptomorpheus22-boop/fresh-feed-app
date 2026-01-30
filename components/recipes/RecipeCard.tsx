import { Recipe } from "@/types"
import { Card, CardHeader } from "@/components/ui/Card"
import Image from "next/image" 
import Link from "next/link"
import { Heart, Clock, Zap } from "lucide-react"

interface RecipeCardProps {
    recipe: Recipe
}

export function RecipeCard({ recipe }: RecipeCardProps) {
    return (
        <div className="group relative h-full">
            <Link href={`/recipes/${recipe.id}`} className="block h-full">
                <Card className="h-full overflow-hidden bg-card transition-all duration-300 hover:shadow-xl border-border/50 hover:border-primary/50 flex flex-col">
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                        {recipe.image && recipe.image !== "/placeholder" ? (
                            <Image 
                                src={recipe.image} 
                                alt={recipe.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-secondary/10 transition-transform duration-300 group-hover:scale-105">
                                <span className="text-4xl">🥘</span>
                            </div>
                        )}

                        {/* Overlay Badges */}
                        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                            <span className="rounded-full bg-background/90 backdrop-blur-md px-2.5 py-1 text-xs font-bold text-foreground shadow-sm flex items-center gap-1">
                                <Clock className="h-3 w-3 text-primary" />
                                {recipe.time}
                            </span>
                        </div>
                        
                        <div className="absolute bottom-3 left-3 z-10">
                             <span className="rounded-full bg-primary px-2.5 py-1 text-[10px] uppercase font-bold text-primary-foreground shadow-lg">
                                {recipe.diet[0] || "Omnivore"}
                            </span>
                        </div>
                    </div>

                    <CardHeader className="p-5 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="flex items-center gap-1 text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
                                <Zap className="h-3 w-3 fill-current" />
                                {recipe.calories} kcal
                            </div>
                            <div className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                                {recipe.protein}g Protein
                            </div>
                        </div>
                        
                        <h3 className="line-clamp-1 text-xl font-bold group-hover:text-primary transition-colors">
                            {recipe.title}
                        </h3>
                        
                        <p className="line-clamp-2 text-sm text-muted-foreground mt-2 leading-relaxed flex-1">
                            {recipe.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2 pt-2">
                            {recipe.tags.slice(0, 2).map(tag => (
                                <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-muted px-2 py-1 rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </CardHeader>
                </Card>
            </Link>

            <button
                className="absolute top-3 left-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 backdrop-blur-md hover:bg-white text-muted-foreground hover:text-red-500 transition-all shadow-md active:scale-90"
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log("Favorite toggled");
                }}
            >
                <Heart className="h-5 w-5" />
            </button>
        </div>
    )
}
