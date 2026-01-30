export interface Recipe {
    id: string
    title: string
    description: string
    image: string // URL or placeholder path
    time: string // e.g. "30 min"
    calories: number
    protein: number // grams
    carbs: number // grams
    fat: number // grams
    tags: string[]
    diet: string[] // e.g. ["Vegan", "Gluten-Free"]
    ingredients?: string[]
    instructions?: string[]
}
