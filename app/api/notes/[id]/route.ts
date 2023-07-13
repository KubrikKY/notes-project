import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  return NextResponse.json({
    title: 'HELLO NEXT',
  });
}

export async function PUT(req: Request) {
  return NextResponse.json({
    title: 'HELLO NEXT PUT',
  });
}

export async function DELETE(req: Request) {
  return NextResponse.json({
    title: 'HELLO NEXT PUT',
  });
}
