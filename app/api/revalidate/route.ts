import { revalidatePath } from 'next/cache'
import { NextRequest } from 'next/server'
 
export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')

  if (secret !== process.env.MY_SECRET_TOKEN) {
    return Response.json({ message: 'Invalid token' });
  }
 
  revalidatePath('/isr')
  return Response.json({ revalidated: true, now: Date.now() })
}
