import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About, Skills, FeaturedProject, Journey, Experience, Education, Values, Contact, Footer } from "@/components/portfolio/Sections";
import { HRAnalytics } from "@/components/portfolio/Charts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Devika Krishna K | HR Analytics & Data Portfolio" },
      { name: "description", content: "Portfolio of Devika Krishna K, aspiring HR Analyst — HR Analytics, Excel, Power BI, business administration and data visualization." },
      { property: "og:title", content: "Devika Krishna K | HR Analytics & Data Portfolio" },
      { property: "og:description", content: "Aspiring HR Analyst combining business administration, Excel, Power BI and data visualization." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedProject />
        <Journey />
        <Skills />
        <HRAnalytics />
        <Experience />
        <Education />
        <Values />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
