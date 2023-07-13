import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  return NextResponse.json({
    title: 'HELLO NEXT',
  });
}

export async function POST(req: Request) {
  const { body } = req;
  return NextResponse.json({
    title: 'HELLO NEXT POST',
    body: JSON.stringify(body),
  });
}
