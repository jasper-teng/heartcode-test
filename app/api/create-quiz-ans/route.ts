import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const correct = searchParams.get('correct');

  var data = false;
  if(correct == "true"){
    data = true;
  }
  
  try {
    await sql`INSERT INTO quizres (correct, timestamp) VALUES (${data}, NOW());`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ 'response': 'ok' }, { status: 200 });
}