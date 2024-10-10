import { asc, between, count, eq, getTableColumns, sql } from 'drizzle-orm';
import { db } from '@/app/db/index';
import { quizTable, SelectQuiz, usersTable } from '@/app/db/schema';
export async function getUserById(): Promise<
  Array<{
    quiz:boolean,
    timestamp: Date
  }>
> {
  return db.select().from(quizTable);
}