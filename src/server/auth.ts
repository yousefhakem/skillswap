"use server";

import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";

export async function signIn(email: string, password: string) {
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });

    return {
      success: true,
      message: "Signed In successfully.",
    };
  } catch (error) {
    const e = error as Error;
    return {
      success: false,
      message: e.message || "An unknown error occurred.",
    };
  }
}

export async function signInWithGoogle() {
  await authClient.signIn.social({
    provider: "google",
    callbackURL: "/matches",
  });
}

export async function signUp() {
  await auth.api.signUpEmail({
    body: {
      email: "yousef@g.com",
      password: "password1234",
      name: "yousef hakem",
    },
  });
}
