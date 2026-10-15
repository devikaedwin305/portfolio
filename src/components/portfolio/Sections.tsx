import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowUpRight, ChevronDown, Mail, MapPin, Phone, Linkedin, Award } from "lucide-react";
import { about, skills, otherTools, project, interests, experience, education, certification, values, profile, nav } from "@/data/portfolio";
import { Reveal, SectionHead, btn, ResumeButton } from "./primitives";
import { ProjectChart } from "./Charts";

const wrap = "mx-auto max-w-7xl px-6 lg:px-10";

export function About() {
  const reduce = useReducedMotion();
  return (
    <section id="about" className="portfolio-section border-t py-24 md:py-36">
      <div className={wrap}>
        <SectionHead label="01 / About" heading={about.heading} />
        <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr]">
          <Reveal className="space-y-4">
            {about.markers.map((m, i) => (
              <motion.div key={m} {...(reduce ? {} : { whileHover: { x: 6 } })} transition={{ type: "spring", stiffness: 300, damping: 22 }} className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-colors hover:border-primary/60">
                <span className="font-display text-2xl font-bold text-sage">0{i + 1}</span>
                <span className="font-display font-semibold">{m}</span>
              </motion.div>
            ))}
            <motion.div {...(reduce ? {} : { whileHover: { y: -4 } })} className="rounded-2xl bg-primary p-5 text-primary-foreground shadow-soft">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] opacity-75">Currently learning</p>
              <p className="mt-2 font-display font-semibold">{about.learning.join(" · ")}</p>
            </motion.div>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-[1.05rem] leading-relaxed text-muted-foreground md:pl-8">
            {about.paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "border-l-2 border-primary pl-5 text-xl text-foreground md:text-2xl" : ""}>{p}</p>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="portfolio-section border-t bg-card py-24 md:py-36">
      <div className={wrap}>
        <SectionHead label="02 / Toolkit" heading="Tools for turning data into clarity." />
        <div className="grid gap-3 md:grid-cols-2">
          {skills.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} lift className="group rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition-colors hover:border-primary/50 hover:bg-white/[0.06] md:p-10">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] font-display text-xs font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  {s.code}
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <li key={it} className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-muted-foreground">{it}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 flex flex-wrap gap-x-10 gap-y-3 rounded-2xl border border-white/10 bg-white/[0.025] p-6 text-sm">
          <span className="eyebrow">Also</span>
          {otherTools.map((t) => (
            <span key={t.name}><span className="font-medium text-foreground">{t.name}</span> <span className="text-muted-foreground">— {t.use}</span></span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function FeaturedProject() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  return (
    <section id="projects" className="portfolio-section relative border-t py-24 md:py-36">
      <span className="section-wordmark" aria-hidden="true">Work</span>
      <div className={`${wrap} relative z-10`}>
        <SectionHead label="03 / Selected Work" heading={project.title} />
        <Reveal>
          <article className="project-feature overflow-hidden rounded-[2rem] border border-white/10 bg-card shadow-soft">
            <div className="grid lg:grid-cols-[1.1fr_1fr]">
              <div className="p-7 md:p-12 lg:p-14">
                <p className="eyebrow text-primary">{project.category}</p>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{project.overview}</p>
                <dl className="mt-10 grid gap-6 sm:grid-cols-3">
                  {project.highlights.map((h) => (
                    <motion.div key={h.value} {...(reduce ? {} : { whileHover: { y: -4 } })} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="border-t border-primary/70 pt-4">
                      <dt className="font-display text-4xl font-bold text-primary">{h.value}</dt>
                      <dd className="mt-2 text-sm text-muted-foreground">{h.label}</dd>
                    </motion.div>
                  ))}
                </dl>
              </div>
              <div className="border-t border-white/10 bg-black/20 p-6 lg:border-t-0 lg:border-l md:p-8">
                <ProjectChart />
              </div>
            </div>
            <div className="grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {project.stages.map((s) => (
                <motion.div key={s.n} {...(reduce ? {} : { whileHover: { y: -4 } })} transition={{ type: "spring", stiffness: 300, damping: 24 }} className="border-b border-white/10 p-6 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0">
                  <p className="font-display text-sm font-bold text-sage">{s.n}</p>
                  <h3 className="mt-2 font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                </motion.div>
              ))}
            </div>
            <div className="border-t">
              <button
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                className="flex w-full items-center justify-between px-8 py-5 text-left font-medium text-primary md:px-12"
              >
                View project details
                <ChevronDown className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <div className="grid gap-10 px-8 pb-10 md:grid-cols-2 md:px-12">
                      <div>
                        <h4 className="eyebrow mb-4">Objectives</h4>
                        <ul className="space-y-2 text-muted-foreground">{project.objectives.map((o) => <li key={o}>— {o}</li>)}</ul>
                      </div>
                      <div>
                        <h4 className="eyebrow mb-4">Key learnings</h4>
                        <ul className="space-y-2 text-muted-foreground">{project.learnings.map((o) => <li key={o}>— {o}</li>)}</ul>
                      </div>
                    </div>
                    <div className="px-8 pb-10 md:px-12">
                      <Link to="/projects/khadi-india" className={btn.primary}>
                        Read full case study <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

export function Journey() {
  const highlights = [
    ...project.highlights,
    { value: `${interests.length}`, label: "People analytics areas I’m actively exploring" },
  ];

  return (
    <section className="journey-section relative overflow-hidden border-y border-white/10 py-24 md:py-32">
      <div className={`${wrap} relative z-10`}>
        <Reveal className="mb-12 max-w-3xl">
          <p className="eyebrow mb-5 text-primary">A learning-led journey</p>
          <h2 className="font-display text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-5xl md:text-7xl">
            Small steps. <span className="text-primary">Meaningful insight.</span>
          </h2>
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((highlight, index) => (
            <Reveal key={highlight.label} delay={index * 0.08} lift className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 md:p-7">
              <p className="font-display text-5xl font-bold tracking-[-0.06em] text-primary md:text-6xl">{highlight.value}</p>
              <p className="mt-4 max-w-52 text-sm leading-relaxed text-muted-foreground">{highlight.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="portfolio-section border-t py-24 md:py-36">
      <div className={wrap}>
        <SectionHead label="05 / Leadership" heading="Bringing people and programmes together." />
        <ol className="relative border-l border-border pl-8 md:ml-40">
          {experience.map((e, i) => (
            <Reveal key={e.role} delay={i * 0.1} className="relative mb-14 last:mb-0">
              <li>
                <span className="absolute -left-[2.45rem] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />
                <p className="eyebrow mb-2 md:absolute md:-left-[12.5rem] md:top-1 md:w-36 md:text-right">{e.date}</p>
                <h3 className="font-display text-2xl font-semibold">{e.role}</h3>
                <p className="mt-1 text-primary">{e.org}</p>
                <ul className="mt-4 space-y-1.5 text-muted-foreground">{e.points.map((p) => <li key={p}>— {p}</li>)}</ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {e.tags.map((t) => <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">{t}</span>)}
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="portfolio-section border-t bg-card py-24 md:py-36">
      <div className={wrap}>
        <SectionHead label="06 / Education" heading="Learning across business, people and data." />
        <div className="grid gap-4 md:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.06} lift className="rounded-lg border bg-background p-7">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-lg font-semibold">{e.title}</h3>
                <span className={`shrink-0 rounded-full px-3 py-1 text-xs ${e.current ? "bg-primary text-primary-foreground" : "border text-muted-foreground"}`}>{e.meta}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{e.org}</p>
            </Reveal>
          ))}
          <Reveal lift className="flex items-center gap-5 rounded-lg border border-primary/40 bg-accent p-7 md:col-span-2">
            <Award className="h-8 w-8 shrink-0 text-primary" />
            <div>
              <p className="eyebrow">Certification</p>
              <h3 className="mt-1 font-display text-lg font-semibold">{certification.title}</h3>
              <p className="text-sm text-muted-foreground">{certification.org}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Values() {
  return (
    <section className="portfolio-section border-t py-24 md:py-36">
      <div className={wrap}>
        <SectionHead label="Working style" heading="How I approach my work." />
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08} lift>
              <span className="block h-1 w-10 bg-sage" />
              <h3 className="mt-5 font-display text-xl font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const items = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phone, href: profile.phoneHref },
    { icon: MapPin, label: profile.location },
    { icon: Linkedin, label: "linkedin.com/in/devika-krishna-k", href: profile.linkedin, ext: true },
  ];
  return (
    <section id="contact" className="contact-section py-24 text-primary-foreground md:py-36">
      <div className={wrap}>
        <Reveal>
          <p className="mb-5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] opacity-70">07 / Let's connect</p>
          <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] md:text-6xl">Let's turn data into better decisions.</h2>
          <p className="mt-6 max-w-2xl text-lg opacity-80">
            I'm looking forward to beginning my professional journey in HR Analytics and connecting with teams that value
            people, learning, and data-driven decision-making.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <ul className="space-y-5">
            {items.map(({ icon: Icon, label, href, ext }) => (
              <li key={label} className="flex items-center gap-4">
                <Icon className="h-5 w-5 opacity-70" />
                {href ? (
                  <a href={href} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="link-underline pb-0.5 text-lg">{label}</a>
                ) : (
                  <span className="text-lg">{label}</span>
                )}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-start gap-4">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-md bg-background px-6 py-3 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5">
              <Mail className="h-4 w-4" /> Email Me
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-6 py-3 text-sm font-medium transition-colors hover:bg-primary-foreground/10">
              <Linkedin className="h-4 w-4" /> Connect on LinkedIn
            </a>
            <ResumeButton />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t py-12">
      <div className={`${wrap} flex flex-col gap-8 md:flex-row md:items-center md:justify-between`}>
        <div>
          <p className="font-display font-semibold">{profile.name}</p>
          <p className="text-sm text-muted-foreground">HR Analytics · People · Data</p>
        </div>
        <ul className="flex flex-wrap gap-5 text-sm text-muted-foreground">
          {nav.map((n) => <li key={n.id}><a href={`/#${n.id}`} className="link-underline hover:text-foreground">{n.label}</a></li>)}
        </ul>
        <div className="flex gap-5 text-sm">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline text-primary">LinkedIn</a>
          <a href={`mailto:${profile.email}`} className="link-underline text-primary">Email</a>
        </div>
      </div>
      <p className={`${wrap} mt-8 text-xs text-muted-foreground`}>© {new Date().getFullYear()} {profile.name}</p>
    </footer>
  );
}
