import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://suggestqueries.google.com/complete/search?client=firefox&ds=web&q=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    return NextResponse.json(data[1]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch suggestions' }, { status: 500 });
  }
}