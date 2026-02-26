// lib/auth-guard.ts
import { auth } from "@/lib/auth"; // Your server-side auth instance
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function requireAuth() {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    redirect("/login"); // Redirect to login
  }

  return session;
}