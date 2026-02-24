import AppShell from "@/components/layout/AppShell";
import MatchCard from "@/components/features/matches/MatchCard";
import { mockMatches } from "@/mock/matches";

export default function MatchesPage() {
  return (
    <AppShell>
      <div className="mb-6">
        <h1 className="text-lg font-semibold tracking-tight">Matches</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Find mutual skill swaps based on what you teach and what you want to learn.
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {mockMatches.map((m) => (
          <MatchCard key={m.id} m={m} />
        ))}
      </div>
    </AppShell>
  );
}