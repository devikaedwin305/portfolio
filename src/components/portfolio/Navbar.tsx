import { useEffect, useState } from "react";
import { BriefcaseBusiness, FileText, Link2, Menu, UserRound, X, Zap } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { nav } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const dockNav = [
  { id: "home", label: "Home", icon: UserRound },
  { id: "projects", label: "Work", icon: BriefcaseBusiness },
  { id: "skills", label: "Skills", icon: Zap },
  { id: "about", label: "About", icon: FileText },
  { id: "contact", label: "Contact", icon: Link2 },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-42% 0px -48% 0px" },
    );
    nav.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) obs.observe(element);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-3 z-50 px-3 sm:top-4">
      <nav
        className="pointer-events-auto mx-auto flex h-12 w-fit max-w-full items-center gap-0.5 rounded-full border border-white/10 bg-[#100e11]/75 p-1.5 text-white shadow-[0_10px_45px_-18px_rgba(0,0,0,.8)] backdrop-blur-2xl sm:h-14 sm:gap-1 sm:p-2"
        aria-label="Main"
      >
        <div className="hidden items-center gap-0.5 md:flex">
          {dockNav.map(({ id, label, icon: Icon }) => (
            <motion.a
              key={id}
              href={`#${id}`}
              aria-label={label}
              aria-current={active === id ? "location" : undefined}
              title={label}
              onClick={() => setActive(id)}
              {...(reduce ? {} : { whileHover: { y: -2 }, whileTap: { scale: 0.96 } })}
              className={cn(
                "relative isolate flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-colors duration-300",
                active === id ? "text-[#24150f]" : "text-white/75 hover:text-white",
              )}
            >
              {active === id && (
                <motion.span
                  layoutId="active-nav"
                  className="absolute inset-0 -z-10 rounded-full bg-[#f4f0e9]"
                  transition={
                    reduce ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 30 }
                  }
                />
              )}
              <Icon className="h-[17px] w-[17px]" strokeWidth={2.2} />
              <span className="sr-only">{label}</span>
            </motion.a>
          ))}
        </div>

        <a
          href="#home"
          aria-label="Devika Krishna K — Home"
          className="flex h-10 items-center gap-2 rounded-full px-3 text-white md:hidden"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            DK
          </span>
          <span className="max-w-[100px] truncate text-xs font-semibold">Devika</span>
        </a>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-white md:hidden"
          onClick={() => setOpen((isOpen) => !isOpen)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "menu"}
              initial={reduce ? false : { opacity: 0, rotate: -45, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              {...(reduce ? {} : { exit: { opacity: 0, rotate: 45, scale: 0.8 } })}
              transition={{ duration: reduce ? 0 : 0.18 }}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: -12, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            {...(reduce ? {} : { exit: { opacity: 0, y: -8, height: 0 } })}
            transition={{ duration: reduce ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto mx-auto mt-2 max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-[#100e11]/95 p-2 text-white shadow-2xl backdrop-blur-2xl md:hidden"
          >
            {dockNav.map(({ id, label, icon: Icon }, i) => (
              <motion.a
                key={id}
                href={`#${id}`}
                onClick={() => {
                  setActive(id);
                  setOpen(false);
                }}
                initial={reduce ? false : { opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: reduce ? 0 : i * 0.04, duration: reduce ? 0 : 0.2 }}
                className={cn(
                  "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium",
                  active === id ? "bg-white text-[#24150f]" : "text-white/80 hover:bg-white/10",
                )}
              >
                <Icon className="h-4 w-4" />
                {label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
