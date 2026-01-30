"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"

type DietType = "Omnivore" | "Vegan" | "Vegetarian" | "Keto" | "Paleo"
type GoalType = "Lose Weight" | "Build Muscle" | "Eat Healthy" | "Save Time"

interface UserPreferences {
    diet: DietType
    allergies: string[]
    goal: GoalType
}

export default function OnboardingPage() {
    const [step, setStep] = useState(1)
    const [preferences, setPreferences] = useState<UserPreferences>({
        diet: "Omnivore",
        allergies: [],
        goal: "Eat Healthy",
    })

    const totalSteps = 3

    const handleNext = () => {
        if (step < totalSteps) {
            setStep(step + 1)
        } else {
            // Here we would typically save to DB/Local Storage
            console.log("Onboarding Complete", preferences)
            // Redirect or show success
            setStep(4) // Success State
        }
    }

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1)
        }
    }

    const toggleAllergy = (allergy: string) => {
        setPreferences((prev) => {
            const exists = prev.allergies.includes(allergy)
            return {
                ...prev,
                allergies: exists
                    ? prev.allergies.filter((a) => a !== allergy)
                    : [...prev.allergies, allergy],
            }
        })
    }

    return (
        <div className="container max-w-2xl px-4 py-16 mx-auto">
            {step < 4 && (
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4 text-sm font-medium text-muted-foreground">
                        <span>Step {step} of {totalSteps}</span>
                        <span>{Math.round((step / totalSteps) * 100)}% Completed</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary/10">
                        <div
                            className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
                            style={{ width: `${(step / totalSteps) * 100}%` }}
                        />
                    </div>
                </div>
            )}

            <div className="space-y-6">
                {step === 1 && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                        <h1 className="text-3xl font-bold mb-2">What is your primary diet?</h1>
                        <p className="text-muted-foreground mb-8">We'll prioritize recipes that match your lifestyle.</p>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {["Omnivore", "Vegan", "Vegetarian", "Keto", "Paleo"].map((diet) => (
                                <Card
                                    key={diet}
                                    className={`cursor-pointer transition-all hover:border-primary/50 relative overflow-hidden ${preferences.diet === diet ? "border-primary bg-primary/5 ring-1 ring-primary" : ""
                                        }`}
                                    onClick={() => setPreferences({ ...preferences, diet: diet as DietType })}
                                >
                                    <CardContent className="flex items-center justify-center p-6">
                                        <span className="font-semibold text-lg">{diet}</span>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                        <h1 className="text-3xl font-bold mb-2">Any allergies or dislikes?</h1>
                        <p className="text-muted-foreground mb-8">Select all that apply. We'll filter these out.</p>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {["Gluten", "Dairy", "Peanuts", "Shellfish", "Soy", "Eggs"].map((allergy) => (
                                <Card
                                    key={allergy}
                                    className={`cursor-pointer transition-all hover:border-primary/50 ${preferences.allergies.includes(allergy) ? "border-destructive/50 bg-destructive/5" : ""
                                        }`}
                                    onClick={() => toggleAllergy(allergy)}
                                >
                                    <CardContent className="flex items-center justify-between p-6">
                                        <span className="font-semibold">{allergy}</span>
                                        {preferences.allergies.includes(allergy) && (
                                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-destructive/10 text-destructive text-xs">
                                                ✕
                                            </span>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                        <h1 className="text-3xl font-bold mb-2">What's your main goal?</h1>
                        <p className="text-muted-foreground mb-8">This helps us sort recipes by macro-nutrients.</p>

                        <div className="grid gap-4">
                            {["Eat Healthy", "Lose Weight", "Build Muscle", "Save Time"].map((goal) => (
                                <Card
                                    key={goal}
                                    className={`cursor-pointer transition-all hover:border-primary/50 ${preferences.goal === goal ? "border-primary bg-primary/5 ring-1 ring-primary" : ""
                                        }`}
                                    onClick={() => setPreferences({ ...preferences, goal: goal as GoalType })}
                                >
                                    <CardContent className="p-6">
                                        <span className="font-semibold text-lg">{goal}</span>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            {goal === "Lose Weight" && "Lower calorie, high volume meals."}
                                            {goal === "Build Muscle" && "High protein, moderate carb meals."}
                                            {goal === "Eat Healthy" && "Balanced macros with whole foods."}
                                            {goal === "Save Time" && "Quick prep, under 30 minute meals."}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}

                {step === 4 && (
                    <div className="text-center py-10 animate-in zoom-in-95 duration-500">
                        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
                        </div>
                        <h2 className="text-3xl font-bold mb-4">You're all set!</h2>
                        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                            We've customized your experience. Get ready to discover delicious recipes tailored to your {preferences.diet} diet.
                        </p>
                        <Link href="/recipes">
                            <Button size="lg" className="w-full sm:w-auto px-8">
                                View My Feed
                            </Button>
                        </Link>
                    </div>
                )}
            </div>

            {step < 4 && (
                <div className="mt-10 flex justify-between">
                    <Button
                        variant="ghost"
                        onClick={handleBack}
                        disabled={step === 1}
                        className={step === 1 ? "invisible" : ""}
                    >
                        Back
                    </Button>
                    <Button onClick={handleNext} className="px-8">
                        {step === totalSteps ? "Finish" : "Next"}
                    </Button>
                </div>
            )}
        </div>
    )
}
