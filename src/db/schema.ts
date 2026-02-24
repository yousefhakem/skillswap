import { int, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  bio: text("bio"),
  city: text("city"),
  timezone: text("timezone"),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(
    () => new Date()
  ),
});

export type User = InferSelectModel<typeof users>;
export type NewUser = InferInsertModel<typeof users>;

// =====================
// SKILLS
// =====================
export const skills = sqliteTable("skills", {
  id: text("id").primaryKey(),
  name: text("name").notNull().unique(),
  category: text("category"),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(
    () => new Date()
  ),
});
export type Skill = InferSelectModel<typeof skills>;
export type NewSkill = InferInsertModel<typeof skills>;

// =====================
// USER_SKILLS
// =====================
export const userSkills = sqliteTable("user_skills", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull(),
  skillId: text("skill_id").notNull(),
  type: text("type").notNull(), // TEACH | LEARN
  level: text("level").notNull(), // BEGINNER | INTERMEDIATE | ADVANCED
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(
    () => new Date()
  ),
});
export type UserSkill = InferSelectModel<typeof userSkills>;
export type NewUserSkill = InferInsertModel<typeof userSkills>;

// =====================
// SWAP REQUESTS
// =====================
export const swapRequests = sqliteTable("swap_requests", {
  id: text("id").primaryKey(),
  requesterId: text("requester_id").notNull(),
  receiverId: text("receiver_id").notNull(),
  teachSkillId: text("teach_skill_id").notNull(),
  learnSkillId: text("learn_skill_id").notNull(),
  status: text("status").notNull().default("PENDING"),
  message: text("message"),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(
    () => new Date()
  ),
});
export type SwapRequest = InferSelectModel<typeof swapRequests>;
export type NewSwapRequest = InferInsertModel<typeof swapRequests>;

// =====================
// SESSIONS
// =====================
export const sessions = sqliteTable("sessions", {
  id: text("id").primaryKey(),
  swapRequestId: text("swap_request_id").notNull(),
  scheduledStart: integer("scheduled_start", { mode: "timestamp" }).notNull(),
  scheduledEnd: integer("scheduled_end", { mode: "timestamp" }).notNull(),
  mode: text("mode").default("ONLINE"),
  location: text("location"),
  status: text("status").default("SCHEDULED"),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(
    () => new Date()
  ),
});
export type Session = InferSelectModel<typeof sessions>;
export type NewSession = InferInsertModel<typeof sessions>;

// =====================
// RATINGS
// =====================
export const ratings = sqliteTable("ratings", {
  id: text("id").primaryKey(),
  sessionId: text("session_id").notNull(),
  raterId: text("rater_id").notNull(),
  rateeId: text("ratee_id").notNull(),
  stars: integer("stars").notNull(),
  comment: text("comment"),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(
    () => new Date()
  ),
});
export type Rating = InferSelectModel<typeof ratings>;
export type NewRating = InferInsertModel<typeof ratings>;
