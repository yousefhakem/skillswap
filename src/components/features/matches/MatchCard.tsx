"use client";

import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SkillBadge } from "@/components/features/skills/SkillBadge";
import { Badge } from "@/components/ui/badge";

export type MatchCardModel = {
  id: string;
  name: string;
  headline?: string;
  rating: number; // 0..5
  sessionsCount: number;
  teach: { skill: string; level: "Beginner" | "Intermediate" | "Advanced" };
  learn: { skill: string; level: "Beginner" | "Intermediate" | "Advanced" };
};

export default function MatchCard({ m }: { m: MatchCardModel }) {
  const initials =
    m.name
      .split(" ")
      .slice(0, 2)
      .map((x) => x[0]?.toUpperCase())
      .join("") || "U";

  return (
    <Card className="shadow-none">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold">{m.name}</div>
              <div className="truncate text-xs text-muted-foreground">
                {m.headline ?? "Available for skill swap"}
              </div>
            </div>
          </div>

          <Badge variant="secondary" className="font-normal">
            ★ {m.rating.toFixed(1)} <span className="text-muted-foreground">&nbsp;· {m.sessionsCount}</span>
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="text-xs text-muted-foreground">Swap proposal</div>
        <div className="flex flex-wrap gap-2">
          <SkillBadge label={`Teaches: ${m.teach.skill}`} level={m.teach.level} tone="teach" />
          <SkillBadge label={`Learns: ${m.learn.skill}`} level={m.learn.level} tone="learn" />
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between gap-2">
        <Button variant="outline" size="sm" asChild>
          <Link href={`/users/${m.id}`}>View</Link>
        </Button>
        <Button size="sm" onClick={() => alert("Request Swap (wire later)")}>
          Request swap
        </Button>
      </CardFooter>
    </Card>
  );
}