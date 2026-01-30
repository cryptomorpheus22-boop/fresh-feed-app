"use client"

import { RecipeCard } from "@/components/recipes/RecipeCard"
import { Recipe } from "@/types"
import { Heart } from "lucide-react"

// Mock Favorites Data
const FAVORITE_RECIPES: Recipe[] = [
    {
        id: "3",
        title: "Spicy Chickpea Curry",
        description: "Rich and creamy coconut curry with chickpeas and spinach, served over rice.",
        image: "/placeholder",
        time: "35 min",
        calories: 520,
        protein: 14,
        carbs: 65,
        fat: 22,
        tags: ["Vegan", "Dairy-Free", "Spicy"],
        diet: ["Vegan", "Vegetarian"]
    },
    {
        id: "1",
        title: "Mediterranean Quinoa Bowl",
        description: "A nutrient-packed bowl with fresh veggies, feta, and lemon dressing.",
        image: "/placeholder",
        time: "20 min",
        calories: 450,
        protein: 18,
        carbs: 45,
        fat: 22,
        tags: ["Vegetarian", "Gluten-Free", "High-Fiber"],
        diet: ["Vegetarian"]
    }
]

export default function FavoritesPage() {
    return (
        <div className="container max-w-screen-2xl mx-auto px-4 py-8">
            <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center justify-center p-2 rounded-lg bg-red-50 text-red-500">
                    <Heart className="h-6 w-6 fill-current" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Your Favorites</h1>
                    <p className="text-muted-foreground">Recipes you've saved for later.</p>
                </div>
            </div>

            {FAVORITE_RECIPES.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {FAVORITE_RECIPES.map(recipe => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-muted/30 rounded-2xl border border-dashed">
                    <p className="text-muted-foreground">You haven't saved any recipes yet.</p>
                </div>
            )}
        </div>
    )
}
