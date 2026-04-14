import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { Differentials } from "@/components/Differentials";
import { SocialProof } from "@/components/SocialProof";
import { Footer } from "@/components/Footer";
import { FeaturedProperties } from "@/components/FeaturedProperties";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trivan Construtora e Incorporadora — Qualidade e compromisso que você merece!" },
      { name: "description", content: "Trivan Construtora e Incorporadora: certificada PBQP-H, atuando em construção civil, incorporação e reformas residenciais e comerciais em Campina Grande e Sousa - PB." },
      { property: "og:title", content: "Trivan Construtora e Incorporadora — Qualidade e compromisso que você merece!" },
      { property: "og:description", content: "Construtora e Incorporadora certificada PBQP-H. Construção, incorporação e reformas." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroCarousel />
        <AboutSection />
        <FeaturedProperties />
        <ProjectsGrid />
        <Differentials />
        <SocialProof />
      </main>
      <Footer />
    </div>
  );
}
