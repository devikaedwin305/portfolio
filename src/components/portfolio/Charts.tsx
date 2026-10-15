import { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { demo, interests } from "@/data/portfolio";
import { Reveal, SectionHead } from "./primitives";
import { cn } from "@/lib/utils";

const tip = {
  contentStyle: {
    background: "var(--color-card)",
    border: "1px solid var(--color-border)",
    borderRadius: 6,
    fontSize: 12,
  },
  cursor: { fill: "var(--color-muted)" },
};
const tick = { fill: "var(--color-muted-foreground)", fontSize: 11 };
const palette = [
  "var(--color-chart-1)",
  "var(--color-chart-2)",
  "var(--color-chart-3)",
  "var(--color-chart-4)",
  "var(--color-chart-5)",
];

export function Disclaimer({ children }: { children: React.ReactNode }) {
  return <p className="text-xs italic text-muted-foreground">{children}</p>;
}

// Illustrative only — category weights are placeholders, not Khadi India data.
const projectIllustration = [
  { area: "Pricing", v: 3 },
  { area: "Distribution", v: 4 },
  { area: "Promotion", v: 5 },
  { area: "Awareness", v: 4 },
  { area: "Operations", v: 3 },
];

export function ProjectChart() {
  return (
    <div className="flex h-full flex-col">
      <p className="eyebrow mb-4">Challenge areas · sample layout</p>
      <div className="h-56 flex-1 md:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={projectIllustration} layout="vertical" margin={{ left: 10, right: 10 }}>
            <XAxis type="number" hide />
            <YAxis
              type="category"
              dataKey="area"
              tick={tick}
              axisLine={false}
              tickLine={false}
              width={84}
            />
            <Tooltip {...tip} formatter={() => ["Illustrative", ""]} />
            <Bar dataKey="v" radius={[0, 3, 3, 0]} animationDuration={1200}>
              {projectIllustration.map((_, i) => (
                <Cell key={i} fill={i === 2 ? "var(--color-primary)" : "var(--color-sage)"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <Disclaimer>Illustrative visualization — not actual project data.</Disclaimer>
    </div>
  );
}

export function HRAnalytics() {
  const [view, setView] = useState<"funnel" | "hiring">("funnel");
  const total = demo.headcount.reduce((a, b) => a + b.value, 0);
  return (
    <section className="border-t bg-card py-24 md:py-32" aria-labelledby="interests">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHead label="04 / Areas of Interest" heading="Exploring the people side of data." />
        <div className="grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {interests.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08} className="bg-card p-7">
              <p className="font-display text-sm font-bold text-sage">0{i + 1}</p>
              <h3 className="mt-3 font-display text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-foreground/80">{it.text}</p>
              <p className="mt-4 border-t pt-4 text-xs text-muted-foreground">{it.use}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 rounded-xl border bg-background p-6 md:p-10">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="rounded bg-primary px-2 py-0.5 text-[0.65rem] font-bold tracking-[0.18em] text-primary-foreground">
                DEMO
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold">Workforce dashboard</h3>
            </div>
            <Disclaimer>
              Demonstration dashboard using illustrative data for learning and portfolio
              presentation. This is not based on real employee records or a completed client
              project.
            </Disclaimer>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            <div className="rounded-lg border bg-card p-5">
              <p className="eyebrow">Headcount</p>
              <p className="mt-2 font-display text-4xl font-bold">{total}</p>
              <p className="eyebrow mt-6">Turnover indicator</p>
              <div className="mt-3 flex items-end gap-2">
                <p className="font-display text-3xl font-bold text-primary">{demo.turnoverRate}%</p>
                <p className="pb-1 text-xs text-muted-foreground">annualised (sample)</p>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
                <div className="h-full bg-primary" style={{ width: `${demo.turnoverRate * 5}%` }} />
              </div>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <p className="eyebrow">Department distribution</p>
              <div className="h-52">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={demo.headcount}
                      dataKey="value"
                      nameKey="dept"
                      innerRadius={45}
                      outerRadius={75}
                      paddingAngle={2}
                      stroke="none"
                    >
                      {demo.headcount.map((_, i) => (
                        <Cell key={i} fill={palette[i]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={tip.contentStyle} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
                {demo.headcount.map((d, i) => (
                  <li key={d.dept} className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full" style={{ background: palette[i] }} />
                    {d.dept}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <div className="flex gap-1" role="tablist">
                {(["funnel", "hiring"] as const).map((v) => (
                  <button
                    key={v}
                    role="tab"
                    aria-selected={view === v}
                    onClick={() => setView(v)}
                    className={cn(
                      "rounded px-3 py-1.5 text-xs font-medium transition-colors",
                      view === v
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted",
                    )}
                  >
                    {v === "funnel" ? "Recruitment funnel" : "Monthly hires"}
                  </button>
                ))}
              </div>
              <div className="mt-4 h-56">
                <ResponsiveContainer width="100%" height="100%">
                  {view === "funnel" ? (
                    <BarChart data={demo.funnel} layout="vertical">
                      <XAxis type="number" hide />
                      <YAxis
                        type="category"
                        dataKey="stage"
                        tick={tick}
                        axisLine={false}
                        tickLine={false}
                        width={78}
                      />
                      <Tooltip {...tip} />
                      <Bar dataKey="value" fill="var(--color-primary)" radius={[0, 3, 3, 0]} />
                    </BarChart>
                  ) : (
                    <LineChart data={demo.hiring}>
                      <CartesianGrid stroke="var(--color-border)" vertical={false} />
                      <XAxis dataKey="m" tick={tick} axisLine={false} tickLine={false} />
                      <YAxis tick={tick} axisLine={false} tickLine={false} width={24} />
                      <Tooltip contentStyle={tip.contentStyle} />
                      <Line
                        type="monotone"
                        dataKey="hires"
                        stroke="var(--color-primary)"
                        strokeWidth={2}
                        dot={{ r: 3 }}
                      />
                    </LineChart>
                  )}
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-6 overflow-hidden rounded-xl border bg-background p-6 md:p-10">
          <div className="grid items-center gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="rounded bg-primary px-2 py-0.5 text-[0.65rem] font-bold tracking-[0.18em] text-primary-foreground">
                ILLUSTRATIVE DEMO
              </span>
              <h3 className="mt-4 font-display text-3xl font-semibold">Insight in motion</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                A sample monthly hiring trend shows how a simple time series can make workforce
                movement easier to see and discuss.
              </p>
              <div className="mt-5">
                <Disclaimer>
                  Illustrative sample values only — not actual employee or company data.
                </Disclaimer>
              </div>
            </div>
            <div className="h-64 min-w-0">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={demo.hiring} margin={{ top: 12, right: 14, left: 0, bottom: 0 }}>
                  <CartesianGrid stroke="var(--color-border)" vertical={false} />
                  <XAxis dataKey="m" tick={tick} axisLine={false} tickLine={false} />
                  <YAxis tick={tick} axisLine={false} tickLine={false} width={28} />
                  <Tooltip contentStyle={tip.contentStyle} />
                  <Line
                    type="monotone"
                    dataKey="hires"
                    name="Sample hires"
                    stroke="var(--color-primary)"
                    strokeWidth={3}
                    dot={{ r: 3, fill: "var(--color-primary)" }}
                    activeDot={{ r: 6 }}
                    animationDuration={1400}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
