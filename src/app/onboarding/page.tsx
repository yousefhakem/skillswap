import AppShell from "@/components/layout/AppShell";
import OnBoardingClient from "./_components/OnBoardingClient";
import { requireAuth } from "@/lib/auth-guard";

export default async function OnboardingPage() {
  await requireAuth()
  return (
    <AppShell>
      <OnBoardingClient />
    </AppShell>
  );
}
