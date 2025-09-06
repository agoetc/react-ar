import { NextResponse } from 'next/server';
import getMockImageObjects from '@/mocks/imageObjects';

export async function GET() {
  const data = getMockImageObjects();
  return NextResponse.json(data);
}

