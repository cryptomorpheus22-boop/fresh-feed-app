"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"
import { RecipeCard } from "@/components/recipes/RecipeCard"
import { RECIPES } from "@/lib/data"
import { X, SlidersHorizontal } from "lucide-react"

const ALL_DIETS = ["Vegetarian", "Vegan", "Keto", "Gluten-Free", "High-Protein", "Dairy-Free"]

type SortOption = "newest" | "calories-asc" | "calories-desc" | "protein-desc" | "time-asc"

export default function RecipesPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedDiet, setSelectedDiet] = useState<string | null>(null)
    const [maxCalories, setMaxCalories] = useState<number>(1000)
    const [minProtein, setMinProtein] = useState<number>(0)
    const [maxTime, setMaxTime] = useState<number>(60)
    const [sortBy, setSortBy] = useState<SortOption>("newest")
    const [showFilters, setShowFilters] = useState(false)

    const filteredRecipes = useMemo(() => {
        let results = RECIPES.filter(recipe => {
            const query = searchQuery.toLowerCase().trim()
            const matchesSearch =
                recipe.title.toLowerCase().includes(query) ||
                recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
                (recipe.ingredients && recipe.ingredients.some(ing => ing.toLowerCase().includes(query)))

            const matchesDiet = selectedDiet ? recipe.diet.includes(selectedDiet) : true
            const matchesCalories = recipe.calories <= maxCalories
            const matchesProtein = recipe.protein >= minProtein
            const matchesTime = recipe.prepTimeMinutes <= maxTime

            return matchesSearch && matchesDiet && matchesCalories && matchesProtein && matchesTime
        })

        // Sorting
        results = [...results].sort((a, b) => {
            switch (sortBy) {
                case "calories-asc": return a.calories - b.calories
                case "calories-desc": return b.calories - a.calories
                case "protein-desc": return b.protein - a.protein
                case "time-asc": return a.prepTimeMinutes - b.prepTimeMinutes
                default: return 0 // Keep order
            }
        })

        return results
    }, [searchQuery, selectedDiet, maxCalories, minProtein, maxTime, sortBy])

    const resetFilters = () => {
        setSearchQuery("")
        setSelectedDiet(null)
        setMaxCalories(1000)
        setMinProtein(0)
        setMaxTime(60)
        setSortBy("newest")
    }

    return (
        <div className="container max-w-screen-2xl mx-auto px-4 py-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-8">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight">Discover Recipes</h1>
                    <p className="text-muted-foreground mt-1 text-lg">Curated meals based on your preferences.</p>
                </div>
                <div className="flex w-full md:w-auto gap-3">
                    <div className="relative w-full md:w-[320px]">
                        <Input
                            placeholder="Search recipes, ingredients..."
                            className="w-full pr-10 h-11"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        )}
                    </div>
                    <Button
                        variant={showFilters ? "default" : "outline"}
                        className="h-11 gap-2"
                        onClick={() => setShowFilters(!showFilters)}
                    >
                        <SlidersHorizontal className="h-4 w-4" />
                        Filters
                    </Button>
                </div>
            </div>

            {/* Expanded Filters Panel */}
            {showFilters && (
                <div className="mb-8 p-6 bg-card border rounded-2xl shadow-sm animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Diet Selection */}
                        <div className="space-y-3">
                            <label className="text-sm font-semibold">Dietary Preference</label>
                            <div className="flex flex-wrap gap-2">
                                <Button
                                    variant={selectedDiet === null ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedDiet(null)}
                                    className="rounded-full px-4"
                                >
                                    All
                                </Button>
                                {ALL_DIETS.map(diet => (
                                    <Button
                                        key={diet}
                                        variant={selectedDiet === diet ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => setSelectedDiet(selectedDiet === diet ? null : diet)}
                                        className="rounded-full px-4"
                                    >
                                        {diet}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        {/* Nutrition Filters */}
                        <div className="space-y-3">
                            <label className="text-sm font-semibold">Max Calories: {maxCalories} kcal</label>
                            <input
                                type="range"
                                min="200"
                                max="1000"
                                step="50"
                                value={maxCalories}
                                onChange={(e) => setMaxCalories(parseInt(e.target.value))}
                                className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                            <div className="flex justify-between text-xs text-muted-foreground">
                                <span>200</span>
                                <span>1000</span>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-sm font-semibold">Min Protein: {minProtein}g</label>
                            <input
                                type="range"
                                min="0"
                                max="50"
                                step="5"
                                value={minProtein}
                                onChange={(e) => setMinProtein(parseInt(e.target.value))}
                                className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                            <div className="flex justify-between text-xs text-muted-foreground">
                                <span>0g</span>
                                <span>50g+</span>
                            </div>
                        </div>

                        {/* Sorting */}
                        <div className="space-y-3">
                            <label className="text-sm font-semibold">Sort By</label>
                            <select
                                className="w-full h-10 px-3 rounded-md border bg-background text-sm focus:ring-1 focus:ring-primary outline-none"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as SortOption)}
                            >
                                <option value="newest">Newest</option>
                                <option value="calories-asc">Lowest Calories</option>
                                <option value="calories-desc">Highest Calories</option>
                                <option value="protein-desc">Highest Protein</option>
                                <option value="time-asc">Quickest Prep</option>
                            </select>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={resetFilters}
                                className="w-full text-muted-foreground hover:text-destructive"
                            >
                                Reset All
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {!showFilters && (
                <div className="flex flex-wrap gap-2 mb-8 items-center h-8">
                    <span className="text-sm font-medium text-muted-foreground mr-2">Quick Filter:</span>
                    {selectedDiet && (
                        <Button
                            variant="secondary"
                            size="sm"
                            className="rounded-full gap-1 h-7"
                            onClick={() => setSelectedDiet(null)}
                        >
                            {selectedDiet} <X className="h-3 w-3" />
                        </Button>
                    )}
                    {!selectedDiet && <span className="text-sm text-muted-foreground italic">No filters active</span>}
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredRecipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>

            {filteredRecipes.length === 0 && (
                <div className="text-center py-20 bg-muted/20 rounded-3xl border-2 border-dashed border-border/50 max-w-2xl mx-auto mt-10">
                    <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                        <X className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-bold">No matches found</h3>
                    <p className="text-muted-foreground mt-2 max-w-xs mx-auto">
                        We couldn't find any recipes matching your current filters. Try broadening your search!
                    </p>
                    <Button
                        variant="default"
                        onClick={resetFilters}
                        className="mt-6 px-8 rounded-full"
                    >
                        Clear all filters
                    </Button>
                </div>
            )}
        </div>
    )
}
