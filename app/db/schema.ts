import { integer, pgTable, varchar, boolean, timestamp } from "drizzle-orm/pg-core";
export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const quizTable = pgTable("quizres", {
    quiz: boolean().notNull(),
    timestamp: timestamp().notNull()
})

export type SelectQuiz = typeof quizTable.$inferSelect;
