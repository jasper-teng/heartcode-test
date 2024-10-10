import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import {db} from  "@/app/db/index";
import { quizTable } from "@/app/db/schema"
 
export async function GET(request: Request) {
 
  try {
    await sql`SELECT * from pets;`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const pets = await sql`SELECT * FROM Pets;`;
  return NextResponse.json({ pets }, { status: 200 });
}