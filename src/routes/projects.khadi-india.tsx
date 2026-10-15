import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { project } from "@/data/portfolio";
import { ProjectChart } from "@/components/portfolio/Charts";
import { Reveal } from "@/components/portfolio/primitives";
import { Footer } from "@/components/portfolio/Sections";

export const Route = createFileRoute("/projects/khadi-india")({
  head: () => ({
    meta: [
      { title: "Khadi India Marketing Strategy Analysis | Devika Krishna K" },
      { name: "description", content: "Case study: an academic marketing strategy analysis of Khadi India using structured research and Excel reporting." },
      { property: "og:title", content: "Khadi India Marketing Strategy Analysis — Case Study" },
      { property: "og:description", content: "Academic project by Devika Krishna K: 25+ challenges, 15+ Excel reports, 30+ recommendations." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaseStudy,
});

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal className="grid gap-4 border-t py-12 md:grid-cols-[220px_1fr]">
      <h2 className="eyebrow pt-1">{title}</h2>
      <div className="text-lg leading-relaxed text-muted-foreground">{children}</div>
    </Reveal>
  );
}

function CaseStudy() {
  return (
    <>
      <main className="mx-auto max-w-5xl px-6 pt-10 pb-24 lg:px-10">
        <Link to="/" hash="projects" className="inline-flex items-center gap-2 text-sm text-primary">
          <ArrowLeft className="h-4 w-4" /> Back to portfolio
        </Link>
        <header className="py-16">
          <p className="eyebrow">{project.category}</p>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] md:text-6xl">{project.title}</h1>
          <dl className="mt-12 grid gap-6 sm:grid-cols-3">
            {project.highlights.map((h) => (
              <div key={h.value} className="border-t-2 border-primary pt-4">
                <dt className="font-display text-4xl font-bold text-primary">{h.value}</dt>
                <dd className="mt-2 text-sm text-muted-foreground">{h.label}</dd>
              </div>
            ))}
          </dl>
        </header>
        <Block title="Overview"><p>{project.overview}</p></Block>
        <Block title="Objectives"><ul className="space-y-2">{project.objectives.map((o) => <li key={o}>— {o}</li>)}</ul></Block>
        <Block title="Process">
          <ol className="grid gap-6 sm:grid-cols-2">
            {project.stages.map((s) => (
              <li key={s.n}><p className="font-display text-sm font-bold text-sage">{s.n}</p><p className="font-display font-semibold text-foreground">{s.title}</p><p className="text-base">{s.text}</p></li>
            ))}
          </ol>
        </Block>
        <Block title="Visualization">
          <div className="rounded-xl border bg-card p-6"><ProjectChart /></div>
        </Block>
        <Block title="Recommendations"><p>{project.recommendationsNote}</p></Block>
        <Block title="Key learnings"><ul className="space-y-2">{project.learnings.map((o) => <li key={o}>— {o}</li>)}</ul></Block>
        <Block title="Reflection"><p className="text-foreground">{project.reflection}</p></Block>
      </main>
      <Footer />
    </>
  );
}
