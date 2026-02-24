// src/app/page.tsx
import Link from "next/link";
import AppShell from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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

export default function HomePage() {
  return (
    <AppShell>
      <div className="space-y-10">
        {/* Hero */}
        <section className="space-y-5">
          <div className="space-y-2">
            <Badge variant="secondary" className="font-normal">
              Minimal • Skill swapping • No payments
            </Badge>

            <h1 className="text-2xl font-semibold tracking-tight md:text-4xl">
              Swap skills with people who want what you know.
            </h1>

            <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
              Teach one skill, learn another. SkillSwap finds mutual matches
              based on what you can teach and what you want to learn.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
            <div className="w-full sm:max-w-lg">
              <Input placeholder="Search skills (e.g., React, Excel, English)..." />
            </div>
            <div className="flex gap-2">
              <Button asChild>
                <Link href="/matches">Explore matches</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/onboarding">Add my skills</Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {popularSkills.map((s) => (
              <Badge key={s} variant="secondary" className="font-normal">
                {s}
              </Badge>
            ))}
          </div>
        </section>

        <Separator />

        {/* How it works */}
        <section className="space-y-4">
          <h2 className="text-sm font-semibold tracking-tight">How it works</h2>

          <div className="grid gap-3 md:grid-cols-3">
            <Card className="shadow-none">
              <CardContent className="space-y-2 p-4">
                <div className="text-sm font-semibold">1) Add skills</div>
                <p className="text-sm text-muted-foreground">
                  Tell us what you can teach and what you want to learn.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-none">
              <CardContent className="space-y-2 p-4">
                <div className="text-sm font-semibold">2) Get matches</div>
                <p className="text-sm text-muted-foreground">
                  We suggest mutual swaps that make sense for both sides.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-none">
              <CardContent className="space-y-2 p-4">
                <div className="text-sm font-semibold">3) Schedule a session</div>
                <p className="text-sm text-muted-foreground">
                  Send a request, pick a time, then rate after the session.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Categories */}
        <section className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-sm font-semibold tracking-tight">Categories</h2>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/matches">View all</Link>
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <Button key={c} variant="outline" size="sm" className="rounded-full">
                {c}
              </Button>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section>
          <Card className="shadow-none">
            <CardContent className="flex flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between">
              <div className="space-y-1">
                <div className="text-sm font-semibold">Ready to start?</div>
                <p className="text-sm text-muted-foreground">
                  Add at least 1 skill you can teach and 1 skill you want to learn.
                </p>
              </div>

              <div className="flex gap-2">
                <Button asChild>
                  <Link href="/onboarding">Create my profile</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/matches">Browse matches</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="pb-6 text-xs text-muted-foreground">
          <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
            <span>© {new Date().getFullYear()} SkillSwap</span>
            <span className="md:text-right">
              Minimal prototype — authentication and backend will be added next.
            </span>
          </div>
        </footer>
      </div>
    </AppShell>
  );
}