import { Badge } from "@/components/ui/badge";

export function SkillBadge({
  label,
  level,
  tone = "neutral",
}: {
  label: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  tone?: "neutral" | "teach" | "learn";
}) {
  const variant = "secondary";
  const cls =
    tone === "teach"
      ? "border border-border bg-background"
      : tone === "learn"
      ? "border border-border bg-muted"
      : "border border-border";

  return (
    <Badge variant={variant} className={["gap-2 font-normal", cls].join(" ")}>
      <span className="text-xs">{label}</span>
      <span className="text-xs text-muted-foreground">· {level}</span>
    </Badge>
  );
}