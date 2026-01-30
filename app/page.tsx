import { Button } from "@/components/ui/Button";
import Link from "next/link";
// import Image from "next/image"; // Will add later when we have assets

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center gap-6 py-24 text-center md:py-32 lg:py-40 overflow-hidden">

        {/* Abstract Background Elements */}
        <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute top-1/4 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[80px]" />

        <div className="container max-w-4xl px-4 animate-in fade-in zoom-in-95 duration-700">
          <div className="mx-auto mb-6 flex w-fit items-center justify-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <span>✨ The future of personalized cooking is here</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Cook <span className="text-primary">Smarter</span>,<br />
            Eat <span className="text-accent">Better</span>.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Discover recipes aimed at your health goals. FreshFeed personalizes your meal planning
            with smart dietary filters and nutritional insights.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/onboarding">
              <Button size="lg" className="h-12 w-full min-w-[160px] text-base sm:w-auto shadow-lg shadow-primary/25">
                Start My Plan
              </Button>
            </Link>
            <Link href="/recipes">
              <Button variant="outline" size="lg" className="h-12 w-full min-w-[160px] text-base sm:w-auto">
                Browse Recipes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container max-w-6xl px-4 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Feature 1 */}
          <div className="group rounded-2xl border bg-card p-8 shadow-sm transition-all hover:shadow-md hover:border-primary/20">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h10" /><path d="M9 4v16" /><path d="m3 9 3 3-3 3" /><path d="M14 8V7c0-1.1.9-2 2-2h6" /><path d="M14 12v-1" /><path d="M14 16v-1" /><path d="M14 20v-1" /></svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Smart Filters</h3>
            <p className="text-muted-foreground">
              Easily filter recipes by calories, macros, allergies, and dietary preferences (Keto, Vegan, etc).
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group rounded-2xl border bg-card p-8 shadow-sm transition-all hover:shadow-md hover:border-primary/20">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 17h11" /><path d="M6 20h12a1 1 0 0 0 1-1v-5.85a.63.63 0 0 0-.2-.4l-.07-.06-.06-.05a.72.72 0 0 0-.21-.08l-.2-.04H4.74l-.2.04a.72.72 0 0 0-.21.08l-.06.05-.07.06a.63.63 0 0 0-.2.4V19a1 1 0 0 0 1 1ZM18 10l-1.63-3.26a.63.63 0 0 0-.21-.2l-.07-.04-.26-.08H8.17l-.26.08-.07.04a.63.63 0 0 0-.21.2L6 10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1Z" /></svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Meal Planning</h3>
            <p className="text-muted-foreground">
              Organize your week with our intuitive drag-and-drop meal planner and automated grocery lists.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group rounded-2xl border bg-card p-8 shadow-sm transition-all hover:shadow-md hover:border-primary/20">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21.36 5.86 16a2 2 0 0 1 0-2.82l6.14-5.36 6.14 5.36a2 2 0 0 1 0 2.82L12 21.36Z" /><path d="M12 13.86 5.86 8.5a2 2 0 0 1 0-2.82L12 1.5l6.14 4.18a2 2 0 0 1 0 2.82L12 13.86Z" /></svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Personalized Engine</h3>
            <p className="text-muted-foreground">
              Our AI learns your taste preferences over time to suggest recipes you'll actually love.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
