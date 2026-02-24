import type { MatchCardModel } from "@/components/features/matches/MatchCard";

export const mockMatches: MatchCardModel[] = [
  {
    id: "u1",
    name: "Sara Ali",
    headline: "Frontend dev · UTC+3",
    rating: 4.7,
    sessionsCount: 18,
    teach: { skill: "React", level: "Advanced" },
    learn: { skill: "English", level: "Intermediate" },
  },
  {
    id: "u2",
    name: "Omar Hassan",
    headline: "Data analyst · Online",
    rating: 4.5,
    sessionsCount: 9,
    teach: { skill: "Excel", level: "Advanced" },
    learn: { skill: "UI Design", level: "Beginner" },
  },
];