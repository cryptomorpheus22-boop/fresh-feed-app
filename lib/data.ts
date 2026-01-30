
import { Recipe } from "@/types";

export interface ExtendedRecipe extends Recipe {
    prepTimeMinutes: number;
}

export const RECIPES: ExtendedRecipe[] = [
    {
        id: "1",
        title: "Mediterranean Quinoa Bowl",
        description: "A nutrient-packed bowl with fresh veggies, feta, and lemon dressing. Perfect for a quick lunch or dinner that keeps you full and energized.",
        image: "/recipes/quinoa_bowl.png",
        time: "20 min",
        prepTimeMinutes: 20,
        calories: 450,
        protein: 18,
        carbs: 45,
        fat: 22,
        tags: ["Vegetarian", "Gluten-Free", "High-Fiber"],
        diet: ["Vegetarian", "Gluten-Free"],
        ingredients: [
            "1 cup cooked quinoa",
            "1/2 cup cherry tomatoes, halved",
            "1/4 cup diced cucumber",
            "1/4 cup crumbled feta cheese",
            "2 tbsp kalamata olives",
            "1 tbsp olive oil",
            "1/2 lemon, juiced",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Cook quinoa according to package instructions and let cool slightly.",
            "In a large bowl, combine quinoa, tomatoes, cucumber, olives, and feta.",
            "In a small jar, whisk olive oil, lemon juice, salt, and pepper.",
            "Pour dressing over the salad and toss gently to combine.",
            "Serve immediately or refrigerate for up to 3 days."
        ]
    },
    {
        id: "2",
        title: "Lemon Herb Grilled Salmon",
        description: "Fresh salmon fillets marinated in lemon, garlic, and herbs, grilled to perfection.",
        image: "/recipes/salmon.png",
        time: "25 min",
        prepTimeMinutes: 25,
        calories: 380,
        protein: 34,
        carbs: 5,
        fat: 24,
        tags: ["Keto", "High-Protein", "GF"],
        diet: ["Pescatarian", "Keto", "Paleo", "Gluten-Free"],
        ingredients: [
            "2 salmon fillets (6oz each)",
            "2 tbsp olive oil",
            "2 cloves garlic, minced",
            "1 lemon, sliced",
            "1 tbsp fresh dill",
            "Salt and pepper"
        ],
        instructions: [
            "Preheat grill or grill pan to medium-high heat.",
            "Mix olive oil, garlic, dill, salt, and pepper.",
            "Brush salmon fillets with the mixture.",
            "Grill salmon for 4-5 minutes per side until cooked through.",
            "Serve garnished with lemon slices."
        ]
    },
    {
        id: "3",
        title: "Spicy Chickpea Curry",
        description: "Rich and creamy coconut curry with chickpeas and spinach, served over rice.",
        image: "/placeholder",
        time: "35 min",
        prepTimeMinutes: 35,
        calories: 520,
        protein: 14,
        carbs: 65,
        fat: 22,
        tags: ["Vegan", "Dairy-Free", "Spicy"],
        diet: ["Vegan", "Vegetarian", "Dairy-Free"],
        ingredients: [
            "1 can chickpeas, drained",
            "1 can coconut milk",
            "2 cups spinach",
            "1 onion, diced",
            "2 tbsp curry paste",
            "Rice for serving"
        ],
        instructions: [
            "Sauté onion until soft.",
            "Add curry paste and cook for 1 minute.",
            "Add coconut milk and chickpeas, simmer for 10 mins.",
            "Stir in spinach until wilted.",
            "Serve over rice."
        ]
    },
    {
        id: "4",
        title: "Beef and Broccoli Stir-Fry",
        description: "Classic takeout favorite made healthier with reduced sodium soy sauce.",
        image: "/placeholder",
        time: "30 min",
        prepTimeMinutes: 30,
        calories: 480,
        protein: 42,
        carbs: 25,
        fat: 20,
        tags: ["High-Protein", "Dairy-Free"],
        diet: ["Omnivore", "Dairy-Free"],
        ingredients: [
            "1 lb flank steak, sliced",
            "2 cups broccoli florets",
            "2 tbsp soy sauce (low sodium)",
            "1 tbsp ginger, grated",
            "2 cloves coffee",
            "4 cloves garlic"
        ],
        instructions: [
            "Sear beef in a hot wok/pan.",
            "Remove beef, add broccoli and splash of water to steam.",
            "Return beef, add sauce ingredients.",
            "Toss until coated and cooked through."
        ]
    },
    {
        id: "5",
        title: "Avocado Toast with Egg",
        description: "Sourdough toast topped with smashed avocado, poached egg, and chili flakes.",
        image: "/placeholder",
        time: "10 min",
        prepTimeMinutes: 10,
        calories: 320,
        protein: 16,
        carbs: 28,
        fat: 18,
        tags: ["Breakfast", "Vegetarian"],
        diet: ["Vegetarian"],
        ingredients: [
            "1 slice sourdough bread",
            "1/2 avocado",
            "1 egg",
            "Chili flakes",
            "Salt and pepper"
        ],
        instructions: [
            "Toast the bread.",
            "Poach or fry the egg.",
            "Mash avocado on toast.",
            "Top with egg and seasoning."
        ]
    },
    {
        id: "6",
        title: "Zucchini Noodles with Pesto",
        description: "Light and fresh zucchini noodles tossed in homemade basil pesto.",
        image: "/placeholder",
        time: "15 min",
        prepTimeMinutes: 15,
        calories: 280,
        protein: 8,
        carbs: 12,
        fat: 24,
        tags: ["Keto", "Vegan", "Low-Carb"],
        diet: ["Vegan", "Keto", "Vegetarian", "Gluten-Free"],
        ingredients: [
            "3 large zucchinis, spiralized",
            "1/2 cup basil pesto (vegan if needed)",
            "Cherry tomatoes for topping",
            "Pine nuts"
        ],
        instructions: [
            "Spiralize zucchini.",
            "Toss raw with pesto (or sauté briefly if preferred warm).",
            "Top with tomatoes and pine nuts."
        ]
    }
];

export function getRecipeById(id: string): ExtendedRecipe | undefined {
    return RECIPES.find(r => r.id === id);
}
