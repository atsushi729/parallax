import { Suspense } from "react";
import { HeroSection } from "@/components/HeroSection";
import { CategoryGrid } from "@/components/CategoryGrid";
import { NovelList } from "@/components/NovelList";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoryGrid />
      <Suspense>
        <NovelList />
      </Suspense>
    </main>
  );
}
