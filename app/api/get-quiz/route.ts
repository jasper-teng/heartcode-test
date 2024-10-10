import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {

  try {
    await sql`SELECT * from quizres;`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const ans = await sql`SELECT * from quizres;`;
  return NextResponse.json({ ans }, { status: 200 });
}