import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Discover Recipes - FreshFeed",
    description: "Browse our curated list of healthy, personalized recipes tailored to your dietary needs.",
};

export default function RecipesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
