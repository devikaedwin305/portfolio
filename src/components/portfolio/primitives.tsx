import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { Download } from "lucide-react";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
  lift = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  lift?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 32, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: reduce ? 0 : 0.7, delay: reduce ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
      {...(lift && !reduce
        ? { whileHover: { y: -6, scale: 1.015 }, whileTap: { scale: 0.99 } }
        : {})}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({ label, heading, className }: { label: string; heading: string; className?: string }) {
  return (
    <Reveal className={cn("mb-14 max-w-4xl", className)}>
      <p className="eyebrow mb-5 flex items-center gap-3 text-primary">
        <span className="h-px w-8 bg-primary" />
        {label}
      </p>
      <h2 className="font-display text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-foreground sm:text-5xl md:text-7xl">{heading}</h2>
    </Reveal>
  );
}

export const btn = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft",
  outline:
    "inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 bg-card px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary",
};

export function ResumeButton({ className }: { className?: string }) {
  if (profile.resumeUrl) {
    return (
      <a href={profile.resumeUrl} download className={cn(btn.outline, className)}>
        <Download className="h-4 w-4" /> Download Resume
      </a>
    );
  }
  return (
    <button
      type="button"
      disabled
      title="Resume coming soon"
      className={cn(btn.outline, "cursor-not-allowed opacity-50 hover:translate-y-0 hover:border-foreground/20 hover:text-foreground", className)}
    >
      <Download className="h-4 w-4" /> Resume coming soon
    </button>
  );
}
