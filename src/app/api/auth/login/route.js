import { NextResponse } from 'next/server';

export async function POST(req) {
	console.log(req.body);
	NextResponse.json({ suc: true });
}
