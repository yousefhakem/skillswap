// src/app/page.tsx
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Users, Repeat, CalendarDays, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const popularSkills = [
  "React",
  "Next.js",
  "Excel",
  "UI Design",
  "English Speaking",
  "SQL",
  "Python",
  "Figma",
];

const categories = [
  "Programming",
  "Design",
  "Languages",
  "Data",
  "Productivity",
  "Marketing",
  "Business",
];

const features = [
  {
    icon: Users,
    title: "Mutual skill matches",
    description:
      "Find people who can teach what you want to learn and want to learn what you can teach.",
  },
  {
    icon: Repeat,
    title: "No money involved",
    description:
      "Exchange knowledge through skill-for-skill sessions instead of payments or subscriptions.",
  },
  {
    icon: CalendarDays,
    title: "Simple scheduling",
    description:
      "Connect, agree on a time, and start learning together with minimal friction.",
  },
];

const steps = [
  {
    title: "Create your profile",
    description:
      "Add the skills you can teach, the skills you want to learn, and your experience level.",
  },
  {
    title: "Discover relevant matches",
    description:
      "We highlight people with strong mutual learning potential, not random profiles.",
  },
  {
    title: "Start your first swap",
    description:
      "Send a request, schedule a session, and build momentum through consistent exchanges.",
  },
];

const testimonials = [
  {
    name: "Maya",
    role: "UI Designer",
    quote:
      "I helped someone with Figma and learned SQL basics in return. It felt practical from day one.",
  },
  {
    name: "Omar",
    role: "Frontend Developer",
    quote:
      "The matching idea is what makes this useful. I was not browsing endlessly — I found a real swap quickly.",
  },
  {
    name: "Lina",
    role: "Marketing Specialist",
    quote:
      "It is simple, focused, and easy to understand. Great concept for people who want to learn without paying.",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-6 md:px-6 md:py-10">
      <div className="space-y-14">
        {/* Hero */}
        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <Badge variant="secondary" className="w-fit font-normal">
                <Sparkles className="mr-1 h-3.5 w-3.5" />
                Minimal platform • Skill swapping • No payments
              </Badge>

              <h1 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Learn faster by trading skills with people who value what you know.
              </h1>

              <p className="max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
                SkillSwap helps people teach one skill and learn another through
                mutually beneficial matches. No payments, no clutter, just useful
                exchanges between motivated learners.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/onboarding">
                  Create my profile
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <Link href="/matches">Browse matches</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {popularSkills.map((skill) => (
                <Badge key={skill} variant="secondary" className="font-normal">
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-1 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                Mutual matching
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                No payments
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                Simple onboarding
              </div>
            </div>
          </div>

          <Card className="border-border/60 bg-muted/30 shadow-none">
            <CardContent className="p-5 md:p-6">
              <div className="space-y-5">
                <div className="space-y-2">
                  <div className="text-sm font-semibold">Example match</div>
                  <p className="text-sm text-muted-foreground">
                    See how a mutual skill exchange could work.
                  </p>
                </div>

                <div className="rounded-xl border bg-background p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-medium">You teach</div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        React basics, component thinking, project structure
                      </p>
                    </div>
                    <Badge>Teach</Badge>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
                    Mutual swap
                  </div>
                </div>

                <div className="rounded-xl border bg-background p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-medium">You learn</div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Figma workflows, design systems, UI handoff basics
                      </p>
                    </div>
                    <Badge variant="secondary">Learn</Badge>
                  </div>
                </div>

                <Separator />

                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-lg border bg-background p-3">
                    <div className="text-lg font-semibold">1:1</div>
                    <div className="text-xs text-muted-foreground">Exchange</div>
                  </div>
                  <div className="rounded-lg border bg-background p-3">
                    <div className="text-lg font-semibold">Free</div>
                    <div className="text-xs text-muted-foreground">No payment</div>
                  </div>
                  <div className="rounded-lg border bg-background p-3">
                    <div className="text-lg font-semibold">Fast</div>
                    <div className="text-xs text-muted-foreground">Get matched</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Social proof / value strip */}
        <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <Card className="shadow-none">
            <CardContent className="p-4">
              <div className="text-2xl font-semibold">Skill-for-skill</div>
              <p className="mt-1 text-sm text-muted-foreground">
                Learn through direct exchange instead of one-way consumption.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-none">
            <CardContent className="p-4">
              <div className="text-2xl font-semibold">Focused matches</div>
              <p className="mt-1 text-sm text-muted-foreground">
                Relevance matters more than large profile directories.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-none">
            <CardContent className="p-4">
              <div className="text-2xl font-semibold">Lightweight flow</div>
              <p className="mt-1 text-sm text-muted-foreground">
                Minimal steps from signup to your first learning session.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-none">
            <CardContent className="p-4">
              <div className="text-2xl font-semibold">Built for momentum</div>
              <p className="mt-1 text-sm text-muted-foreground">
                Start small, keep exchanging, and grow your skills over time.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Features */}
        <section className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-tight text-muted-foreground uppercase">
              Why SkillSwap works
            </h2>
            <p className="max-w-2xl text-2xl font-semibold tracking-tight">
              A simpler way to learn from real people.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <Card key={feature.title} className="shadow-none">
                  <CardContent className="space-y-3 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border bg-muted/40">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="text-sm leading-6 text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* How it works */}
        <section className="space-y-5">
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-2">
              <h2 className="text-sm font-semibold tracking-tight text-muted-foreground uppercase">
                How it works
              </h2>
              <p className="text-2xl font-semibold tracking-tight">
                Three simple steps to start swapping skills
              </p>
            </div>

            <Button variant="ghost" size="sm" asChild>
              <Link href="/onboarding">Get started</Link>
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <Card key={step.title} className="shadow-none">
                <CardContent className="space-y-3 p-5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold">
                    {index + 1}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-1">
              <h2 className="text-sm font-semibold tracking-tight text-muted-foreground uppercase">
                Explore categories
              </h2>
              <p className="text-xl font-semibold tracking-tight">
                Start with the skills people commonly exchange
              </p>
            </div>

            <Button variant="ghost" size="sm" asChild>
              <Link href="/matches">View all</Link>
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-tight text-muted-foreground uppercase">
              Early feedback
            </h2>
            <p className="text-2xl font-semibold tracking-tight">
              People value clarity, relevance, and simplicity
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.name} className="shadow-none">
                <CardContent className="space-y-4 p-5">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-sm leading-6 text-muted-foreground">
                    “{item.quote}”
                  </p>

                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-xs text-muted-foreground">{item.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section>
          <Card className="shadow-none">
            <CardContent className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-1">
                <div className="text-lg font-semibold">
                  Ready to make your first skill exchange?
                </div>
                <p className="max-w-2xl text-sm text-muted-foreground">
                  Add at least one skill you can teach and one skill you want to
                  learn. We will help you discover the most relevant mutual matches.
                </p>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row">
                <Button asChild>
                  <Link href="/onboarding">
                    Create my profile
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/matches">Browse matches</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="border-t pt-6 text-xs text-muted-foreground">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <span>© {new Date().getFullYear()} SkillSwap</span>
            <span className="md:text-right">
              Minimal prototype — authentication, messaging, and backend matching
              logic can be added next.
            </span>
          </div>
        </footer>
      </div>
    </main>
  );
}