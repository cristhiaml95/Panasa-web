import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    message: 'EstudIA API is running on Firebase App Hosting',
    environment: process.env.NODE_ENV || 'development'
  })
}

export async function POST() {
  return NextResponse.json({
    message: 'POST method received',
    timestamp: new Date().toISOString()
  })
}