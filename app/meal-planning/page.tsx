"use client"

import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import { PlusCircle, Calendar, ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const MEAL_TYPES = ["Breakfast", "Lunch", "Dinner", "Snack"]

export default function MealPlanningPage() {
    return (
        <div className="container p-4 py-8 mx-auto max-w-screen-xl">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Meal Planner</h1>
                    <p className="text-muted-foreground mt-1">Plan your nutrition for the week.</p>
                </div>

                <div className="flex items-center gap-2 bg-card border p-1 rounded-lg">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <div className="flex items-center gap-2 px-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Jan 29 - Feb 4</span>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                {DAYS.map((day, index) => (
                    <div key={day} className="flex flex-col gap-3 min-w-[140px]">
                        <div className={`text-center p-2 rounded-lg font-semibold ${index === 0 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                            }`}>
                            {day}
                        </div>

                        <div className="space-y-3">
                            {MEAL_TYPES.map((type) => (
                                <Card key={`${day}-${type}`} className="relative group border-dashed hover:border-solid transition-all min-h-[100px] flex flex-col">
                                    {/* Empty State Slot */}
                                    <button className="flex-1 w-full flex flex-col items-center justify-center gap-2 p-2 text-muted-foreground/40 hover:text-primary transition-colors">
                                        <span className="text-xs font-medium uppercase tracking-wider">{type}</span>
                                        <PlusCircle className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </button>

                                    {/* Mock Filled Item for Demo (Monday Lunch) */}
                                    {day === "Mon" && type === "Lunch" && (
                                        <div className="absolute inset-0 bg-card border border-primary/20 rounded-xl p-3 flex flex-col justify-between shadow-sm z-10 cursor-pointer hover:border-primary/50">
                                            <div className="flex justify-between items-start">
                                                <span className="text-xs font-bold text-primary">Lunch</span>
                                                <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-sm line-clamp-2 leading-tight">Mediterranean Quinoa Bowl</p>
                                                <p className="text-xs text-muted-foreground mt-1">450 kcal</p>
                                            </div>
                                        </div>
                                    )}
                                </Card>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
