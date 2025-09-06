import { AutomationSection } from "@/components/marketing/automation-section";
import { Features } from "@/components/marketing/features";
import { Footer } from "@/components/marketing/footer";
import { Header } from "@/components/marketing/header";
import { Hero } from "@/components/marketing/hero";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { LegalFuture } from "@/components/marketing/legal-future";
import { Newsletter } from "@/components/marketing/newsletter";
import { Pricing } from "@/components/marketing/pricing";
import { ProblemSolution } from "@/components/marketing/problem-solution";
import { WhyChoose } from "@/components/marketing/why-choose";
import { ThemeProvider } from "@/contexts/marketing/theme-provider";

export default function Home() {
  return (
    <ThemeProvider>
      <Header />

      {/* Conteúdo Principal */}
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <HowItWorks />
        <ProblemSolution />
        <Features />
        <WhyChoose />
        <Pricing />
        <AutomationSection />
        <LegalFuture />
        <Newsletter />
      </main>

      {/* Rodapé do Site */}
      <Footer />
    </ThemeProvider>
  );
}
