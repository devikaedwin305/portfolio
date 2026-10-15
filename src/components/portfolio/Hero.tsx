import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { profile } from "@/data/portfolio";
import { btn, ResumeButton } from "./primitives";

export function Hero() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.08]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="hero-section relative flex min-h-[100svh] items-end overflow-hidden px-6 pb-16 pt-28 text-white lg:px-12 lg:pb-20"
    >
      <motion.div
        className="hero-photo absolute inset-0"
        aria-hidden="true"
        initial={reduce ? false : { opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        {...(reduce ? {} : { style: { y: photoY, scale: photoScale } })}
      >
        <img
          src="/devika-portrait.jpeg"
          alt=""
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </motion.div>
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="hero-glow absolute inset-0" aria-hidden="true" />

      <span className="hero-backdrop-name" aria-hidden="true">
        Devika Krishna K
      </span>
      <span className="hero-signature" aria-hidden="true">
        Devika Krishna K
      </span>

      <div className="hero-copy relative z-10 mx-auto w-full max-w-[1440px]">
        <motion.p
          className="hero-quote mb-5 flex max-w-3xl items-start gap-3 font-display text-lg font-semibold leading-tight text-white sm:text-xl lg:mb-6 lg:text-2xl"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.3 }}
        >
          <span aria-hidden="true" className="text-4xl leading-[0.8] text-primary sm:text-5xl">
            “
          </span>
          <span className="pt-1">I turn people data into meaningful insights.</span>
        </motion.p>

        <motion.h1
          className="max-w-4xl font-display text-[clamp(2.65rem,5.8vw,5.25rem)] font-bold leading-[0.98] tracking-[-0.055em] text-white"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          {profile.title}
        </motion.h1>

        <motion.div
          className="mt-4 max-w-[760px]"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.56 }}
        >
          <p className="text-base leading-relaxed text-white/85 sm:text-lg lg:text-xl">
            I’m a BBA graduate exploring the intersection of Human Resources and Data Analytics,
            using structured analysis and clear visualization to support better, people-first
            decisions.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href="#projects" className={`${btn.primary} hero-primary-cta`}>
              Explore my work <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="hero-secondary-cta">
              Let’s connect <ArrowUpRight className="h-4 w-4" />
            </a>
            <ResumeButton className="hero-resume-button" />
          </div>
        </motion.div>
      </div>

      <div className="hero-image-caption absolute bottom-8 right-6 z-10 hidden items-center gap-3 text-right text-white/75 lg:flex">
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em]">
          People · Data · Impact
        </span>
        <span className="h-px w-10 bg-primary" />
      </div>
      <a
        href="#about"
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/65 transition-colors hover:text-white md:flex"
        aria-label="Scroll to about"
      >
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.22em]">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bob" />
      </a>
      <span className="sr-only">{profile.location}</span>
    </section>
  );
}
