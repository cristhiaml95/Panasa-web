import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || 'Unknown'
  const timestamp = new Date().toISOString()
  
  return NextResponse.json({
    message: 'Welcome to EstudIA API',
    userAgent,
    timestamp,
    requestUrl: request.url,
    method: 'GET',
    firebase: {
      hosting: 'Firebase App Hosting',
      dynamic: true,
      ssr: true
    }
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    return NextResponse.json({
      message: 'Data received successfully',
      receivedData: body,
      timestamp: new Date().toISOString(),
      processed: true
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid JSON data' },
      { status: 400 }
    )
  }
}