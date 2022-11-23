import { NextResponse } from 'next/server';

export default function Page (req) {
  return NextResponse.json({
    name: `Hello, from ${req.url} I'm now an Edge Function!`,
  });
};

export const config = {
  runtime: 'experimental-edge',
};