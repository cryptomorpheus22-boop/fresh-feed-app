import Link from "next/link"
import { Button } from "@/components/ui/Button"

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="hidden h-8 w-8 items-center justify-center rounded-lg bg-primary text-lg font-bold text-white sm:flex">
                            F
                        </span>
                        <span className="text-xl font-bold tracking-tight text-secondary">
                            FreshFeed
                        </span>
                    </Link>
                </div>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                    <Link href="/recipes" className="transition-colors hover:text-foreground">
                        Recipes
                    </Link>
                    <Link href="/meal-planning" className="transition-colors hover:text-foreground">
                        Meal Plans
                    </Link>
                    <Link href="/favorites" className="transition-colors hover:text-foreground">
                        Favorites
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                        Sign In
                    </Button>
                    <Button variant="default" size="sm">
                        Get Started
                    </Button>
                </div>
            </div>
        </header>
    )
}
